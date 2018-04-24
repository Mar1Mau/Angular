import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article.model';
import { ArticleService } from '../shared/services/articleService.services';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

public articles: Article[];


  constructor(private myService:ArticleService ) {}

  ngOnInit() {
    this.articles=this.myService.articleFullList;
   
    
  }

  public showDetails(name:Article){
    
    this.myService.showInfo(name);
  }

  

  

}
