import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlaylistComponent } from './find-playlist.component';

describe('FindPlaylistComponent', () => {
  let component: FindPlaylistComponent;
  let fixture: ComponentFixture<FindPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
