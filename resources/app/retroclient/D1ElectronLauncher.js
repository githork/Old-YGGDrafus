'use strict'
const electron = require("electron")
const mousetrap = require("mousetrap")
const currentWindow = electron.remote.getCurrentWindow()
const api = electron.remote.getGlobal("api")

function encryptRSA(pass) {
	return (api.utils.encryptRSA(pass))
}
function getElectronVersion() {
	return (process.versions.electron)
}
function getNodejsVersion() {
	return (process.versions.node)
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
function makeLog(sLogFile, sMessage, bError)
{
	if (bError == null) bError = false
	var date = new Date
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	var milliSeconds = date.getMilliseconds()
	while (String(hours).length < 2)
	{
		hours = "0" + hours
	}
	while (String(minutes).length < 2)
	{
		minutes = "0" + minutes
	}
	while (String(seconds).length < 2)
	{
		seconds = "0" + seconds
	}
	while (String(milliSeconds).length < 3)
	{
		milliSeconds = "0" + milliSeconds
	}
	var sTime = "[" + hours + ":" + minutes + ":" + seconds + ":" + milliSeconds + "] "
	sMessage = sTime + sMessage
	if (bError)
	{
		console.error(sMessage)
	}
	else
	{
		console.log(sMessage)
	}
	if (sLogFile != null)
	{
		var day = date.getDate()
		var month = date.getMonth() + 1
		var year = date.getFullYear()
		while (String(day).length < 2)
		{
			day = "0" + day
		}
		while (String(month).length < 2)
		{
			month = "0" + month
		}
		var sDate = "[" + day + "/" + month + "/" + year + "] "
		sMessage = sDate + sMessage
		api.utils.writeLog(sLogFile, sMessage)
	}
}
function userLog(sMessage, bError)
{
	var sMessage
	var sType = "[CLIENT"
	if (bError)
	{
		sType = sType + "_ERROR] "
	}
	else
	{
		sType = sType + "] "
	}
	sMessage = sType + sMessage
	makeLog("user", sMessage, bError)
}
function debugRequest(bSend, bLogToFile, sData, sPlayerName, sCurrentServer) {
	var sArrow
	var sMessage
	if (bSend)
	{
		sArrow = "--> "
	}
	else
	{
		sArrow = "<-- "
	}
	if (sPlayerName == null)
	{
		sMessage = sArrow + sData
	}
	else
	{
		sMessage = "(" + sPlayerName + ", " + sCurrentServer + ") " + sArrow + sData
	}
	makeLog(bLogToFile ? "requests" : null, sMessage)
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