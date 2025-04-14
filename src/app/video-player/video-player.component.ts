import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Video {
  src: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, MatSliderModule, MatIconModule, MatButtonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnChanges {
  @Input() video?: Video;
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  currentTime = 0;
  duration = 0;
  volume = 1;
  isPlaying = false;
  isMuted = false;
  isFullscreen = false;

  ngOnChanges(changes: SimpleChanges): void {
    // When video source changes, reset the player
    if (this.videoElement?.nativeElement) {
      this.isPlaying = false;
      // Add a small delay to ensure DOM is updated
      setTimeout(() => {
        if (this.videoElement?.nativeElement) {
          this.videoElement.nativeElement.load();
        }
      }, 100);
    }
  }

  get nativeVideo(): HTMLVideoElement {
    return this.videoElement.nativeElement;
  }

  onTimeUpdate(): void {
    this.currentTime = this.nativeVideo.currentTime;
    this.duration = this.nativeVideo.duration;
  }

  togglePlay(): void {
    if (this.isPlaying) {
      this.nativeVideo.pause();
    } else {
      this.nativeVideo.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  seek(time: number): void {
    if (this.nativeVideo) {
      this.nativeVideo.currentTime = time;
    }
  }

  updateVolume(value: number): void {
    this.volume = value;
    this.nativeVideo.volume = value;
    this.isMuted = value === 0;
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.nativeVideo.muted = this.isMuted;
    if (this.isMuted) {
      this.nativeVideo.volume = 0;
      this.volume = 0;
    } else {
      this.nativeVideo.volume = 1;
      this.volume = 1;
    }
  }

  async toggleFullscreen(): Promise<void> {
    const videoContainer =
      this.videoElement.nativeElement.parentElement?.parentElement;
    if (!videoContainer) return;

    if (!this.isFullscreen) {
      try {
        if (videoContainer.requestFullscreen) {
          await videoContainer.requestFullscreen();
        } else if ((videoContainer as any).webkitRequestFullscreen) {
          await (videoContainer as any).webkitRequestFullscreen();
        } else if ((videoContainer as any).msRequestFullscreen) {
          await (videoContainer as any).msRequestFullscreen();
        }
        this.isFullscreen = true;
      } catch (error) {
        console.error('Error attempting to enable fullscreen:', error);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        this.isFullscreen = false;
      } catch (error) {
        console.error('Error attempting to exit fullscreen:', error);
      }
    }
  }

  formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
