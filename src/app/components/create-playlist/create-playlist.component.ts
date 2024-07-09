import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist } from '../../models/playlist.model';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {
  playlistForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {
    this.playlistForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      musicas: this.fb.array([])
    });
  }

  get musicas(): FormArray {
    return this.playlistForm.get('musicas') as FormArray;
  }

  adicionarMusica(): void {
    this.musicas.push(this.createMusicaGroup());
  }

  removerMusica(index: number): void {
    this.musicas.removeAt(index);
  }

  createMusicaGroup(): FormGroup {
    return this.fb.group({
      titulo: ['', Validators.required],
      artista: [''],
      album: [''],
      ano: [''],
      genero: ['']
    });
  }

  criarPlaylist(): void {
    if (this.playlistForm.invalid) {
      this.errorMessage = 'Preencha corretamente todos os campos obrigatórios.';
      return;
    }

    const playlist: Playlist = this.playlistForm.value;

    this.playlistService.createPlaylist(playlist).subscribe(
      (response) => {
        this.successMessage = 'Playlist criada com sucesso!';
        this.errorMessage = null;
        this.playlistForm.reset();
      },
      (error) => {
        this.errorMessage = 'Erro ao criar playlist. Tente novamente.';
        console.error('Erro ao criar playlist:', error);
      }
    );
  }
}
