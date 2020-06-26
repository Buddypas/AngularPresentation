import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : Post[];
  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsService.postsChanged.subscribe((posts) => {
      this.posts = posts;
    })
  }

}
