import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MediaUrlPipe } from '../../pipes/mediaUrl.pipe';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-heritage-walk',
  standalone: true,
  imports: [CommonModule, MediaUrlPipe],
  templateUrl: './heritage-walk.component.html',
  styleUrl: './heritage-walk.component.scss'
})
export class HeritageWalkComponent implements OnInit {

  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }

  walks = [
    {
      id: "jaipur",
      title: "Pink City Immersion – Jaipur",
      image: "jaipur_heritage_walk.jpg",
      comingSoon: false,
      content: `Jaipur is more than a Pink City. It is a mosaic of terracotta alleys—a planned 
city where palaces, science, crafts, communities, and wild edges coexist.

This experience opens Jaipur one layer at a time: streets that are worth exploring, temples 
that insist on slow reading, flavours that deserve a trail, and crafts that call for playful, 
hands-on learning.

Each element is complete enough to stand as its own immersive experience, yet together they form 
a Jaipur that cannot be understood in fragments.

Frescoed havelis, landscaped gardens, and the folds of the Aravalli valleys reveal the city’s 
quieter spiritual and artistic bylanes.

Along the way, forgotten baoris resurface with stories of shared water culture—where architecture 
meets ecology. Our clean-up efforts draw travellers into cycles of heritage care, community 
connection, and regenerative responsibility.`,
      details: {
        duration: "Half Day",
        difficulty: "Easy–Moderate",
        bestTime: "Morning / Evening"
      }
    },
    {
      id: "varanasi",
      title: "Varanasi Heritage Walk",
      image: "varanasi_walk.jpg",
      comingSoon: true,
      content: `Varanasi doesn’t allow a single route; it invites
many. A verse leads to a home, a footprint leads to
Sarnath, a flavour calls for its own trail, and a quiet
lane becomes a complete study. Each strand here
could be a dedicated walk or session, but woven
together, they reveal a Varanasi that textbooks and
tourism never reach.`,
      details: {
        duration: "3 hrs",
        difficulty: "Easy",
        bestTime: "Sunrise"
      }
    }
  ];




  ngOnInit(): void {
    setTimeout(() => {
      gsap.utils.toArray('.walk-block').forEach((el: any, i: number) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        });
      });
    }, 100);
  }
}