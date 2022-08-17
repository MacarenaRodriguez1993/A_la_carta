import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  
  resumen: any;
  data:any[]=[];
  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.receta();
  }


  receta(){
    let id=[716429, 716432,716425,716426];
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
