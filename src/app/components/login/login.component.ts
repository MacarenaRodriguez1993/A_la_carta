import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient } from '@angular/common/http';
import { loginI } from 'src/app/service/models/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged=false;

  formulario=new FormGroup(
    {
      email: new FormControl(''),
      password:new FormControl('')
    }
  );
  usuario:loginI[] =[];
  
  constructor(
    private builder:FormBuilder,private router: Router,private tok:TokenService
  ) {
    this.formulario=this.builder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }
  }

 public onSubmit(){
  const url='http://challenge-react.alkemy.org/'
  const usuario={email:this.formulario.value.email, password:this.formulario.value.password}
    this.tok.login(url,usuario).subscribe(res=>{
      console.log(res);
      if(res!=''){
        /*
        sessionStorage.removeItem(token_key);
        sessionStorage.setItem(token_key,JSON.stringify(res));*/
        this.isLogged=true;
        this.tok.setToken(JSON.stringify(res));
        this.router.navigate(['']);

      }
    }, err=>{
        console.log("ocurrio un error");
        this.isLogged=false;
    });
 }

 public logoOut():void{
  sessionStorage.clear();
 }
  
}
