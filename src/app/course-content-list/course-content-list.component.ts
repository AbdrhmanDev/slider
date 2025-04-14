import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Import our new components
import { CourseHeaderComponent } from '../components/course-header/course-header.component';
import { VideoInfoComponent } from '../components/video-info/video-info.component';
import { CourseListComponent } from '../components/course-list/course-list.component';
import { VideogularPlayerComponent } from '../components/videogular-player/videogular-player.component';

// Import our model
import { CourseVideo } from '../models/course-video.model';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-course-content-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseHeaderComponent,
    VideoInfoComponent,
    CourseListComponent,
    VideogularPlayerComponent,
  ],
  templateUrl: './course-content-list.component.html',
  styleUrls: ['./course-content-list.component.scss'],
})
export class CourseContentListComponent {
  isStackedLayout = false;
  zoomLevel: number = 1;
  readonly MAX_ZOOM = 1.5;
  readonly MIN_ZOOM = 0.5;
  readonly ZOOM_STEP = 0.1;

  videos: CourseVideo[] = [
    {
      id: 'video1',
      title: 'Introduction to the Course',
      duration: '10:30',
      isWatched: true,
      videoUrl: 'https://youtu.be/H2EHlMfTqiQ?si=o6_u5MIqtbWP7GCS',
      src: 'vid.mp4',
      description: 'An introduction to the course content and structure',
    },
    {
      id: 'video2',
      title: 'Getting Started with Basic Concepts',
      duration: '15:45',
      isWatched: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/vid.mp4',
      description: 'Learn the fundamental concepts needed for the course',
    },
    {
      id: 'video2',
      title: 'Getting Started with Basic Concepts',
      duration: '15:45',
      isWatched: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/vid.mp4',
      description: 'Learn the fundamental concepts needed for the course',
    },
    {
      id: 'video2',
      title: 'Getting Started with Basic Concepts',
      duration: '15:45',
      isWatched: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/vid.mp4',
      description: 'Learn the fundamental concepts needed for the course',
    },
    {
      id: 'video2',
      title: 'Getting Started with Basic Concepts',
      duration: '15:45',
      isWatched: true,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/vid.mp4',
      description: 'Learn the fundamental concepts needed for the course',
    },
    {
      id: 'video3',
      title: 'Advanced Topics Part 1',
      duration: '20:15',
      isWatched: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/advanced1.mp4',
      description: 'Dive into more complex topics and techniques',
    },
    {
      id: 'video4',
      title: 'Advanced Topics Part 2',
      duration: '18:30',
      isWatched: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      src: 'assets/videos/advanced2.mp4',
      description: 'Continue exploring advanced concepts and applications',
    },
  ];

  currentVideoId: string = 'video1';

  constructor(private sanitizer: DomSanitizer) {}

  selectVideo(video: CourseVideo): void {
    this.currentVideoId = video.id;
  }

  getCurrentVideo(): CourseVideo | undefined {
    return this.videos.find((video) => video.id === this.currentVideoId);
  }

  toggleLayout(): void {
    this.isStackedLayout = !this.isStackedLayout;
  }

  handleZoomChange(zoomLevel: number): void {
    this.zoomLevel = zoomLevel;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // Adjust zoom level for smaller screens
    if (window.innerWidth < 576 && this.zoomLevel > 0.9) {
      this.zoomLevel = 0.9;
    }
  }
}
