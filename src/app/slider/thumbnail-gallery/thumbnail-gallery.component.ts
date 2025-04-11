import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thumbnail-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-gallery.component.html',
  styleUrls: ['./thumbnail-gallery.component.scss'],
})
export class ThumbnailGalleryComponent {
  @Input() images: string[] = [];
  @Input() activeIndex: number = 0;
  @Output() thumbnailClick = new EventEmitter<number>();

  selectImage(index: number): void {
    this.thumbnailClick.emit(index);
  }
}
