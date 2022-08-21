import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime,filter,map,Observable,tap} from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-buscar-platos',
  templateUrl: './buscar-platos.component.html',
  styleUrls: ['./buscar-platos.component.css']
})
export class BuscarPlatosComponent implements OnInit {
  isLogged=false;
  datos:any[]=[];
  data:any[]=[];


  inputBusqueda= new FormControl('');

  countries:string[]=['españa','argentina', 'brasil','ecuador','italia'];

  constructor(private tok:TokenService, private api:ApiServiceService,private router:Router) { }


  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }
    this.buscar();
  }
/*
  control=new FormControl();
  filCountries!: Observable<string[]>;

  ngOnInit(): void {
    this.filCountries=this.control.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  //Funcion para el filtrado
  private filter(val:string):string[]{
    const formatVal= val.toLocaleLowerCase();

    return this.countries.filter(country => country.toLocaleLowerCase().indexOf(formatVal) === 0);
  }*/
  private debounceTimer?:NodeJS.Timeout;
  onQueryChanged(query:string=''){
    
    if(query.length>2){
      clearTimeout(this.debounceTimer);
      console.log(query.length)
    }
    this.debounceTimer=setTimeout(()=>{
      console.log(query)
    },600);
  }

//buscar plato por nombre 
  buscar(){
   this.inputBusqueda.valueChanges
    .pipe(
      debounceTime(350),
      filter((search:string)=> search.length >2)
    )
    .subscribe(
      (search:string) => 
       this.api.buscarRecetas(search).subscribe(search=>{
        this.datos=search;  
        console.log(search)
        })
    );
  }


  agregar(index:number){
    this.router.navigate(['home',index]);
    
    /*
    let datos;
    this.api.traerReceta(index).subscribe(data =>{
      datos={
        title:data.title,
        imagen:data.image,
        dieta:data.diets,
        //saludable:data.healthScore,
        //precio:data.pricePerServing,
        tipo_de_plato:data.dishTypes,
        //tiempo:data.readyInMinutes
      }
      this.data.push(datos);
    })
    console.log(this.data);
  }*/
}
}
