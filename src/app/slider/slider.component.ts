import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ImageViewerModule,
  ImageViewerComponent,
  CustomEvent,
  ImageViewerConfig,
} from 'ngx-image-viewer-3';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ThumbnailGalleryComponent } from './thumbnail-gallery/thumbnail-gallery.component';
import { FullscreenViewerComponent } from './fullscreen-viewer/fullscreen-viewer.component';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    ImageViewerModule,
    MatButtonModule,
    MatDialogModule,
    ThumbnailGalleryComponent,
    FullscreenViewerComponent,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @ViewChild('imgView') imgView!: ImageViewerComponent;

  images = [
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-oludeniz.jpg',
    'https://www.planetware.com/wpimages/2023/05/turkey-top-attractions-intro-paragraph-ephesus.jpg',
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-pamukkale.jpg',
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-oludeniz.jpg',
  ];

  currentIndex = 0;
  isFullscreen = false;

  config: ImageViewerConfig = {
    customBtns: [
      { name: 'print', icon: 'fa fa-print' },
      { name: 'link', icon: 'fa fa-link' },
    ],
  };

  constructor(private dialog: MatDialog) {}

  onThumbnailClick(index: number): void {
    this.currentIndex = index;
  }

  openFullscreen(index: number): void {
    this.isFullscreen = true;
    this.currentIndex = index;
  }

  closeFullscreen(): void {
    this.isFullscreen = false;
  }

  async handleEvent(event: CustomEvent): Promise<void> {
    console.log(
      `${event.name} has been clicked on img ${event.imageIndex + 1}`
    );

    switch (event.name) {
      case 'print':
        window.print();
        break;
      case 'link':
        const src: string = this.images[event.imageIndex];
        await navigator.clipboard.writeText(src);
        console.log('clipboard copied');
        break;
    }
  }

  openVideoList(): void {
    this.dialog.open(VideoListComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw',
      panelClass: 'full-screen-dialog',
      autoFocus: false,
    });
  }
}
