import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./components/shared/banner/banner.component";

export const AppModule = [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    BannerComponent
];