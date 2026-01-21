import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaUrlPipe } from '../../pipes/mediaUrl.pipe';
const stepwells = [
  {
    id: "chand-baori",
    title: "Chand Baori Abhaneri",
    location: "Dausa District, Rajasthan",
    image: "chand-baori.jpg",
    description: `Chand Baori is a 1200 years old stepwell famous for its striking steps, widely photographed, yet its real story lies in how it works. Built to respond to heat and water scarcity, its precise geometry controlled access to water while creating cooler spaces throughout the year. TEC explores Chand Baori with architects and historians who help participants understand its purpose beyond appearance. As participants walk down gradually, they observe how orientation, depth, and symmetry shape airflow, temperature, and movement. Connections to nearby ritual spaces add meaning, showing how water, belief, and everyday life were closely linked.  By slowing the experience and reading the structure from within, Chand Baori allows its intelligence to unfold naturally, showing how design emerged from close observation of climate and collective needs.`,
    highlights: [
      "3,500 steps in perfect symmetry",
      "One of India's deepest stepwells",
      "11th-century architectural marvel",
      "Harshat Mata Temple nearby"
    ]
  },

  {
    id: "hadi-rani-stepwell",
    title: "Hadi Rani ki Baori",
    location: "Todabhim, Karauli District",
    image: "hadi-rani.jpg",
    description: `Hadi Rani ki Baori is often seen as an ornate monument, yet it was once a shared public space where water, ritual, and everyday life came together. Over time, quick visits and photo stops have hidden the thought behind its design. TEC explores the baori through slow, interpretive walks led by architects and heritage practitioners who help participants read its sculptures, shaded corridors, and changing microclimates. Walking down level by level reveals how light, temperature, and sound shaped social use and seasonal access to water. Rather than viewing it from above, participants experience it as it was meant to be used—on foot, in rhythm, and with attention. The baori emerges as a carefully planned structure built for people, climate, and community.`,
    highlights: [
      "Folk legend of Hadi Rani",
      "Arched pavilions & carved pillars",
      "Quiet, untouched atmosphere",
      "Rural heritage context"
    ]
  },

  {
    id: "neemrana-stepwell",
    title: "Neemrana Stepwell",
    location: "Neemrana, Alwar District",
    image: "neemrana.jpg",
    description: `The Neemrana stepwell tells a quieter story of water embedded in daily life. Unlike monumental baoris, it evolved as part of a working settlement, shaped by regular use, repair, and adaptation over generations. Today, changing land use and hurried visits often disconnect it from this context. TEC explores the baori through guided walks that connect its form to groundwater behaviour, settlement patterns, and seasonal change. Participants are encouraged to notice wear, proportions, and pauses built into the descent—signs of how people once gathered, rested, and shared resources. Experiencing the structure at walking pace reveals an architecture shaped by necessity and care, where water management was a natural part of everyday living.`,
    highlights: [
      "Nine-story subterranean baori",
      "Arched multi-level corridors",
      "Historic stopover for traders",
      "Semi-arid region water system"
    ]
  }
];
@Component({
  selector: 'app-stepwells',
  imports: [CommonModule, MediaUrlPipe],
  templateUrl: './stepwells.component.html',
  styleUrl: './stepwells.component.scss'
})
export class StepwellsComponent {
  stepwells: any = stepwells;

}
