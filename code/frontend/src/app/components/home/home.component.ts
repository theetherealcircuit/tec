import { Component } from '@angular/core';
import { HomeDependency } from './home.dependency';

@Component({
  selector: 'app-home',
  imports: [HomeDependency],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  externalLinks = {
    contactUs: '/contact-us'
  };



  openLink(link: string) {
    window.location.href = `/${link}`;
  }
}
