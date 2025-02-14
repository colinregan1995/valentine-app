import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = ['./assets/love1.jpg', './assets/love2.jpg', './assets/love3.jpg', './assets/love4.jpg', './assets/love5.jpg', './assets/love6.jpg', './assets/love7.jpg'];
  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
  
  // playMusic() {
  //   const audio: HTMLAudioElement = document.querySelector('#audioPlayer')!;
  //   audio.play();
  // }
  playMusic() {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(error => console.error('Error playing audio:', error));
    } else {
      console.error('Audio element not found');
    }
  }
  
}