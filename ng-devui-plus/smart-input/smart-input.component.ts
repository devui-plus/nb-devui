import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'd-smart-input',
  templateUrl: './smart-input.component.html',
  styleUrls: ['./smart-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SmartInputComponent),
    multi: true
}]
})
export class SmartInputComponent implements ControlValueAccessor,OnInit {
  @Input() size: '' | 'sm' | 'lg';
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() clearable = false;
  @Output() fieldClearEvent = new EventEmitter<string>();
  @ViewChild('smartInput') smartInputElement: ElementRef;
  private onChange = (_: any) => null;
  private onTouch = () => null;

  constructor(
    private renderer: Renderer2,
  ) { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any = ''): void {
    this.renderer.setProperty(this.smartInputElement.nativeElement, 'value', value);
  }

  ngOnInit() {
  }

  clearInput(text){
    this.renderer.setProperty(this.smartInputElement.nativeElement, 'value', '');
    this.fieldClearEvent.emit(text);
  }
}
