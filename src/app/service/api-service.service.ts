import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url1='https://api.spoonacular.com/recipes/'
  url2='/information?apiKey=86a2419f613e432bb97a416e9e00e9bf&includeNutrition=false';
  constructor(private http:HttpClient) { }

  public traerReceta(index:number){
    return this.http.get<any>(this.url1+index+this.url2);
  }
}
