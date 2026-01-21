import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaUrlPipe } from '../../../pipes/mediaUrl.pipe';

@Component({
  selector: 'app-event-modal',
  imports: [CommonModule, MediaUrlPipe],
  standalone: true,
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.scss'
})
export class EventModalComponent implements OnInit, OnDestroy {


  @Input() eventName!: string;
  @Input() eventStartDate!: string;
  @Input() eventEndDate!: string;
  @Input() imageUrl!: string;
  particles = Array(20).fill(0);

  visible = false;
  countdown: any = {};
  interval: any;

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  openModal() {
    this.visible = true;
    this.startCountdown();
  }

  closeModal() {
    this.visible = false;
    clearInterval(this.interval);
  }

  startCountdown() {
    this.interval = setInterval(() => {
      const eventTime = new Date(this.eventStartDate).getTime();
      const now = Date.now();
      const diff = eventTime - now;

      if (diff < 0) return;

      this.countdown = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60)
      };
    }, 1000);
  }
}