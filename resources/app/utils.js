'use strict'
const {shell} = require("electron")
const path = require("path")
const fs = require("fs")
const {readdirSync, statSync} = require("fs")
const NodeRSA = require("node-rsa")
module.exports.getDirectories = getDirectories
module.exports.copyFile = copyFile
module.exports.openUrlExternal = openUrlExternal
module.exports.encryptRSA = encryptRSA
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