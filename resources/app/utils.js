'use strict'
const {app, shell} = require("electron")
const path = require("path")
const fs = require("fs")


const util = require('util')
const {readdirSync, statSync} = require("fs")
const NodeRSA = require("node-rsa")
module.exports.getDirectories = getDirectories
module.exports.copyFile = copyFile
module.exports.openUrlExternal = openUrlExternal
module.exports.encryptRSA = encryptRSA
module.exports.writeLog = writeLog
var RSAPublicKey = null

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+"/"+file).isDirectory()
  })
}

function copyFile(pathSrc, pathDest) {
	fs.copyFile(pathSrc, pathDest, (err) => {
		if (err) {
			console.log(err)
		}
	})
}

function openUrlExternal(url) {
	shell.openExternal(url)
}

function encryptRSA(message) {
	var encryptedMessage = null
	if (RSAPublicKey == null) {
		try { 
			var data = fs.readFileSync(path.join(__dirname, "public.key"), "utf8")
			RSAPublicKey = data
		} catch(e) {
			console.error("Unable to read RSA Public Key from file : ", e.stack)
		}
	}
	if (RSAPublicKey != null) {
		var key = new NodeRSA()
		key.importKey(RSAPublicKey)
		encryptedMessage = key.encrypt(message, "base64")
	}
	return (encryptedMessage)
}

function writeLog(sLog, sMessage) {
	if (sLog != null && sMessage != null) {
		var sDirPath = path.join(app.getPath("userData"), "RetroLogs")
		if (!fs.existsSync(sDirPath)){
			fs.mkdirSync(sDirPath);
		}
		var sFilePath = path.join(sDirPath, "log_" + sLog + ".txt")
		var wstream = fs.createWriteStream(sFilePath, {"flags": "a"})
		wstream.write(sMessage)
		wstream.end("\n");
	}
}