import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(
    private builder:FormBuilder
  ) {
    this.formulario=this.builder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
  
}
