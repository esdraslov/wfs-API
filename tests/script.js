function wfsLoad () {
  wfs.addTextFile("toUpload.txt", "toUpload.txt", "").then(()=>{
    console.log("File uploaded: ", wfs.getFile("toUpload.txt"));
  })
}