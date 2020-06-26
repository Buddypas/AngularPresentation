import { Post } from './model/post';
import { Output, EventEmitter } from '@angular/core';


export class PostsService {

  private posts : Post[] = [];
  @Output() postsChanged = new EventEmitter<Post[]>();

  getPosts() : Post[] {
    return this.posts.slice();
  }

  addPost(post : Post) {
    this.posts.push(post);
    this.postsChanged.emit(this.getPosts());
  }

  updatePoints(index : number,post : Post) {
    this.posts[index] = post;
    this.postsChanged.emit(this.getPosts());
  }
}
