import { NgModule } from '@angular/core';
import { ZMarkdownComponent } from './z-markdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowMarkdownComponent } from './show-markdown/show-markdown.component';
import { HtmlPipe } from './pipe/html.pipe';
import { CommonModule } from '@angular/common';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { EditorAlignJustifyComponent } from './editor-align-justify/editor-align-justify.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule( {
  declarations: [
    ZMarkdownComponent,
    ShowMarkdownComponent,
    HtmlPipe,
    CodemirrorComponent,
    EditorAlignJustifyComponent,
    PreviewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    ZMarkdownComponent,
    ShowMarkdownComponent
  ]
} )
export class ZMarkdownModule {

}
