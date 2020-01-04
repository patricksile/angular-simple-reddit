import { Component, OnInit, Input, HostBinding } from "@angular/core";

import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;

  constructor() {}
  voteUp(): boolean {
    this.article.voteUp();
    // NOTE return false here to tell the browser not to propagate the
    // event upwards
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    // NOTE return false here to tell the browser not to propagate the
    // event upwards
    return false;
  }

  ngOnInit() {}
}
