import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SharedDependencies } from '../shared/shared.dependency';
const SLIDES = [
  {
    title: "Mewar Heritage Festival",
    subtitle: "2026 · Menar",
    desc: "India’s First Regenerative Festival set amidst the cultural heritage of Rajasthan.",
    bg: "banner/banner_1.jpg",
    card: {
      title: "MHF",
      img: "banner/menar_event.jpg",
      rating: 4.8
    },
    mirror: false
  },

  {
    title: "Heritage Walk",
    subtitle: "Udaipur · Rajasthan",
    desc: "A sacred spiritual site atop the hill, surrounded by stunning landscapes.",
    bg: "banner/banner_5.jpg",
    card: {
      title: "Heritage Walk",
      img: "banner/jaipur-forts.jpg",
      rating: 4.9
    },
    mirror: true
  },

  {
    title: "Workshops",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "banner/banner_4.jpg",
    card: {
      title: "Workshops",
      img: "banner/gallery_11.jpg",
      rating: 4.7
    },
    mirror: true
  },
  {
    title: "Travel circuit",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "banner/banner_3.jpg",
    card: {
      title: "Travel circuit",
      img: "banner/gallery_17.jpg",
      rating: 4.7
    },
    mirror: true
  },
  {
    title: "Experiences",
    subtitle: "2026 · Jaipur",
    desc: "Discover ancient lanes, temples and living heritage around Jaipur.",
    bg: "banner/banner_2.JPG",
    card: {
      title: "Experiences",
      img: "banner/gallery_32.jpg",
      rating: 4.7
    },
    mirror: true
  }
];

@Component({
  selector: 'app-hero-section',
  imports: [SharedDependencies],
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

  slidesPerView = 1;

  ngOnInit() {
    this.updateSlidesPerView();   // set correct value before init
  }

  /** 🔥 On screen resize, update slidesPerView dynamically */
  @HostListener('window:resize')
  onResize() {
    this.updateSlidesPerView();
    this.applySwiperUpdate(); // live update swiper
  }

  /** 🔥 Detect device width */
  updateSlidesPerView() {
    const width = window.innerWidth;

    if (width < 768) {
      this.slidesPerView = 1;       // mobile
    } else {
      this.slidesPerView = 1.5;     // desktop/tablet
    }
  }

  /** 🔥 Initialize Swiper AFTER View init */
  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = this.cardSwiperRef.nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: this.slidesPerView,  // dynamic
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

  /** 🔥 Apply updates to Swiper when slidesPerView changes */
  applySwiperUpdate() {
    const swiperEl = this.cardSwiperRef?.nativeElement;

    if (swiperEl?.swiper) {
      swiperEl.swiper.params.slidesPerView = this.slidesPerView;
      swiperEl.swiper.update();
    }
  }

  /** 🔥 Track active card */
  onSlideChange() {
    const swiper = this.cardSwiperRef.nativeElement.swiper;
    if (!swiper) return;

    const index = swiper.realIndex ?? 0;

    this.activeIndex = index;
    this.activeSlide = this.slides[index];
  }

}