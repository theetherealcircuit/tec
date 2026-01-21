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
      heroImage: "assets/day/sambhar/hero.jpg"
    },
    {
      id: "viratnagar",
      title: "Viratnagar",
      shortSummary: "Ancient Buddhist ruins, Ashokan inscriptions, and myth-history landscapes.",
      heroImage: "assets/day/viratnagar/hero.jpg"
    },
    {
      id: "sariska",
      title: "Sariska National Park",
      shortSummary: "More than a tiger reserve—temples, forests, history, and wilderness together.",
      heroImage: "assets/day/sariska/hero.jpg"
    },
    {
      id: "bharatpur",
      title: "Bharatpur Bird Sanctuary",
      shortSummary: "Wetland biodiversity and one of the world’s finest bird habitats.",
      heroImage: "assets/day/bharatpur/hero.jpg"
    },
    {
      id: "ranthambore",
      title: "Ranthambore Fort & Forest",
      shortSummary: "Ancient fort architecture meets wildlife-rich forests.",
      heroImage: "assets/day/ranthambore/hero.jpg"
    },
    {
      id: "harsh-parvat",
      title: "Harsh Parvat",
      shortSummary: "Hilltop temples, archaeological landscapes, sacred routes, and wind-swept ridges.",
      heroImage: "assets/day/harsh/hero.jpg"
    }
  ];

  goToDetail(id: any) {
    this.router.navigate(['/day-excursions', id]);
  }

}
