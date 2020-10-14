import { Injectable } from '@angular/core';
import { Results } from './interfaces/results';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AwwService {

  constructor(private http:HttpClient) { }

  getResults() {
    return this.http.get<Results>('https://www.reddit.com/r/aww/.json')
  }
}