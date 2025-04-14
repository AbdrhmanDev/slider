import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Videogular modules
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@Component({
  selector: 'app-videogular-player',
  standalone: true,
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  templateUrl: './videogular-player.component.html',
  styleUrls: [
    './videogular-player.component.scss',
    './videogular-custom.css'
  ]
})
export class VideogularPlayerComponent implements OnChanges {
  @Input() videoSrc: string = '';
  @ViewChild('media') mediaPlayer!: ElementRef;
  
  ngOnChanges(changes: SimpleChanges): void {
    // When video source changes, reload the player
    if (changes['videoSrc'] && !changes['videoSrc'].firstChange) {
      setTimeout(() => {
        if (this.mediaPlayer?.nativeElement) {
          this.mediaPlayer.nativeElement.load();
        }
      }, 100);
    }
  }
}
