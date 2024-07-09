import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist } from '../../models/playlist.model';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  playlistForm: FormGroup;

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) {
    this.playlistForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      musicas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Lógica de inicialização que pode ser executada durante o OnInit, se necessário
  }

  adicionarMusica(): void {
    const musicasArray = this.playlistForm.get('musicas') as FormArray;
    musicasArray.push(this.criarMusicaFormGroup());
  }

  criarMusicaFormGroup(): FormGroup {
    return this.fb.group({
      titulo: ['', Validators.required],
      artista: [''],
      album: [''],
      ano: [''],
      genero: ['']
    });
  }

  removerMusica(index: number): void {
    const musicasArray = this.playlistForm.get('musicas') as FormArray;
    musicasArray.removeAt(index);
  }

  criarPlaylist(): void {
    if (this.playlistForm.valid) {
      const novaPlaylist = this.playlistForm.value as Playlist;
      this.playlistService.createPlaylist(novaPlaylist).subscribe(
        (response) => {
          console.log('Playlist criada com sucesso!', response);
          // ToDo: Adicionar mensagem de sucesso
        },
        (error: any) => {
          console.error('Erro ao criar playlist:', error);
          // ToDo: Adicionar mensagem de erro
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos obrigatórios.');
    }
  }

  get musicas(): FormArray {
    return this.playlistForm.get('musicas') as FormArray;
  }
}
