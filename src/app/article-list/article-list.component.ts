import { Component } from '@angular/core';
import { Article } from '../module/article';
import { ArticleAddComponent } from "../article-add/article-add.component";
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleAddComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  articles = [ new Article('Blog sur Angular','https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg','02/11/2024','Maîtriser les Bases d\'Angular pour Développer des Applications Web InteractivesDescription : Angular est l\'un des frameworks JavaScript les plus populaires pour construire des applications web dynamiques',0),
               new Article('Blog sur React','https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg','02/11/2024','React est une bibliothèque JavaScript puissante et flexible utilisée pour créer des interfaces utilisateur efficaces et modulaires',0)]
  action ="";
  searchText: string = '';
  changeAction(action:string){
    this.action=action;
  };
  addArticle (article:Article){
    this.articles=[...this.articles, article];
    this.changeAction("");

  }
  incrementer(index:number){
    this.articles[index].score++;
    this.sortArticles();
  }
  decrementer(index:number){
    this.articles[index].score--;
    this.sortArticles();
  }
  FilteredArticles(searchText: string){
    this.searchText = searchText;
  }
  getFilteredArticles() {
    if (this.searchText) {
        return this.articles.filter(article =>
            article.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }
    this.sortArticles();
    return this.articles;
}
private sortArticles() {
  this.articles.sort((a, b) => b.score - a.score);
}
}
