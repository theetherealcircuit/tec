import { Component, AfterViewInit, NgZone } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mewar-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements AfterViewInit {

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {

    // Run OUTSIDE Angular to prevent change detection blSocking GSAP
    this.ngZone.runOutsideAngular(() => {

      // Wait for Angular to fully finish DOM rendering
      requestAnimationFrame(() => {

        // Safety delay for images/layout calculations
        setTimeout(() => {

          ScrollTrigger.refresh();  // IMPORTANT for component-based Angular

          /* ================= HERO PARALLAX ================= */
          gsap.to('.hero-bg', {
            y: -150,
            scrollTrigger: {
              trigger: '.hero',
              scrub: true,
            }
          });

          /* ================= FADE SECTIONS ================= */
          gsap.utils.toArray('.fade-section').forEach((section: any) => {
            gsap.from(section, {
              opacity: 0,
              y: 50,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 90%",   // NOW WORKS
                markers: true
              }
            });
          });

          /* ================= ZIGZAG ================= */
          gsap.utils.toArray('.zigzag-inner').forEach((z: any) => {

            const img = z.querySelector('.zigzag-img');
            const text = z.querySelector('.zigzag-text');

            gsap.from(img, {
              opacity: 0,
              x: z.classList.contains('reverse') ? 80 : -80,
              duration: 1,
              scrollTrigger: {
                trigger: z,
                start: "top 90%",
                markers: true
              }
            });

            gsap.from(text, {
              opacity: 0,
              x: z.classList.contains('reverse') ? -80 : 80,
              duration: 1,
              delay: 0.1,
              scrollTrigger: {
                trigger: z,
                start: "top 90%",
                markers: true
              }
            });
          });

          /* ================= EXPERIENCE CARDS ================= */
          gsap.utils.toArray('.exp-card').forEach((card: any, i: number) => {
            gsap.from(card, {
              opacity: 0,
              scale: 0.8,
              duration: 0.8,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                markers: true
              }
            });
          });

        }, 150); // <-- delay ensures Angular DOM & images fully ready

      });

    });

  }
}
