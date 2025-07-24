import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import careerOpenPositions from '../../../../assets/resources/careerOpenPositions.json';
import { UtilsService } from '../../../utils/utils.service';

@Component({
  selector: 'app-open-positions',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './open-positions.component.html',
  styleUrl: './open-positions.component.scss'
})
export class OpenPositionsComponent implements OnInit {
  @Input('id') id: string | null = '';
  openPostion: { title: string; experience: string; location: string; company: string; id: string; type: string; jobDescription: { aboutCompany: string; roleOverview: string; keyResponsibilities: string; qualifications: string; benefits: string; description: string; }; } | undefined;
  submitted: boolean = false;

  private utilsService: UtilsService = inject(UtilsService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.initializeJobDescription();
    console.log(this.id);
    console.log(careerOpenPositions.openPositions);
  }
  initializeJobDescription() {
    this.openPostion = careerOpenPositions.openPositions.filter(x => x.id == this.id)[0];
  }

  submitApplication() {
    this.submitted = true;
    this.utilsService.scrollToTop();
  }

  scrollToId(elementId: string) {
    this.utilsService.scrollToId(elementId);
  }
}
