import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY ='TOKEN'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  url='http://challenge-react.alkemy.org';
  constructor(private http:HttpClient) { }

  login(url:string,user:object){
    return this.http.post(url,user);
  }
  public setToken(token:string):void{
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY)!;
  }
  
  public logOut():void{
    sessionStorage.clear();
  }
}
