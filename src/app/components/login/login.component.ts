import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient } from '@angular/common/http';
import { loginI } from 'src/app/service/models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario=new FormGroup(
    {
      email: new FormControl(''),
      password:new FormControl('')
    }
  );
  usuario:loginI[] =[];
  constructor(
    private builder:FormBuilder,private tok:TokenService
  ) {
    this.formulario=this.builder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

 public onSubmit(){
  const url='http://challenge-react.alkemy.org/'
  const usuario={email:this.formulario.value.email, password:this.formulario.value.password}
    this.tok.login(url,usuario).subscribe(res=>{
      console.log(res)
    });
 }
  
}
