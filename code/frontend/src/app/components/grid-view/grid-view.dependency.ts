import { CommonModule, TitleCasePipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { StoryModalComponent } from "../story-modal/story-modal.component";
import { SharedDependencies } from "../shared/shared.dependency";
export const GridViewDependency = [
    ...SharedDependencies,
    CommonModule,
    RouterModule,
    TitleCasePipe
]