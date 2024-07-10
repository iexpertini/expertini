const sharp = require("sharp")

sharp("filter.svg")
  .webp()
  .toFile("filter.webp")
  .then(function(info) {
    console.log(info)
  })
  .catch(function(err) {
    console.log(err)
  })