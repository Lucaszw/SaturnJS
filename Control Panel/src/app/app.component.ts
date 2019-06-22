import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

import { EChartOption } from 'echarts';

@Component({
    selector: 'saturn-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public editorConfig = {
        theme: 'vs-dark',
        language: 'javascript',
    };
    public chartOptions: EChartOption[] = [];
    public tables: { title: string[], data: any[][] }[] = [];
    private socket: WebSocket;

    public ngOnInit(): void {
        this.socket = new WebSocket('ws://localhost:8080');
        this.socket.onmessage = event => {
            switch (event.data) {
                case 'UPDATE':
                    // do updates
                    break;
            }
        };
    }

    public updateScript(): void {
        this.socket.send('');
    }
}
