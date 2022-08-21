import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged=false;
  resumen: any;
  data:any[]=[];
 
  @Output() buscarreceta = new EventEmitter();
  constructor(private api:ApiServiceService,private tok:TokenService,private router:Router) { }
  numeros:number[]=[1,2,3,4];

  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    //this.receta();
  }
  receta(){
    let id=[716431, 716432,716425,716426];
    let datos;
    for(let i=0; i<4;i++){
      this.api.traerReceta(id[i]).subscribe(
        
        data=>{
          datos={
            id:data.id,
            title:data.title,
            imagen:data.image,
            dieta:data.diets,
            tipo_de_plato:data.dishTypes,
          }
          this.data.push(datos);
        })
        

    }
  }
  borrarPlato(id:number){
    this.data=this.data.filter(data=> data.id!=id)
  }
  agregarPlato(){
    this.router.navigate(['agregar']);
  }
}
