import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: string;
  title: string;
  chapter: string;
  views: string;
  timeAgo?: string;
}

@Component({
  selector: 'app-video-player-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main-video-section">
      <div class="video-player">
        <iframe [src]="safeVideoUrl" [title]="video.title" allowfullscreen>
        </iframe>
      </div>
      <div class="video-info">
        <h3>{{ video.title }}</h3>
        <p class="video-meta">{{ video.chapter }} • {{ video.views }} views</p>
      </div>
    </div>
  `,
  styles: [
    `
      .main-video-section {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .video-player {
          flex: 1;
          position: relative;
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          background: #000;

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
        }

        .video-info {
          padding: 1rem;
          background: #fff;
          border-top: 1px solid rgba(0, 0, 0, 0.08);

          h3 {
            margin: 0 0 0.5rem;
            font-size: 1.1rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .video-meta {
            margin: 0;
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.9rem;
          }
        }
      }
    `,
  ],
})
export class VideoPlayerSectionComponent {
  @Input() video!: Video;

  constructor(private sanitizer: DomSanitizer) {}

  get safeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.id);
  }
}
