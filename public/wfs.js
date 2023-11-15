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
  addTextFile: function(file, lotName, directory) {
    let fileEncoded
    await fetch(file).then(response => response.text()).then(data => fileEncoded = data)
    localStorage.setItem(lotName, fileEncoded)
    if (directory == "") {
      localStorage.setItem("mainDir", JSON.parse(localStorage.getItem("mainDir")).push(lotName))
    } else {
      locaStorage.setItem(directory, JSON.parse(localStorage.getItem(directory)).push(lotName))
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
  },
},
