import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private httpClient: HttpClient) {

  }

  getTweets(id) {
    return this.httpClient.get("http://localhost:8080/twitter/search-tweets/"+ id)
  }
}
