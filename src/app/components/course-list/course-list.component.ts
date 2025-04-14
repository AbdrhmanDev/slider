import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CourseVideo } from '../../models/course-video.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseItemComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() videos: CourseVideo[] = [];
  @Input() currentVideoId = '';
  @Output() selectVideoEvent = new EventEmitter<CourseVideo>();

  selectVideo(video: CourseVideo): void {
    this.selectVideoEvent.emit(video);
  }
}
