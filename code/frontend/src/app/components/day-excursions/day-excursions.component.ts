import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-excursions',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './day-excursions.component.html',
  styleUrl: './day-excursions.component.scss'
})
export class DayExcursionsComponent {
  constructor(private router: Router) { }
  dayExcursions = [
    {
      id: "sambhar",
      title: "Sambhar Salt Lake",
      shortSummary: "India’s largest inland salt lake with surreal pink horizons and rich ecology.",
      heroImage: "hero.jpg"
    },
    {
      id: "viratnagar",
      title: "Viratnagar",
      shortSummary: "Ancient Buddhist ruins, Ashokan inscriptions, and myth-history landscapes.",
      heroImage: "hero.jpg"
    },
    {
      id: "sariska",
      title: "Sariska National Park",
      shortSummary: "More than a tiger reserve—temples, forests, history, and wilderness together.",
      heroImage: "hero.jpg"
    },
    {
      id: "bharatpur",
      title: "Bharatpur Bird Sanctuary",
      shortSummary: "Wetland biodiversity and one of the world’s finest bird habitats.",
      heroImage: "hero.jpg"
    },
    {
      id: "ranthambore",
      title: "Ranthambore Fort & Forest",
      shortSummary: "Ancient fort architecture meets wildlife-rich forests.",
      heroImage: "hero.jpg"
    },
    {
      id: "harsh-parvat",
      title: "Harsh Parvat",
      shortSummary: "Hilltop temples, archaeological landscapes, sacred routes, and wind-swept ridges.",
      heroImage: "hero.jpg"
    }
  ];

  goToDetail(id: any) {
    this.router.navigate(['/day-excursions', id]);
  }

}
