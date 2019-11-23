'use strict'
const {app} = require("electron")
const i18n = require("i18n")
const path = require("path")
const config = require('electron-json-config')
module.exports.init = init

function initConfig() {
  if (config.get("bBackgroundNotifications") == undefined) {
    config.set('bBackgroundNotifications', true);
  }
	return (config)
}

function init() {
	global.api = new Object()
	api.i18n = new Object()
  	i18n.configure({
   		locales:["en", "fr"],
   		fallbacks:{"fr-CA": "fr",
   		"fr-CH": "fr",
   		"fr-FR": "fr"},
   		register: api.i18n,
   		directory: path.join(__dirname, "/locales"),
   		api: {
      		'__': 'translate',
      		'__n': 'translateplural'
    	}
  	})
 	i18n.setLocale(app.getLocale()) // Prend la locale du système
	api.config = initConfig()
	api.menu = require(path.join(__dirname, "menu.js"))
	api.game = require(path.join(__dirname, "game.js"))
	api.utils = require(path.join(__dirname, "utils.js"))
}