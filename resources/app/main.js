'use strict'
const {app} = require("electron")
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  // On empêche 2 instances distinctes du main de tourner, pour que les paramètres soient synchronisés entre toutes les fenêtres du jeu
  app.quit()
}
const { powerSaveBlocker } = require("electron")
const flashLoader = require("flash-player-loader")
const path = require("path")
const apiGen = require(path.join(__dirname, "api.js"))

app.on("window-all-closed", function() {
  // Pour les Macs
  app.quit()
})
app.on("second-instance", (event, commandLine, workingDirectory) => {
 api.game.newWindow()
})
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
	  // Bloque la navigation : ouvre les liens tiers reçus dans le chat dans le navigateur Web du système
	  event.preventDefault()
	  api.utils.openUrlExternal(navigationUrl)
  })
  contents.on("new-window", (event, navigationUrl) => {
    // Ouvre tous les liens tiers vers le navigateur Web par défaut
    event.preventDefault()
    api.utils.openUrlExternal(navigationUrl)
  })
})
app.on("ready", function() {
  apiGen.init()
  api.game.init()
})
process.on("uncaughtException", function (err) {
  console.error(err)
})

powerSaveBlocker.start("prevent-app-suspension")
if (process.platform == "linux") {
	app.commandLine.appendSwitch("no-sandbox")
}
// On charge le plugin pepper Flash
flashLoader.addSource(path.join(__dirname, "pepperflash/" + process.platform).replace("app.asar", "app.asar.unpacked"))
flashLoader.load()
if (process.platform == "win32") {
  app.setAppUserModelId("com.dofus.d1elauncher")
  // On enregistre le raccourci équipé d'un APPID en faisant appel à SnoreToast
  // Nécessaire pour l'affichage des notifications natives
  var child = require("child_process").execFile
  var snoreToastPath = path.join(__dirname, "snoretoast/SnoreToast.exe").replace("app.asar", "app.asar.unpacked")
  var parameters = ["-install", "Dofus Retro/Dofus 1.lnk", app.getPath("exe"), "com.dofus.d1elauncher"]

  child(snoreToastPath, parameters, function(err, data) {
    // Sous Windows 7, SnoreToast ne se lancera pas mais c'est normal
    // La notion de APPID comme les notifs ont été introduites à partir de Windows 8...
     console.log(err)
     console.log(data.toString())
  })
}