import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaUrlPipe } from '../../pipes/mediaUrl.pipe';
const workshops = [
  {
    id: "archaeology",
    title: "Archaeology",
    icon: "archaeology.svg",
    color: "#B7D3A8",
    short: "Step into the shoes of an archaeologist and read the Earth like a textbook. Learn stratigraphy, practise test-trench excavation, handle real artefacts, and decode how layers reveal ancient lives. A hands-on journey where students uncover the past with the tools and methods of field archaeologists.",
    banner: "workshop/archeology.jpeg",
    description: `Explore archaeological interpretation through... (full content later)`
  },
  {
    id: "birding",
    title: "Birding",
    icon: "birding.svg",
    color: "#D18C56",
    short: "Walk with naturalists through forests and wetlands, identifying plants, birds, tracks, and ecosystems. Learn hiking basics—navigation, safety, teamwork—while reconnecting with the rhythms of the wild. A trail that builds confidence, awareness, and wonder",
    banner: "workshop/birding.jpeg",
    description: `Understand bird migration patterns...`
  },
  {
    id: "gi-tag",
    title: "GI Tag",
    icon: "gi.svg",
    color: "#B3C77C",
    short: "A Geographical Indication (GI) tag honors crafts rooted in a place—its soil, its people, its memory. Our GI-tag workshops connect students with these living traditions across India, guided by master artisans who carry centuries of knowledge in their hands.",
    banner: "workshop/gi.jpg",
    description: `Discover the history and cultural identity of GI-tagged products...`
  },
  {
    id: "lost-art",
    title: "Lost Art",
    icon: "art.svg",
    color: "#9C8365",
    short: "Shape history with your hands—craft your own Harappan seals, imprint ancient motifs, and carve your name-tags in ancient Brahmi. A playful yet profound introduction to India’s earliest scripts, crafts, and urban imagination. ",
    banner: "workshop/lost-craft.jpeg",
    description: `Engage with real artisans and rediscover forgotten artistic traditions...`
  },
  {
    id: "photography",
    title: "Photography",
    icon: "camera.svg",
    color: "#E1D79B",
    short: "Learn to see like a storyteller. Students explore composition, light, framing, and ethical photography across heritage spaces, streets, people, and nature. A compact module that sharpens observation and creativit",
    banner: "workshop/photography.jpeg",
    description: `Master composition, framing and field-shoot techniques...`
  },
  {
    id: "science-tech",
    title: "Science & Tech – AI / Astro",
    icon: "tech.svg",
    color: "#3E4C3A",
    short: "Students step into a maker-space where today’s AI becomes touchable. They train tiny models, test sensors, build simple bots, and see how machines recognise patterns, voices, movement, and choices. Each activity stands strong as its own module—yet together, it reveals how modern AI actually works, where it helps the world, and why thoughtful creators matter more than fast gadgets",
    banner: "workshop/astro.jpg",
    description: `Dive into astronomy and AI through field-based learning...`
  }
];

@Component({
  selector: 'app-workshops',
  imports: [CommonModule, MediaUrlPipe],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.scss'
})
export class WorkshopsComponent {
  workshops: any = workshops;
}
