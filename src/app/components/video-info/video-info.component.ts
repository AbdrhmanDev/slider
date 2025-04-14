import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseVideo } from '../../models/course-video.model';

@Component({
  selector: 'app-video-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent {
  @Input() video?: CourseVideo;
}
