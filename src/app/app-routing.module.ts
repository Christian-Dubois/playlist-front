import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { FindPlaylistComponent } from './components/find-playlist/find-playlist.component';


const routes: Routes = [
  { path: 'list-playlists', component: ListPlaylistsComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent },
  { path: 'find-playlist', component: FindPlaylistComponent },
  { path: '', redirectTo: '/list-playlists', pathMatch: 'full' },
  { path: '**', redirectTo: '/list-playlists' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
