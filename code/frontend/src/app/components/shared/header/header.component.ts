import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { EXTERNAL_LINKS } from '../../../services/external-links.service';
import { UtilsService } from '../../../utils/utils.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedDependencies } from '../shared.dependency';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedDependencies],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  externalLinks = EXTERNAL_LINKS;
  currentUrl: string = "";
  homeRoute: boolean = true;

  hoverTimeout: any = null;

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private utilsService: UtilsService,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  /*------------------------------------
    FIXED SCROLL LISTENER
  ------------------------------------*/
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const headerHeight = this.elementRef.nativeElement.offsetHeight;

    this.isScrolled = scrollPosition > headerHeight;
  }

  ngOnInit() {
    this.currentUrl = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.homeRoute = this.currentUrl === '/home';
      }
    });
  }

  openLink(linkType: string) {
    this.utilsService.trackButtonClick();
    this.utilsService.openLink(linkType);
  }

  mobileDropdown: string | null = null;

  isDesktop() {
    return window.innerWidth >= 992;
  }

  toggleMobileDropdown(name: string) {
    if (this.isDesktop()) return;
    this.mobileDropdown = this.mobileDropdown === name ? null : name;
  }

  onDropdownEnter(drop: HTMLElement) {
    if (!this.isDesktop()) return;
    clearTimeout(this.hoverTimeout);
    drop.classList.add('hovered');
  }

  onDropdownLeave(drop: HTMLElement) {
    if (!this.isDesktop()) return;
    this.hoverTimeout = setTimeout(() => {
      drop.classList.remove('hovered');
    }, 120);
  }

  closeMobileMenu() {
    if (this.isDesktop()) return;

    const nav = document.getElementById('navbarNav');
    nav?.classList.remove('show');
    this.mobileDropdown = null; // close accordion dropdown too
  }

}
