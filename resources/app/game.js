'use strict'
const {app, BrowserWindow} = require("electron")
const path = require("path")
const flashTrust = require("nw-flash-trust-a")
module.exports.init = init
module.exports.newWindow = newWindow
var initialized = false

function init() {
	if (initialized) {
		return
	}
	api.menu.setApplicationMenu()
	// On donne l'autorisation à Flash de charger les autres fichiers SWF
	var trustManager = flashTrust.initSync(app.getName().replace(" ", ""), path.join(app.getPath("userData"), "Pepper Data/Shockwave Flash/WritableRoot"))
	trustManager.empty()
	trustManager.add("\ufeff" + path.join(__dirname, "retroclient"))
	initialized = true
	newWindow()
}

function newWindow() {
	if (!initialized) {
		return
	}
	var gameWindow = new BrowserWindow({width: 742, height: 556, useContentSize:true, webPreferences: {
		nodeIntegration: true,
		plugins: true,
		backgroundThrottling: false
	}})
	gameWindow.loadURL("file://" + __dirname + "/retroclient/D1ElectronLauncher.html")
}