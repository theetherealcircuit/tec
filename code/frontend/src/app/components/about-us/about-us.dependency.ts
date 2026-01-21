import { RouterModule } from "@angular/router";
import { FeatherModule } from "angular-feather";
import { IconsModule } from "../shared/icons/icons.dependency";
import { MediaUrlPipe } from "../../pipes/mediaUrl.pipe";

export const AboutUsModule = [
    RouterModule,
    FeatherModule,
    IconsModule,
    MediaUrlPipe
];