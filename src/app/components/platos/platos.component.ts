import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  isLogged=false;
  @Input('data') datos:any

  @Output() borrar = new EventEmitter<number>()

  constructor(private tok:TokenService) { }

  ngOnInit(): void {

    if(this.tok.getToken()){
      this.isLogged=true;
    }
  }
  BorrarPlato(id:number){
    this.borrar.emit(id)
  }

}
