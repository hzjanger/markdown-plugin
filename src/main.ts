import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/css/css';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/nginx/nginx';
// import 'codemirror/mode';
import 'codemirror/mode/markdown/markdown';

if ( environment.production ) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( AppModule )
  .catch( err => console.error( err ) );
