import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../assets/resources/circuitExperiencesData.json';
import { GridViewDependency } from './grid-view.dependency';

@Component({
  selector: 'app-grid-view',
  imports: [GridViewDependency],
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.scss'
})
export class GridViewComponent implements OnInit {
  items: any[] = [];
  type: string = '';
  currentTitle = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const type = params['type'];   // circuits | experiences
      const slug = params['slug'];   // signature-circuits | heritage-walks etc.

      if (type && slug) {
        // Find the category (circuits or experiences)
        const category = (data as any)[type] || [];

        // Find the group (e.g., "signature-circuits")
        const group = category.find((c: any) => c.slug === slug);

        if (group) {
          this.items = group.items;
          this.currentTitle = group.type;
        }
      }
    });
  }

  viewDetails(type: string, slug: string) {
    this.router.navigate(['/details', type, slug]);
  }
}
