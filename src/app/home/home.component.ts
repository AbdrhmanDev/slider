import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VideoListComponent } from '../video-list/video-list.component';
import { CourseContentListComponent } from '../course-content-list/course-content-list.component';

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
  openVideoList2() {
    const dialogConfig2 = new MatDialogConfig();
    dialogConfig2.maxWidth = '100vw';
    dialogConfig2.maxHeight = '100vh';
    dialogConfig2.height = '100vh';
    dialogConfig2.width = '100vw';
    dialogConfig2.panelClass = 'full-screen-dialog';
    dialogConfig2.hasBackdrop = true;
    dialogConfig2.autoFocus = false;

    this.dialog.open(CourseContentListComponent, dialogConfig2);
  }
}
