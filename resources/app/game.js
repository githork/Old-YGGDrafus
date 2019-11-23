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
	// On autorise Flash à stocker les données du jeu (SharedObjects)
	try {
		// Dès le 2ème lancement, Flash sera autorisé à accéder à stocker les données du jeu pour le domaine localhost
		// Quasi-indispensable sous Windows (à moins de recharger le jeu via le menu uniquement après avoir accepté, ce qui est contre-intuitif)
		// Utile sous Mac/Linux au cas où l'utilisateur missclick et refuse lors du 1er lancement
		var sharedObjectsPath = path.join(app.getPath("userData"), "Pepper Data/Shockwave Flash/WritableRoot/#SharedObjects/")
		var sharedObjectsFolders = api.utils.getDirectories(sharedObjectsPath)
		for (var i in sharedObjectsFolders) {
			var allowedLocalStorageDomainsPath = path.join(sharedObjectsPath, sharedObjectsFolders[i], "macromedia.com/support/flashplayer/sys/#local/settings.sol")
			api.utils.copyFile(path.join(__dirname, "flashsettingslocalhost.sol"), allowedLocalStorageDomainsPath)
		}
	} catch (err) {
    	// Au premier lancement le dossier contenant l'ID unique n'est pas encore visible, la copie est impossible.
	}
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