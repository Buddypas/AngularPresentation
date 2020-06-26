import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post : Post;

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.post = new Post();
  }

  onAddPost() {
    this.postsService.addPost(this.post);
    console.log(this.postsService.getPosts());
  }

}
