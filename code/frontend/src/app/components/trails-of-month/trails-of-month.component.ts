import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { cards } from '../../../assets/resources/trailsOfMonth.json';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { TrialofMonthDependency } from './trails-of-month.dependency';
@Component({
  selector: 'app-trails-of-month',
  imports: [TrialofMonthDependency],
  templateUrl: './trails-of-month.component.html',
  styleUrl: './trails-of-month.component.scss',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrailsOfMonthComponent implements OnInit {

  cards: any = cards;
  @ViewChild('trailSwiper', { static: true }) swiperRef!: ElementRef;
  private localStorage: LocalStorageService = inject(LocalStorageService);
  private router: Router = inject(Router);
  ngOnInit(): void {

  }


  activeCard: any = null;

  gotoTrail(card: any) {
    this.activeCard = card;
  }

  closeStory() {
    this.activeCard = null;
  }


  ngAfterViewInit() {
    const swiperEl: any = this.swiperRef.nativeElement;

    // Optional manual init if needed
    swiperEl.initialize();

    // Add hover event listeners
    swiperEl.addEventListener('mouseenter', () => {
      swiperEl.swiper.autoplay.stop();
    });

    swiperEl.addEventListener('mouseleave', () => {
      swiperEl.swiper.autoplay.start();
    });
  }

  pauseSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.pause();
  }

  resumeSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.resume();
  }

}
