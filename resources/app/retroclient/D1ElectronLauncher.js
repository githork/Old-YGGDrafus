'use strict'
const electron = require("electron")
const mousetrap = require("mousetrap")
const currentWindow = electron.remote.getCurrentWindow()
const api = electron.remote.getGlobal("api")

function encryptRSA(pass) {
	return (api.utils.encryptRSA(pass))
}
function changeFullScreenState() {
	currentWindow.setFullScreen(!currentWindow.isFullScreen())
}
function reloadBrowserWindow() {
	currentWindow.reload()
}
function closeBrowserWindow() {
	window.close()
}
function changeTitle(title){
	document.title = title
}
function makeNotification(body, icon){
	var focusedWindow = electron.remote.BrowserWindow.getFocusedWindow()
	if (focusedWindow == null) {
		// Si Dofus 1 est en arrière plan
		var bBackgroundNotifications = api.config.get("bBackgroundNotifications")
		if (bBackgroundNotifications) {
			var n = new Notification(document.title, {
				body: body,
				icon: icon
			})
		}
	}
}

Mousetrap.bind((process.platform == "darwin" ? "command" : "ctrl") + "+q", () => {
  closeBrowserWindow()
  return false
})

Mousetrap.bind((process.platform == "darwin" ? "command" : "ctrl") + "+r", () => {
  reloadBrowserWindow()
  return false
})

Mousetrap.bind((process.platform == "darwin" ? "command" : "ctrl") + "+f", () => {
  changeFullScreenState()
  return false
})

Mousetrap.bind((process.platform == "darwin" ? "command" : "ctrl") + "+n", () => {
  api.game.newWindow()
  return false
})