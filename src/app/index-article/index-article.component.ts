import { Component } from '@angular/core';


@Component({
  selector: 'app-index-article',
  standalone: true,
  imports: [],
  templateUrl: './index-article.component.html',
  styleUrl: './index-article.component.css'
})
export class IndexArticleComponent {
  articles: article[]=[];

  constructor(public articleservice:ArticleService){

  }

  ngOninit():void{
    this.articleService.getAll().subscribe((data:article[]) =>{
      this.articles = data;
      console.log(this.articles);
    })
  }

  deleteArticle(id:number){
    this.articleService.delete(id).subscribe(res =>{
      this.articles = this.articles.filter(item =>item.id !--id);
      alert("article Supprimé avec succés !")
    })
  }
 
}
