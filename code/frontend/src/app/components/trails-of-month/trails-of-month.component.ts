import { Component, OnInit, inject } from '@angular/core';
import { cards } from '../../../assets/resources/trailsOfMonth.json';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trails-of-month',
  imports: [],
  templateUrl: './trails-of-month.component.html',
  styleUrl: './trails-of-month.component.scss'
})
export class TrailsOfMonthComponent implements OnInit {

  cards: any = cards;
  private localStorage: LocalStorageService = inject(LocalStorageService);
  private router: Router = inject(Router);
  ngOnInit(): void {

  }

  gotoTrail(trail: any) {
    this.localStorage.set('trail', trail);
    this.router.navigate(['/trail-details']);
  }
}
