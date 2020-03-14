import {Component,OnInit,Input,Output,EventEmitter,ElementRef,Renderer2,ViewChild} from '@angular/core';

@Component({
  selector: 'd-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss']
})
export class SmartInputComponent implements OnInit {
  @Input() size: '' | 'sm' | 'lg';
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() clearable = false;
  @Output() clearFunc = new EventEmitter<string>();
  @ViewChild('smartInput') smartInputElement: ElementRef;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  clearInput(){
    this.renderer.setProperty(this.smartInputElement.nativeElement, 'value', '');
    this.clearFunc.emit('');
  }
}
