import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
const SLIDES = [
  {
    title: "Mewar Heritage Festival",
    subtitle: "2026 · Menar",
    desc: "India’s First Regenerative Festival set amidst the cultural heritage of Rajasthan.",
    bg: "assets/images/banner/banner_1.jpg",
    card: {
      title: "MFH",
      img: "assets/images/banner/menar_event.jpg",
      rating: 4.8
    }
  },

  {
    title: "Heritage Walk",
    subtitle: "Udaipur · Rajasthan",
    desc: "A sacred spiritual site atop the hill, surrounded by stunning landscapes.",
    bg: "assets/images/banner/banner_2.JPG",
    card: {
      title: "Heritage Walk",
      img: "assets/images/banner/jaipur-forts.jpg",
      rating: 4.9
    }
  },

  {
    title: "Workshops",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "assets/images/banner/banner_3.jpg",
    card: {
      title: "Workshops",
      img: "assets/images/banner/gallery_11.jpg",
      rating: 4.7
    }
  },
  {
    title: "Travel circuit",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "assets/images/banner/banner_4.jpg",
    card: {
      title: "Travel circuit",
      img: "assets/images/banner/gallery_17.jpg",
      rating: 4.7
    }
  },
  {
    title: "Experiences",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "assets/images/banner/banner_5.jpg",
    card: {
      title: "Experiences",
      img: "assets/images/banner/gallery_32.jpg",
      rating: 4.7
    }
  }
];

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('cardSwiper') cardSwiperRef!: ElementRef;

  slides = SLIDES;
  activeSlide = SLIDES[0];
  activeIndex = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = this.cardSwiperRef.nativeElement;

      // Register Swiper Web Component manually
      Object.assign(swiperEl, {
        slidesPerView: 1.5,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        speed: 200,
      });

      swiperEl.initialize();
    }, 50);
  }

  onSlideChange() {
    const swiper = this.cardSwiperRef.nativeElement.swiper;
    if (!swiper) return;

    const index = swiper.realIndex ?? 0;

    this.activeIndex = index;
    this.activeSlide = this.slides[index];
  }
}