import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ImageViewerModule,
  CustomEvent,
  ImageViewerConfig,
} from 'ngx-image-viewer-3';

@Component({
  selector: 'app-fullscreen-viewer',
  standalone: true,
  imports: [CommonModule, ImageViewerModule],
  templateUrl: './fullscreen-viewer.component.html',
  styleUrls: ['./fullscreen-viewer.component.scss'],
})
export class FullscreenViewerComponent {
  @Input() images: string[] = [];
  @Input() currentIndex: number = 0;
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() customEvent = new EventEmitter<CustomEvent>();

  config: ImageViewerConfig = {
    customBtns: [
      { name: 'print', icon: 'fa fa-print' },
      { name: 'link', icon: 'fa fa-link' },
      { name: 'zoom-in', icon: 'fa fa-search-plus' },
      { name: 'zoom-out', icon: 'fa fa-search-minus' },
    ],
    btnShow: {
      zoomIn: true,
      zoomOut: true,
      rotateClockwise: true,
      rotateCounterClockwise: true,
      next: true,
      prev: true,
    },
  };

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isVisible) return;

    if (event.key === 'Escape') {
      this.closeViewer();
    }
  }

  closeViewer(): void {
    this.close.emit();
  }

  handleCustomEvent(event: CustomEvent): void {
    this.customEvent.emit(event);
  }
}
