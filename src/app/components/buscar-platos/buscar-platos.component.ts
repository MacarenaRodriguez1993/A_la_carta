import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-buscar-platos',
  templateUrl: './buscar-platos.component.html',
  styleUrls: ['./buscar-platos.component.css']
})
export class BuscarPlatosComponent implements OnInit {

  countries:string[]=['españa','argentina', 'brasil','ecuador','italia'];
  isLogged=false;
  constructor(private tok:TokenService) { }
  ngOnInit(): void {
    if(this.tok.getToken()){
      this.isLogged=true;
    }
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

}
