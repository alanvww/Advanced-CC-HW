// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	handleBackground: (callback: any) => {
		return ipcRenderer.on('update-background', callback);
	},
	updatePositionX: (callback: any) =>
		ipcRenderer.on('update-position-x', callback),
});
