import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'z-preview',
  templateUrl: './preview.component.svg',
  styleUrls: [ './preview.component.scss' ]
} )
export class PreviewComponent implements OnInit {

  @Input() width = 16;

  @Input() height = 16;

  constructor() {
  }

  ngOnInit() {
  }

}
