import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  title = 'markdown-plugin';

  formGroup: FormGroup;

  key = 'markdown';

  constructor( private fb: FormBuilder, private http: HttpClient ) {
  }


  ngOnInit(): void {
    this.formGroup = this.fb.group( {
      markdown: [ null ]
    } );
    this.http.get( './assets/mock/readme.md', { responseType: 'text' } ).subscribe( data => {
      this.formGroup.patchValue( {
        markdown: data
      } );
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
