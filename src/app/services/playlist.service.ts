import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:8080/api/playlist/lists';

  constructor(private http: HttpClient) { }

  getPlaylists(): Observable<{ playlists: Playlist[] }> {
    return this.http.get<{ playlists: Playlist[] }>(this.apiUrl);
  }

  createPlaylist(playlist: Playlist): Observable<any> {
    return this.http.post<any>(this.apiUrl, playlist);
  }
}
