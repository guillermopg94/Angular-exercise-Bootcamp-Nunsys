import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo-list/articulo.model';
import { ArticuloService } from '../articulo/articulo-list/articulo.service';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  articulos: Articulo [] = [];
  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
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
