import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogsData from '../../../../../assets/resources/blogs.json';
import { UtilsService } from '../../../../utils/utils.service';

@Component({
  selector: 'app-blogs-details',
  imports: [],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.scss'
})
export class BlogsDetailsComponent {
  blog: any;

  constructor(private utilService: UtilsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.utilService.scrollToTop();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = blogsData.find(b => b.id === id);
  }
}
