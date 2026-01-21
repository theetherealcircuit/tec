import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeDependency } from './home.dependency';
import { EventModalComponent } from '../shared/event-modal/event-modal.component';

@Component({
  selector: 'app-home',
  imports: [HomeDependency],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  @ViewChild('eventModal') eventModal!: EventModalComponent;

  externalLinks = {
    contactUs: '/contact-us'
  };

  // Automatically open popup when page loads

  ngOnInit(): void {
    setTimeout(() => {
      this.eventModal.openModal();
    }, 400);
  }

  openLink(link: string) {
    window.location.href = `/${link}`;
  }
}
