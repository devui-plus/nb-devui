import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'd-inline-splitter',
  templateUrl: './inline-splitter.component.html',
  styleUrls: ['./inline-splitter.component.scss']
})
export class InlineSplitterComponent implements OnInit {
  @Input() height = '25px';
  @Input() color = '#ccc';
  @Input() margin = '0 8px';

  constructor() { }

  ngOnInit() {
  }

}
