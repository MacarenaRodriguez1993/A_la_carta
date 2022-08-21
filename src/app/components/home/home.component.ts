import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 
  @Output() buscarReceta = new EventEmitter<number>();
  constructor(private api:ApiServiceService,private tok:TokenService,private router:Router,
    private Actived:ActivatedRoute) { 
      this.Actived.params.subscribe(
        params=>{
          this.receta(params['index']);
        }
      );
    }


  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }
  receta(id:number){
    let datos;
      this.api.traerReceta(id).subscribe(
        data=>{
          datos={
            id:data.id,
            title:data.title,
            imagen:data.image,
            dieta:data.diets,
            tipo_de_plato:data.dishTypes,
          }
          this.data.push(datos);
        }
      )
  }

  borrarPlato(id:number){
    this.data=this.data.filter(data=> data.id!=id)
  }
  agregarPlato(){
    this.router.navigate(['agregar']);
  }
}
