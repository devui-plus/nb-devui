import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-inline-splitter',
  templateUrl: './inline-splitter.component.html',
  styleUrls: ['./inline-splitter.component.scss']
})
export class InlineSplitterComponent implements OnInit {
  @Input() height: string = '25px';
  @Input() color: string = '#ccc';
  @Input() margin: string = '0 8px';

  constructor() { }

  ngOnInit() {
  }

}
