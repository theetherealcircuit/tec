import { CommonModule } from "@angular/common";
import { OpenPositionsComponent } from "./open-positions/open-positions.component";
import { RouterModule } from "@angular/router";

export const CareersDependencies=[
    OpenPositionsComponent, 
    CommonModule, 
    RouterModule
];