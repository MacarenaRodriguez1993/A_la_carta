import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged=false
  constructor(private tok:TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  agregarPlato(){
    this.router.navigate(['agregar']);
  }
}
