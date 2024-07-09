import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { FindPlaylistComponent } from './components/find-playlist/find-playlist.component';
import { PlaylistService } from './services/playlist.service';
import { DeletePlaylistComponent } from './components/delete-playlist/delete-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    CreatePlaylistComponent,
    FindPlaylistComponent,
    DeletePlaylistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
