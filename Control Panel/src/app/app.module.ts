import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    monaco.languages.typescript.javascriptDefaults.addExtraLib([
      'declare class SaturnStatic {',
      '    /**',
      '     * Returns the next fact',
      '     */',
      '    chart(data: any[], options: Object):void;',
      '    table(data: any[]): void;',
      '}',
      'declare const Saturn: SaturnStatic;'
    ].join('\n'), 'typings/Satun.d.ts');
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    NgxEchartsModule,
    BrowserAnimationsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
