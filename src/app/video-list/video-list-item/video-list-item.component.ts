import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-video-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="video-item" [class.active]="isActive" (click)="onSelect()">
      <div class="thumbnail">
        <img [src]="video.thumbnail" [alt]="video.title" />
        <span class="duration">{{ video.duration }}</span>
      </div>
      <div class="video-details">
        <h5>{{ video.title }}</h5>
        <p class="chapter">{{ video.chapter }}</p>
        <p class="stats">{{ video.views }} views • {{ video.timeAgo }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .video-item {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background: #fff;
        border-radius: 10px;
        margin-bottom: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.06);
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;

        &:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        }

        &.active {
          border-left: 4px solid #1976d2;
          background: #e3f2fd;
          padding-left: calc(1rem - 3px);

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background: linear-gradient(to bottom, #1976d2, #2196f3);
            border-radius: 2px;
          }
        }
      }

      .thumbnail {
        width: 100px;
        height: 56.25px;
        border-radius: 6px;
        overflow: hidden;
        flex-shrink: 0;
        position: relative;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.05);
        }

        .duration {
          position: absolute;
          bottom: 4px;
          right: 4px;
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 2px 4px;
          border-radius: 2px;
          font-size: 0.75rem;
        }
      }

      .video-details {
        flex: 1;
        min-width: 0;

        h5 {
          margin: 0 0 0.25rem;
          font-size: 0.9rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgba(0, 0, 0, 0.87);
        }

        .chapter {
          margin: 0 0 0.25rem;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.8rem;
        }

        .stats {
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.75rem;
        }
      }

      @media (max-width: 768px) {
        .video-item {
          padding: 0.75rem;
          gap: 0.75rem;
        }

        .thumbnail {
          width: 80px;
          height: 45px;
        }

        .video-details h5 {
          font-size: 0.85rem;
        }
      }
    `,
  ],
})
export class VideoListItemComponent {
  @Input() video!: Video;
  @Input() isActive = false;
  @Output() selected = new EventEmitter<void>();

  onSelect(): void {
    this.selected.emit();
  }
}
