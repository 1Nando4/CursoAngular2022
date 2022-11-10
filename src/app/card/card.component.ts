import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string = "https://img2.freepng.es/20180301/jfq/kisspng-arecaceae-beach-drawing-sea-sandy-beach-5a98b7856c9ba7.5687103715199578934449.jpg";
  public Titulo:string = "Curso de Angular con interpolacion";
  constructor() { }

  ngOnInit(): void {
  }

}
