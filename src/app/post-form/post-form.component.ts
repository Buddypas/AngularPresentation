import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title = "";
  link = "";


  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.postsService.addPost(new Post(this.title,this.link));
    this.title = "";
    this.link = "";
    console.log(this.postsService.getPosts());
  }

}
