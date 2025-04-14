import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CourseVideo } from '../../models/course-video.model';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule
  ],
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() video!: CourseVideo;
  @Input() index!: number;
  @Input() isActive = false;
  @Output() selectVideoEvent = new EventEmitter<CourseVideo>();

  selectVideo(): void {
    this.selectVideoEvent.emit(this.video);
  }
}
