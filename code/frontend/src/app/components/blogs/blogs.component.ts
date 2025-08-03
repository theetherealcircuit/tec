import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import blogsData from '../../../assets/resources/blogs.json';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  blogTitles: any[] = [];
  hasChildren: boolean = false;
  routerService: RouterService = inject(RouterService);
  constructor(
    private utilService: UtilsService,
    private router: Router
  ) {

  }
  blogs: any[] = [];

  ngOnInit(): void {
    this.utilService.scrollToTop();
    this.blogs = blogsData;
  }


}
