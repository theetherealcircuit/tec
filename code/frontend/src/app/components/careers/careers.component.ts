import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { OpenPositionsComponent } from './open-positions/open-positions.component';
import openCareersJson from '../../../assets/resources/careerOpenPositions.json';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RouterService } from '../../services/router.service';
import { CareersDependencies } from './careers.dependency';
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: CareersDependencies,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {

  openPositions: { title: string; experience: string; location: string; company: string; id: string; type: string; }[] = [];
  currentTab = 'engineering';
  routerService: RouterService = inject(RouterService);
  hasChildren: boolean = false;
  constructor(
    private utilService: UtilsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.routerService.hasChildren.subscribe(hasChildren => {
      this.hasChildren = hasChildren
    });
    this.showOpenPositions(this.currentTab);
  }

  showOpenPositions(type: string) {
    this.currentTab = type;
    this.openPositions = openCareersJson.openPositions.filter(x => x.type == this.currentTab);
  }

  openJobDescription(openPositionId: string) {
    this.router.navigate(['/careers', 'open-positions', openPositionId]);
  }

}
