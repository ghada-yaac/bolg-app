import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../module/article';

@Component({
  selector: 'app-article-add',
  standalone: true,
  imports: [],
  templateUrl: './article-add.component.html',
  styleUrl: './article-add.component.css'
})
export class ArticleAddComponent {
  @Output() articlecreated=new EventEmitter<Article>();
  
  
  addArticle(title : string, description : string, imageUrl : string,date:string){
    const newArticle = new Article(title, imageUrl,date,description,0);
    this.articlecreated.emit(newArticle);
  }
}
