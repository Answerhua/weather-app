/**
 * Created by Chris Hua on 2018/1/12.
 */
/*
let menubar = require('menubar')

let mb = menubar({
    dir:'http://localhost:8080',
    width:800,
    height:450
});

mb.on('ready', function ready () {
    console.log('app is ready')
    // your app code here
});
*/


const{ BrowserWindow, app} = require('electron');
let ipc = require('electron').ipcMain;

app.on('ready', function() {
    // 创建浏览器窗口。
    mainWindow = new BrowserWindow({frame: false});

    // 加载应用的 index.html
    mainWindow.loadURL('http://localhost:8080');


    ipc.on('app-quit',function(){
        mainWindow = null;
    });

    mainWindow.maximize();
    mainWindow.show();
});
