import { Component, OnInit } from '@angular/core';
import galleryData from '../../../assets/resources/gallery.json';
@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  items: any[] = [];

  ngOnInit(): void {
    this.items = galleryData;
  }

  isVideo(file: string): boolean {
    return file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.MOV') || file.endsWith('.MP4');
  }

  isImage(file: string): boolean {
    return file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp');
  }

  isNEF(file: string): boolean {
    return file.endsWith('.nef') || file.endsWith('.NEF');
  }

}
