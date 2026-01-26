import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  inject,
  AfterViewInit
} from '@angular/core';

import { cards } from '../../../assets/resources/trailsOfMonth.json';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { TrialofMonthDependency } from './trails-of-month.dependency';

@Component({
  selector: 'app-trails-of-month',
  imports: [TrialofMonthDependency],
  templateUrl: './trails-of-month.component.html',
  styleUrl: './trails-of-month.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrailsOfMonthComponent implements OnInit, AfterViewInit {

  cards: any = cards;
  @ViewChild('trailSwiper', { static: false }) swiperRef!: ElementRef;

  slidesPerView = 3;

  private localStorage: LocalStorageService = inject(LocalStorageService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.updateSlidesPerView();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl: any = this.swiperRef.nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: this.slidesPerView,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        centeredSlides: false,
      });

      swiperEl.initialize();

      // Hover pause/resume
      swiperEl.addEventListener('mouseenter', () => swiperEl.swiper.autoplay.stop());
      swiperEl.addEventListener('mouseleave', () => swiperEl.swiper.autoplay.start());
    }, 50);
  }

  /** 🔥 Handle Breakpoints */
  @HostListener('window:resize')
  onResize() {
    this.updateSlidesPerView();
    this.updateSwiper();
  }

  updateSlidesPerView() {
    const width = window.innerWidth;

    if (width < 768) {
      this.slidesPerView = 1;       // mobile
    } else if (width < 1024) {
      this.slidesPerView = 2;       // tablet
    } else {
      this.slidesPerView = 3;       // desktop
    }
  }

  updateSwiper() {
    const swiperEl: any = this.swiperRef?.nativeElement;

    if (swiperEl?.swiper) {
      swiperEl.swiper.params.slidesPerView = this.slidesPerView;
      swiperEl.swiper.update();
    }
  }

  /* Story View */
  activeCard: any = null;

  gotoTrail(card: any) {
    this.activeCard = card;
  }

  closeStory() {
    this.activeCard = null;
  }

  /* Hover Methods */
  pauseSwiper(): void {
    const swiper = this.swiperRef?.nativeElement?.swiper;
    swiper?.autoplay?.pause();
  }

  resumeSwiper(): void {
    const swiper = this.swiperRef?.nativeElement?.swiper;
    swiper?.autoplay?.resume();
  }
}
