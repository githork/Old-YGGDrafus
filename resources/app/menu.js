'use strict'
const {BrowserWindow, app, Menu} = require("electron")
module.exports.setApplicationMenu = setApplicationMenu

function setApplicationMenu() {
  var menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
}

var menuTemplate = [{
  label: api.i18n.translate("Menu_View"),
  submenu: [{
    label: api.i18n.translate("Menu_Reload"),
    accelerator: "CmdOrCtrl+R",
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.reload()
      }
    }
  }, {
    label: api.i18n.translate("Menu_ToggleFullScreen"),
    accelerator: "CmdOrCtrl+F",
    click: (item, focusedWindow) => {
      if (focusedWindow) {
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
      }
    }
  }]
}, {
  label: api.i18n.translate("Menu_Window"),
  role: "window",
  submenu: [{
    label: api.i18n.translate("Menu_NewGameWindow"),
    accelerator: "CmdOrCtrl+N",
    click: (item, focusedWindow) => {
      api.game.newWindow()
    }
  },
  {
    label: api.i18n.translate("Menu_BackgroundNotifications"),
    type: "checkbox",
    checked: api.config.get("bBackgroundNotifications"),
    click: (item, focusedWindow) => {
      api.config.set("bBackgroundNotifications", item.checked)
    }
  }]
}]

if (process.platform == "darwin") {
  const name = app.getName()
  menuTemplate.unshift({
    label: name,
    submenu: [{
      label: api.i18n.translate("Menu_About") + " " + name,
      role: "about"
    }, {
      type: "separator"
    }, {
      label: "Services",
      role: "services",
      submenu: []
    }, {
      type: "separator"
    }, {
      label: api.i18n.translate("Menu_Hide") + " " + name,
      accelerator: "Command+H",
      role: "hide"
    }, {
      label: api.i18n.translate("Menu_HideOthers"),
      accelerator: "Command+Alt+H",
      role: "hideothers"
    }, {
      label: api.i18n.translate("Menu_ShowAll"),
      role: "unhide"
    }, {
      type: "separator"
    }, {
      label: api.i18n.translate("Menu_Quit"),
      accelerator: "Command+Q",
      click: () => {
        app.quit()
      }
    }]
  })
}

  menuTemplate.push({
    label: "Dev",
    submenu: [{
      label: api.i18n.translate("Menu_ToggleDeveloperTools"),
      accelerator: (() => {
        if (process.platform === "darwin") {
          return "Alt+Command+I"
        } else {
          return "Ctrl+Shift+I"
        }
      })(),
      click: (item, focusedWindow) => {
        if (focusedWindow) {
          focusedWindow.toggleDevTools()
        }
      }
    }]
  })
