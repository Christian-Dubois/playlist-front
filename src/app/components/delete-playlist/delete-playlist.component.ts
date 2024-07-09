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
  selectedPlaylistId: string | undefined;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.getPlaylists().subscribe(
      (data: { playlists: Playlist[] }) => {
        this.playlists = data.playlists;
      },
      (error: any) => {
        console.error('Erro ao carregar playlists:', error);
      }
    );
  }

  deletePlaylist(): void {
    if (!this.selectedPlaylistId) {
      console.error('Nenhuma playlist selecionada para deletar.');
      return;
    }

    this.playlistService.deletePlaylist(this.selectedPlaylistId).subscribe(
      () => {
        console.log('Playlist deletada com sucesso.');
        // Lógica para atualizar a lista de playlists após deletar, se necessário
        this.loadPlaylists();
      },
      (error: any) => {
        console.error('Erro ao deletar playlist:', error);
      }
    );
  }

  selectPlaylist(playlistId: string): void {
    this.selectedPlaylistId = playlistId;
  }
}
