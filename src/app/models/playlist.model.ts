export interface Playlist {
  nome: string;
  descricao: string;
  musicas: Music[];
}

export interface Music {
  titulo: string;
  artista: string | null;
  album: string | null;
  ano: string | null;
  genero: string | null;
}
