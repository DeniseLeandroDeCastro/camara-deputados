import { Component, OnInit } from '@angular/core';
import { Deputado } from '../deputado';
import { DeputadoService } from '../deputado.service';


@Component({
  selector: 'app-lista-deputado',
  templateUrl: './lista-deputado.component.html',
  styleUrls: ['./lista-deputado.component.css']
})
export class ListaDeputadoComponent implements OnInit {

  deputados: Deputado[];

  constructor(private ds: DeputadoService) {
    this.deputados = [];
  }

  ngOnInit() {
    this.ds.listar().subscribe(
      res=> {
        this.deputados = res[ "dados" ];
      }
    );
  }

  listar() {
    this.ds.listar().subscribe(res => {
      this.deputados = res["dados"];
      console.log(res);
  });
  }

}
