import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { communityStories } from "../../../../assets/resources/testimonials.json";
import { TestimonailsDependencies } from './testimonials.dependency';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonailsDependencies],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent {
  testimonialsData: any = communityStories;
  @ViewChild('trailSwiper', { static: true }) swiperRef!: ElementRef;

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
