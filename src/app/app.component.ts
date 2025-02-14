import { Component } from '@angular/core';
import * as tslib from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = ['assets/love1.jpg', 'assets/love2.jpg', 'assets/love3.jpg'];
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
  
  playMusic() {
    const audio: HTMLAudioElement = document.querySelector('#audioPlayer')!;
    audio.play();
  }
}