import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlaylistsComponent } from './components/list-playlists/list-playlists.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlaylistsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
