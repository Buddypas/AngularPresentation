import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  arrowUpIcon = faArrowUp;
  arrowDownIcon = faArrowDown;
  @Input() post : Post;
  @Input() index : number;
  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
  }

  updatePoints(value : number) {
    this.post.points+=value;
    this.postsService.updatePoints(this.index,this.post);
  }

}
