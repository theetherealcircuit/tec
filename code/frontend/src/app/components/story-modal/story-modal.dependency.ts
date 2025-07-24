import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SharedDependencies } from "../shared/shared.dependency";
export const StoryModalDependency = [
    ...SharedDependencies,
    CommonModule,
    RouterModule
]