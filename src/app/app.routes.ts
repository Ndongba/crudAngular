import { Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { IndexArticleComponent } from './index-article/index-article.component';

export const routes: Routes = [
    {path:'post', redirectTo: "post/index", pathMatch:'full'},
    {path:'app/add-article/add-article', component:AddArticleComponent},
    {path:'app/index-article/index-article', component:IndexArticleComponent},
    {path:'app/show-article/show-article', component:ShowArticleComponent}
];
