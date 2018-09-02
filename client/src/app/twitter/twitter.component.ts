import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  videoUrl: string;
  comment: string;
  name: string;
  video: any = { id: 'wzrnuUOoFNM' };
  baseUrl: string = 'https://www.youtube.com/embed/';
  url: any = '';
  alert: any = '';

  player: YT.Player;
  private id: string = 'https://t.co/1Fm71wYuLU';

  lastId:any = null;

  tweets: any = [];
  constructor(private twitterService: TwitterService, public sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

  ngOnInit() {
    this.twitterService.getTweets(this.lastId).subscribe(
      (data: any) => {
        console.log("PUT Request is successful ", data);
        this.tweets = data.tweets.statuses;
        this.lastId = this.tweets[this.tweets.length-1] ? this.tweets[this.tweets.length-1].id : null;
        this.alert = this.tweets[this.tweets.length-1] ? "": "No Tweets for given #tag"
        console.log(this.tweets)
      },
      error => {
        console.log("Rrror", error);
      })
  }

  tweet() {
    
    var status = this.comment + " #nowplaying " + this.videoUrl;
    debugger
    this.twitterService.tweet({status}).subscribe(
      (data: any) => {
        debugger
        console.log("PUT Request is successful ", data);
      },
      error => {
        debugger
        console.log("Rrror", error);
      })
  }

  onScroll() {
    this.twitterService.getTweets(this.lastId).subscribe(
      (data: any) => {
        console.log("PUT Request is successful ", data);
        
        this.tweets = [...this.tweets, ...data.tweets.statuses];
        this.lastId = this.tweets[this.tweets.length-1].id;
        console.log(this.tweets)
      },
      error => { 
        console.log("Rrror", error);
      })
  }

  getLink(text) {
    return text.match(/\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g);
  }

}
