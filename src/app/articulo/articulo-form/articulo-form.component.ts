import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../articulo.model';
import { ArticuloService } from '../articulo.service';


@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.scss']
})
export class ArticuloFormComponent implements OnInit {


  idArticulo?: string 
  articulos: Articulo [] = [];


  constructor(

    private route: ActivatedRoute,
    private articuloService: ArticuloService,

  ) { }

  ngOnInit(): void {

 this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;
 this.obtenerArticulos();

  }

  
  private obtenerArticulos(){
    this.articuloService.obtenerArticulos().subscribe(
      (data) =>{
      data.forEach((articulo)=>{
       const articuloAincluir: Articulo = new Articulo(articulo.id, articulo.nombre, articulo.precio, articulo.descripcion, articulo.imagen );
       this.articulos.push(articuloAincluir);
      })
      }
    )
  }

}
