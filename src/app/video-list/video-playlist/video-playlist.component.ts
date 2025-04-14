import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListItemComponent } from '../video-list-item/video-list-item.component';

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
  selector: 'app-video-playlist',
  standalone: true,
  imports: [CommonModule, VideoListItemComponent],
  template: `
    <div class="playlist-section">
      <div class="playlist-header">
        <h4>{{ title }}</h4>
      </div>
      <div class="video-list">
        <app-video-list-item
          *ngFor="let video of videos"
          [video]="video"
          [isActive]="video.id === activeVideoId"
          (selected)="onVideoSelect(video)"
        >
        </app-video-list-item>
      </div>
    </div>
  `,
  styles: [
    `
      .playlist-section {
        height: 100%;
        display: flex;
        flex-direction: column;

        .playlist-header {
          padding: 0.75rem 1rem;
          background: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          flex-shrink: 0;

          h4 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: 500;
          }
        }

        .video-list {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;

          &::-webkit-scrollbar {
            width: 6px;
          }

          &::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;

            &:hover {
              background: #666;
            }
          }
        }
      }
    `,
  ],
})
export class VideoPlaylistComponent {
  @Input() videos: Video[] = [];
  @Input() title = 'Playlist';
  @Input() activeVideoId: string | null = null;
  @Output() videoSelected = new EventEmitter<Video>();

  onVideoSelect(video: Video): void {
    this.videoSelected.emit(video);
  }
}
