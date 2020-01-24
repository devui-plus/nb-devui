import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrls: ['./color-cube.component.scss']
})
export class ColorCubeComponent implements OnInit {
  @Input() color;
  @Input() size = 30;
  
  constructor() { 

  }

  ngOnInit() {
  }

}
