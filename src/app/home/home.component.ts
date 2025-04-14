import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  openVideoList() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vh';
    dialogConfig.height = '100vh';
    dialogConfig.width = '100vw';
    dialogConfig.panelClass = 'full-screen-dialog';
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = false;

    this.dialog.open(VideoListComponent, dialogConfig);
  }
}
