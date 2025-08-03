import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { StoryModalComponent } from "../story-modal/story-modal.component";
import { SharedDependencies } from "../shared/shared.dependency";
export const TrialofMonthDependency = [
    ...SharedDependencies,
    CommonModule,
    RouterModule,
    StoryModalComponent
]