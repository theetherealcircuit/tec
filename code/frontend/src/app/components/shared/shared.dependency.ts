import { CommonModule } from "@angular/common";
import { FeatherModule } from "angular-feather";
import { IconsModule } from "./icons/icons.dependency";
import { RouterModule } from "@angular/router";


export const SharedDependencies = [
    CommonModule,
    FeatherModule,
    RouterModule,
    IconsModule
];