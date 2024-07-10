import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist.model';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-delete-playlist',
  templateUrl: './delete-playlist.component.html',
  styleUrls: ['./delete-playlist.component.css']
})
export class DeletePlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  selectedPlaylist: Playlist | null = null;
  deleteSuccessMessage: string | null = null;
  deleteErrorMessage: string | null = null;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.findAllPlaylists().subscribe(
      (data: { playlists: Playlist[] }) => {
        if (data && data.playlists && data.playlists.length > 0) {
          this.playlists = data.playlists;
        } else {
          this.playlists = [];
          this.selectedPlaylist = null;
        }
      },
      (error: any) => {
        console.error('Erro ao carregar playlists:', error);
      }
    );
  }

  deletePlaylist(): void {
    if (!this.selectedPlaylist) {
      console.error('Nenhuma playlist selecionada para deletar.');
      return;
    }

    this.playlistService.deletePlaylist(this.selectedPlaylist.nome).subscribe(
      () => {
        console.log('Playlist deletada com sucesso.');
        this.deleteSuccessMessage = 'Playlist deletada com sucesso.';
        this.deleteErrorMessage = null;
        this.selectedPlaylist = null;
        this.loadPlaylists();
      },
      (error: any) => {
        this.deleteErrorMessage = 'Não foi possível deletar a playlist.';
        this.deleteSuccessMessage = null;
      }
    );
  }

  selectPlaylist(target: EventTarget | null): void {
    this.playlistService.findPlaylistByName((target as HTMLSelectElement).value).subscribe(
      (playlist: Playlist) => {
        this.selectedPlaylist = playlist;
      },
      (error: any) => {
        console.error('Erro ao buscar playlist:', error);
      }
    );
  }
}
