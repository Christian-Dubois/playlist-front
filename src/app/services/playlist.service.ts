import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private baseURL = 'http://localhost:8080/api/playlist/lists';

  constructor(private http: HttpClient) { }

  findAllPlaylists(): Observable<{ playlists: Playlist[] }> {
    return this.http.get<{ playlists: Playlist[] }>(this.baseURL);
  }

  createPlaylist(playlist: Playlist): Observable<any> {
    return this.http.post<any>(this.baseURL, playlist);
  }

  findPlaylistByName(listName: string): Observable<Playlist> {
    const url = `${this.baseURL}/?listName=${listName}`;
    return this.http.get<Playlist>(url);
  }

  deletePlaylist(listName: string): Observable<any> {
    const deleteUrl = `${this.baseURL}/?listName=${listName}`;
    return this.http.delete<any>(deleteUrl);
  }
}
