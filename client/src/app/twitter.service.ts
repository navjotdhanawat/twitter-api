import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private httpClient: HttpClient) {

  }

  getTweets(id, geocode) {
    return this.httpClient.get("http://localhost:8080/twitter/search-tweets/"+ id+ "/"+ geocode)
  }

  tweet(status) {
    return this.httpClient.post("http://localhost:8080/twitter/tweet", status)
  }
}
