import { ipcMain } from 'electron';

ipcMain.on('abc', (event, args) => {
  console.log({ event, args });
});
