import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-color-cube',
  templateUrl: './color-cube.component.html',
  styleUrls: ['./color-cube.component.scss']
})
export class ColorCubeComponent implements OnInit {
  width: number;
  height: number;
  @Input() color;
  @Input() size = 30;
  
  constructor() { 
    this.width = this.size;
    this.height = this.size;
  }

  ngOnInit() {
  }

}
