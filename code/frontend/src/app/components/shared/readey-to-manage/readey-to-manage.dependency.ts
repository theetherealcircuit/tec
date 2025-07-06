import { FeatherModule } from "angular-feather";
import { IconsModule } from "../../shared/icons/icons.dependency";
import { Router, RouterModule } from "@angular/router";
import { PoweredComponent } from "../../shared/powered/powered.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
export const ReadyToManageModule=[
    FeatherModule,
    IconsModule,
    RouterModule,
    PoweredComponent,
    ReactiveFormsModule,
    FormsModule,
];