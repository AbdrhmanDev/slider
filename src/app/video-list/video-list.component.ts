import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VideoPlayerSectionComponent } from './video-player-section/video-player-section.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';

interface Video {
  id: string;
  title: string;
  chapter: string;
  views: string;
  timeAgo: string;
  duration: string;
  thumbnail: string;
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    VideoPlayerSectionComponent,
    VideoPlaylistComponent,
  ],
})
export class VideoListComponent {
  constructor(private dialogRef: MatDialogRef<VideoListComponent>) {
    this.checkScreenSize();
  }

  currentVideo: Video = {
    id: 'dQw4w9WgXcQ',
    title: 'Getting Started with Angular Development',
    chapter: 'Introduction',
    views: '1.2M',
    timeAgo: '1 day ago',
    duration: '45:30',
    thumbnail: 'assets/images/ecommerce/01.jpg',
  };

  videos: Video[] = [
    {
      id: 'video1',
      title: 'Introduction to Angular Components',
      chapter: 'Chapter 1',
      views: '15K',
      timeAgo: '2 days ago',
      duration: '10:30',
      thumbnail: 'assets/images/ecommerce/01.jpg',
    },
    {
      id: 'video25',
      title: 'Introduction to Angular Components',
      chapter: 'Chapter 1',
      views: '15K',
      timeAgo: '2 days ago',
      duration: '10:30',
      thumbnail: 'assets/images/ecommerce/01.jpg',
    },
    {
      id: 'video556',
      title: 'Introduction to Angular Components',
      chapter: 'Chapter 1',
      views: '15K',
      timeAgo: '2 days ago',
      duration: '10:30',
      thumbnail: 'assets/images/ecommerce/01.jpg',
    },
    {
      id: 'video56',
      title: 'Introduction to Angular Components',
      chapter: 'Chapter 1',
      views: '15K',
      timeAgo: '2 days ago',
      duration: '10:30',
      thumbnail: 'assets/images/ecommerce/01.jpg',
    },
    {
      id: 'video88',
      title: 'Introduction to Angular Components',
      chapter: 'Chapter 1',
      views: '15K',
      timeAgo: '2 days ago',
      duration: '10:30',
      thumbnail: 'assets/images/ecommerce/01.jpg',
    },
    {
      id: 'video56',
      title: 'Services and Dependency Injection',
      chapter: 'Chapter 2',
      views: '12K',
      timeAgo: '3 days ago',
      duration: '15:45',
      thumbnail: 'assets/images/ecommerce/02.jpg',
    },
    {
      id: 'video3',
      title: 'Routing and Navigation',
      chapter: 'Chapter 3',
      views: '8K',
      timeAgo: '4 days ago',
      duration: '20:15',
      thumbnail: 'assets/images/ecommerce/03.jpg',
    },
    {
      id: 'video4',
      title: 'Forms and Validation',
      chapter: 'Chapter 4',
      views: '10K',
      timeAgo: '5 days ago',
      duration: '18:30',
      thumbnail: 'assets/images/ecommerce/04.jpg',
    },
  ];

  zoomLevel: number = 1;
  readonly MAX_ZOOM = 1.5;
  readonly MIN_ZOOM = 0.5;
  readonly ZOOM_STEP = 0.1;
  isStackedLayout: boolean = false;
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    if (this.isMobileView && !this.isStackedLayout) {
      this.isStackedLayout = true;
    }
    if (window.innerWidth < 576 && this.zoomLevel > 0.9) {
      this.zoomLevel = 0.9;
    }
  }

  playVideo(video: Video): void {
    this.currentVideo = video;
    if (this.isMobileView && this.isStackedLayout) {
      const contentWrapper = document.querySelector('.content-wrapper');
      if (contentWrapper) {
        contentWrapper.scrollTop = 0;
      }
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  zoomIn(): void {
    if (this.zoomLevel < this.MAX_ZOOM) {
      this.zoomLevel += this.ZOOM_STEP;
    }
  }

  zoomOut(): void {
    if (this.zoomLevel > this.MIN_ZOOM) {
      this.zoomLevel -= this.ZOOM_STEP;
    }
  }

  resetZoom(): void {
    this.zoomLevel = 1;
  }

  toggleLayout(): void {
    this.isStackedLayout = !this.isStackedLayout;
  }
}
