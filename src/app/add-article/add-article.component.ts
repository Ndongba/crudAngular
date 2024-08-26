import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {

  form!:FormGroup;

  constructor(public articleservice:ArticleService, private router:Router){


  }

  
ngOninit():void{
  this.form = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('',[Validators.required])
  })

}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
 // this.articleservice.add(this.form.value).subscribe((res:any) =>{
    alert('Article crée avec succés .');
    this.router.navigateByUrl('article/index-article');
 // })
}

}


