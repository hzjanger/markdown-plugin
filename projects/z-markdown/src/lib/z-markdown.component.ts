import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component( {
  selector: 'z-markdown',
  templateUrl: './z-markdown.component.html',
  styleUrls: [ './z-markdown.component.scss' ]
} )
export class ZMarkdownComponent implements OnInit {

  @Input()
  markdown: string;

  @Input()
  formGroup: FormGroup;

  @Input()
  key: string;


  @Input()
  options: any = {
    lineNumbers: true,
    theme: 'material',
    mode: 'markdown',
    indentUnit: 4
  };

  constructor() {
  }

  ngOnInit() {
  }

  change( data ) {
    this.markdown = data;
  }


}
