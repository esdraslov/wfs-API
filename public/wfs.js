/**
* lisence: MIT
* author: esdraslov
* github: esdraslov
* github repo: esdraslov/wfs-API
*/
let wfs = {
  addTextFile: function(file, lotName, directory) {
    let fileEncoded
    await fetch(file).then(response => response.text()).then(data => fileEncoded = data)
    localStorage.setItem(lotName, fileEncoded)
    if (directory == "") {
      localStorage.setItem("mainDir", lotName)
    } else {
      locaStorage.setItem(directory, lotName)
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
