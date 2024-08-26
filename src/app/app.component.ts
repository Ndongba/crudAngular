import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudAngular';
}
