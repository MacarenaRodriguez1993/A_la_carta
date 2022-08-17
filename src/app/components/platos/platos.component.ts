import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  
  resumen: any;
  data:any[]=[];

  isLogged=false;

  constructor(private api:ApiServiceService,private tok:TokenService) { }

  ngOnInit(): void {
    this.receta();
    if(this.tok.getToken()){
      this.isLogged=true;
    }
  }


  receta(){
    let id=[716431, 716432,716425,716426];
    let datos;
    for(let i=0; i<4;i++){
      this.api.traerReceta(id[i]).subscribe(
        
        data=>{
          datos={
            title:data.title,
            imagen:data.image,
            dieta:data.diets,
            saludable:data.healthScore,
            precio:data.pricePerServing,
            tipo_de_plato:data.dishTypes,
            tiempo:data.readyInMinutes
          }
          this.data.push(datos);
        })
        
        console.log(id[i]);
    }
  }
}
