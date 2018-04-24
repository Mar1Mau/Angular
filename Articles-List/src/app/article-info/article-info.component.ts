import { Component, OnInit} from '@angular/core';
import { Article } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/articleService.services';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.css']
})
export class ArticleInfoComponent implements OnInit {
  
    constructor(public myService:ArticleService ) {}
  
    ngOnInit() {
      

    }

}
