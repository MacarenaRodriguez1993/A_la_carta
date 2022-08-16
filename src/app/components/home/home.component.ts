import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged=false
  constructor(private tok:TokenService) { }

  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
}
