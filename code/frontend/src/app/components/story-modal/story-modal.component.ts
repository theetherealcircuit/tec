import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoryModalDependency } from './story-modal.dependency';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';

@Component({
  selector: 'app-story-modal',
  imports: [StoryModalDependency],
  templateUrl: './story-modal.component.html',
  styleUrl: './story-modal.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoryModalComponent implements OnInit {

  @Input('stories') stories: any;
  @Output() close = new EventEmitter<void>();

  currentIndex = 0;
  progressPercents: number[] = [];
  interval: any;

  ngOnInit() {
    this.progressPercents = new Array(this.stories.length).fill(0);
    this.startProgress();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startProgress() {
    this.progressPercents[this.currentIndex] = 0;
    const duration = 8000;
    const increment = 100 / (duration / 100);

    this.interval = setInterval(() => {
      if (this.progressPercents[this.currentIndex] >= 100) {
        clearInterval(this.interval);
        this.nextStory();
      } else {
        this.progressPercents[this.currentIndex] += increment;
      }
    }, 100);
  }

  nextStory() {
    clearInterval(this.interval);
    this.currentIndex = (this.currentIndex + 1) % this.stories.length;
    this.startProgress();
  }

  prevStory() {
    clearInterval(this.interval);
    this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
    this.startProgress();
  }

  closeStory() {
    clearInterval(this.interval);
    document.body.classList.remove('story-open');
    const modal = document.getElementById('storyModal');
    if (modal) modal.style.display = 'none';
    this.close.emit();
  }


}
