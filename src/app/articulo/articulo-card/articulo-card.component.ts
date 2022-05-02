import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-card',
  templateUrl: './articulo-card.component.html',
  styleUrls: ['./articulo-card.component.scss']
})
export class ArticuloCardComponent implements OnInit {

@Input() articulo?: Articulo;

  constructor() { }

  ngOnInit(): void {
  }

}
