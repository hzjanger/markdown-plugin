import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  markdown: string = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get( './assets/创建库.md', { responseType: 'text' } ).subscribe( data => {
      this.markdown = data;
    } );
  }

}
