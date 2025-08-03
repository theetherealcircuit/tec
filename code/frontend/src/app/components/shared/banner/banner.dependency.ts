import { CommonModule } from "@angular/common";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedDependencies } from "../shared.dependency";

export const BannerDependency = [
    ...SharedDependencies,
    CommonModule,
    NgbCarouselModule
];