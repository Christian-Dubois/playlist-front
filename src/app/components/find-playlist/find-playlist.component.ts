import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Playlist } from '../../models/playlist.model';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-find-playlist',
  templateUrl: './find-playlist.component.html',
  styleUrls: ['./find-playlist.component.css']
})
export class FindPlaylistComponent implements OnInit {
  findPlaylistForm: FormGroup;
  foundPlaylist: Playlist | undefined;
  notFoundMessage: string | undefined;

  constructor(private formBuilder: FormBuilder, private playlistService: PlaylistService) {
    this.findPlaylistForm = this.formBuilder.group({
      listName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  findPlaylist(): void {
    if (this.findPlaylistForm.invalid) {
      return;
    }

    const listName = this.findPlaylistForm.value.listName;
    this.playlistService.getPlaylistByName(listName).subscribe(
      (playlist: Playlist) => {
        this.foundPlaylist = playlist;
        this.notFoundMessage = undefined; // Clear not found message if playlist is found
      },
      (error) => {
        console.error('Erro ao buscar playlist:', error);
        this.foundPlaylist = undefined;
        this.notFoundMessage = 'Playlist não encontrada.'; // Set not found message if error occurs
      }
    );
  }
}
