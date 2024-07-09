import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist } from '../../models/playlist.model';

@Component({
  selector: 'app-find-playlist',
  templateUrl: './find-playlist.component.html',
  styleUrls: ['./find-playlist.component.css']
})
export class FindPlaylistComponent {
  findPlaylistForm: FormGroup;
  foundPlaylist: Playlist | null = null;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {
    this.findPlaylistForm = this.fb.group({
      listName: ['', Validators.required]
    });
  }

  findPlaylist(): void {
    if (this.findPlaylistForm.valid) {
      const listName = this.findPlaylistForm.get('listName')?.value;
      this.playlistService.getPlaylistByName(listName).subscribe(
        (data) => {
          this.foundPlaylist = data.playlist;
        },
        (error) => {
          console.error('Erro ao buscar playlist:', error);
          this.foundPlaylist = null;
        }
      );
    }
  }
}
