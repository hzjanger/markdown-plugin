import { Component, Input, OnInit } from '@angular/core';

import marked from 'marked';
import hljs from 'highlight.js';
import { HtmlEscape } from '../utils/html-escape';

@Component( {
  selector: 'z-show-markdown',
  templateUrl: './show-markdown.component.html',
  styleUrls: [ './show-markdown.component.scss' ]
} )
export class ShowMarkdownComponent implements OnInit {

  private markdown$: any;

  @Input()
  set markdown( markdown: string ) {
    marked.setOptions( {
      highlight: ( code, lang ) => {
        let res;
        if ( lang ) {
          res = hljs.highlight( lang, code, true ).value;
        } else {
          res = hljs.highlightAuto( code ).value;
        }
        return res;
      }
    } );

    this.markdown$ = marked( HtmlEscape.htmlEncode( markdown ) );

  }

  get markdown() {
    return this.markdown$;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
