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

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.findAllPlaylists().subscribe(
      (data: { playlists: Playlist[] }) => {
        this.playlists = data.playlists;
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
        this.selectedPlaylist = null; // Limpa a playlist selecionada após a exclusão
        this.loadPlaylists(); // Recarrega a lista de playlists após a exclusão
      },
      (error: any) => {
        console.error('Erro ao deletar playlist:', error);
      }
    );
  }

  selectPlaylist(target: EventTarget | null): void {
    this.playlistService.findPlaylistByName((target as HTMLInputElement).value).subscribe(
      (playlist: Playlist) => {
        this.selectedPlaylist = playlist;
      },
      (error: any) => {
        console.error('Erro ao buscar playlist:', error);
      }
    );
  }
}
