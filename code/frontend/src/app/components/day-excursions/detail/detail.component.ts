import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const dayExcursions = [
  {
    id: "viratnagar",
    title: "Viratnagar",
    distance: "Delhi ~260 km | Gurgaon ~235 km | Jaipur ~85 km",
    heroImage: "assets/day/viratnagar/hero.jpg",
    content: `Viratnagar is one of the most historically layered landscapes near Jaipur, yet remains largely overlooked. A site which holds prehistoric rock art so close to Jaipur, India’s earliest free-standing Buddhist structures, and Ashokan inscriptions carved in Brahmi script. Myth and material culture intersect here—Mahabharata memories coexist with archaeology, not as legend alone but embedded in geography.
Today, neglect, lack of interpretation, and casual tourism threaten these fragile remains. 

TEC approaches Viratnagar as an outdoor classroom led by archaeologists and epigraphists who help participants read inscriptions, architecture, and terrain together. Hike across rugged Aravalli hills reveal how geography shaped early settlements, belief systems, and survival strategies. 

Our efforts here focuses on cleanliness drives at archaeological zones, responsible site use, and awareness building with local communities—ensuring Viratnagar is understood not as ruins to be visited, but as living evidence of India’s earliest cultural and political history.`,
    highlights: [
      "Prehistoric rock art",
      "Ashokan Brahmi inscriptions",
      "Early Buddhist structures",
      "Aravalli hill archaeology"
    ]
  },

  {
    id: "sambhar",
    title: "Sambhar",
    distance: "Delhi ~380 km | Gurgaon ~355 km | Jaipur ~95 km",
    heroImage: "assets/day/sambhar/hero.jpg",
    content: `Sambhar is India’s largest inland saltwater lake and a critical wetland for migratory birds, especially flamingos. 
While its pink horizons attract attention, the lake faces serious stress from unregulated tourism, drone activity, water imbalance, and habitat disturbance. 

TEC engages Sambhar quietly, guided by naturalists and wildlife photographers who focus on ethical birding and wetland reading rather than spectacle. Participants learn how water levels, salt concentration, algae, and bird behaviour are interconnected, while interactions with local communities reveal the long relationship between salt, livelihood, and ecology. 
Observation here is based on restraint—no drones, minimal disturbance, wetland-edge cleanliness drives, and awareness sessions on responsible wildlife engagement. Sambhar becomes a lesson in balance, reminding us that fragile ecosystems survive only when observation replaces intrusion.`,
    highlights: [
      "Largest saltwater lake",
      "Migratory flamingos",
      "Wetland ecology",
      "Ethical birding"
    ]
  },

  {
    id: "sariska",
    title: "Sariska",
    distance: "Delhi ~200 km | Gurgaon ~180 km | Jaipur ~110 km",
    heroImage: "assets/day/sariska/hero.jpg",
    content: `Sariska is often seen only as a tiger reserve, but it is also a landscape shaped by temples, forts, seasonal streams, and centuries of human presence. 
Increasing tourism pressure and noise threaten both wildlife corridors and heritage ruins hidden within the forest. 

TEC approaches Sariska through guided walks led by naturalists and archaeologists who interpret ecology alongside history. Visits to sites like the Neelkanth temple complex and lesser-known forest trails reveal how architecture, faith, and wilderness once coexisted. 

Rather than chasing sightings, we learn about animal movement, forest regeneration, and human impact. By moving thoughtfully along forest paths and supporting local craft-based livelihoods, Sariska can best be experienced as a living cultural-ecological system rather than a wildlife attraction alone.`,
    highlights: [
      "Tiger reserve",
      "Neelkanth temples",
      "Forest archaeology",
      "Human-nature coexistence"
    ]
  },

  {
    id: "bharatpur",
    title: "Bharatpur",
    distance: "Delhi ~185 km | Gurgaon ~165 km | Jaipur ~190 km",
    heroImage: "assets/day/bharatpur/hero.jpg",
    content: `Bharatpur’s Keoladeo wetlands are globally known for birds, yet few visitors understand the careful water management that sustains this ecosystem. 
Today, crowding and hurried birding risk disturbing its delicate balance. 

TEC slows the experience, guided by naturalists who teach participants to read water depth, vegetation, and bird behaviour as indicators of ecological health. Cycling and walking replace noisy movement, while visits to Lohagarh Fort and the government museum reveal how water, defense, and community life shaped the region. 

We engage in birding etiquette awareness, and responsible observation practices. Bharatpur becomes not just a bird sanctuary, but a living lesson in how thoughtful human intervention can support biodiversity.`,
    highlights: [
      "Keoladeo Wetlands",
      "Slow birding",
      "Lohagarh Fort",
      "Wetland ecology"
    ]
  },

  {
    id: "ranthambore",
    title: "Ranthambore",
    distance: "Delhi ~390 km | Gurgaon ~360 km | Jaipur ~180 km",
    heroImage: "assets/day/ranthambore/hero.jpg",
    content: `Ranthambore Fort rises dramatically within dense forest, telling a story far older than wildlife tourism. While the surrounding park draws attention, the fort’s temples, stepwells, and pathways face neglect from heavy footfall and limited interpretation. 

TEC explores the fort with historians and archaeologists who decode its architecture, water systems, and strategic design in relation to the forest landscape. Participants learn how earlier settlements adapted to cliffs, monsoon flows, and wildlife rather than dominating them. 

Engagement with local SHGs introduces traditional black pottery, linking heritage with present livelihoods.
The experience encourages mindful movement through shared spaces—allowing Ranthambore to be understood as a shared space of nature, history, and community.`,
    highlights: [
      "Ranthambore Fort",
      "Stepwells",
      "Forest-linked architecture",
      "Local black pottery"
    ]
  },

  {
    id: "harsh-parvat",
    title: "Harsh Parvat",
    distance: "Delhi ~210 km | Gurgaon ~190 km | Jaipur ~120 km",
    heroImage: "assets/day/harsh/hero.jpg",
    content: `Harsh Parvat is an early centre of Pashupat Shaivism, set amidst hills, gorges, and wind-swept ridges. 
Often reduced to a temple visit, the site today suffers from neglect and loss of landscape context. 

TEC approaches Harsh as a cultural terrain, guided by archaeologists and explorers who explain how geography shaped belief, architecture, and pilgrimage routes. Walks through the surrounding hills reveal links between Harsh and nearby Jeen Mata, tracing the transformation from classical Shaivism to regional goddess traditions. 

Moving respectfully through sacred and natural spaces allows Harsh Parvat to be understood as a living intersection between land, faith and memory.`,
    highlights: [
      "Pashupat Shaivism",
      "Pilgrimage routes",
      "Hill landscapes",
      "Jeen Mata connections"
    ]
  }
];
@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})

export class DetailComponent implements OnInit {

  excursion: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.excursion = dayExcursions.find(x => x.id === id);
  }


}
