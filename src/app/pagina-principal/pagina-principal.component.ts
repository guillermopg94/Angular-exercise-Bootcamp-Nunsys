import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo/articulo.model';
import { ArticuloService } from '../articulo/articulo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  articulos: Articulo [] = [];
  constructor(private articuloService: ArticuloService,
    private router: Router) { }

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

  public navegarAFicha(idArticulo: number):void{
      this.router.navigate(['articulo-ficha', idArticulo]);
  }

}
