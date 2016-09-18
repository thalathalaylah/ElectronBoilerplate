/// <reference path="../../typings/index.d.ts" />

import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';

class MyApplication {
    mainWindow: Electron.BrowserWindow = null;

    constructor(public app: Electron.App){
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }

    onWindowAllClosed(){
        if(process.platform != 'darwin'){
            app.quit();
        }
    }

    onReady(){
        this.mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });
        
        this.mainWindow.webContents.openDevTools();
        this.mainWindow.loadURL('file://' + __dirname + '/index.html');

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }
}

const myapp = new MyApplication(app);