import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-course-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss'],
})
export class CourseHeaderComponent {
  @Input() isStackedLayout = true;
  @Input() zoomLevel: number = 1;
  @Output() toggleLayoutEvent = new EventEmitter<void>();
  @Output() zoomChangeEvent = new EventEmitter<number>();

  readonly MAX_ZOOM = 1.5;
  readonly MIN_ZOOM = 0.5;
  readonly ZOOM_STEP = 0.1;

  toggleLayout(): void {
    this.toggleLayoutEvent.emit();
  }

  zoomIn(): void {
    if (this.zoomLevel < this.MAX_ZOOM) {
      this.zoomLevel += this.ZOOM_STEP;
      this.zoomChangeEvent.emit(this.zoomLevel);
    }
  }

  zoomOut(): void {
    if (this.zoomLevel > this.MIN_ZOOM) {
      this.zoomLevel -= this.ZOOM_STEP;
      this.zoomChangeEvent.emit(this.zoomLevel);
    }
  }

  resetZoom(): void {
    this.zoomLevel = 1;
    this.zoomChangeEvent.emit(this.zoomLevel);
  }
}
