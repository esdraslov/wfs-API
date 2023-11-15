/**
* lisence: MIT
* author: esdraslov
* github: esdraslov
* github repo: esdraslov/wfs-API
*/
if (!localStorage.hasOwnProperty("mainDir")) {
  localStorage.setItem("mainDir", "[]")
}
let wfs = {
  addTextFile: async function(file, lotName, directory) {
    let dir
    let fileEncoded
    await fetch(file).then(response => response.text()).then(data => fileEncoded = data)
    localStorage.setItem(lotName, fileEncoded)
    if (directory == "") {
      dir = JSON.parse(localStorage.getItem("mainDir"))
      dir.push(lotName)
      localStorage.setItem("mainDir", dir.toString())
    } else {
      dir = JSON.parse(localStorage.getItem(directory))
      dir.push(lotName)
      locaStorage.setItem(directory, dir.toString())
    }
  },
  getFile: function(lotName) {
    return localStorage.getItem(lotName)
  },
  directorys: {
    add: function(directoryName) {
      localStorage.setItem(directoryName, "[]")
    },
    get: function(directoryName) {
      return JSON.parse(localStorage.getItem(directoryName))
    }
  }
}
