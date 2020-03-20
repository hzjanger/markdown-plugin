import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  title = 'markdown-plugin';

  formGroup: FormGroup;

  key = 'markdown';

  constructor( private fb: FormBuilder, ) {
  }


  ngOnInit(): void {
    this.formGroup = this.fb.group( {
      markdown: [ null ]
    } );
  }

  getValue() {
    console.log( this.formGroup.value );
  }

  setValue() {
    this.formGroup.patchValue( {
      markdown: '测试'
    } );
  }
}
