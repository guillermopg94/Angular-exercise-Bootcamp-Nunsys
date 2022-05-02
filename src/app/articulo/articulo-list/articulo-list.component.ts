import { Component, OnInit } from '@angular/core';
import { Articulo } from './articulo.model';
import { ArticuloService } from './articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.scss']
})
export class ArticuloListComponent implements OnInit {
articulos: Articulo [] = [];
  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  private obtenerArticulos(){
    this.articuloService.obtenerArticulos().subscribe(
      (data) =>{
      data.forEach((articulos)=>{
       const articuloAincluir: Articulo = new Articulo(articulos.id, articulos.nombre, articulos.precio, articulos.descripcion, articulos.imagen );
       this.articulos.push(articuloAincluir);
      })
      }
    )
  }

}
