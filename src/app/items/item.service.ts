import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  api = "http://localhost:3000/items";

  constructor(private http:HttpClient) { }
  list (){
    return this.http.get(this.api)
  }
}
