const discogsUrl = "https://api.discogs.com/users/eddie.vercoe/wants?token=cYjOKQdlOjbONiEEuvfaIfVOpJMxOpnPjLWvrukh"

const resultsTag = document.querySelector("div.albums")


const discogsData = function () {
  return fetch(discogsUrl)
  .then(response => response.json())
  .then(data => {


    return data.wants.map(result => {
      return {
        coverimg: result.basic_information.cover_image

      }

    })

  })
}

console.log(discogsData())



// add results to page
const addResults = function (results) {
  // remove all loading tags
  resultsTag.innerHTML = ""

  // loop over each individual result and add to the results tag
  results.forEach(result => {
    resultsTag.innerHTML = resultsTag.innerHTML +
    `
	<div class="record draggable tilt" data-tilt>
	 	<img src="${result.coverimg}">
	</div>
	`
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
		max: 35,
		speed: 1500,
    glare: true,
    "max-glare": 0.8,
    reset: false,
    scale: 1.2,
    transition: false
	});
  })

}

const displayRecords = function() {

  discogsData()
    .then(results => {
    	addResults(results)

      document.addEventListener("mouseover", function(event) {
        if (event.target && event.target.classList.contains("welcome")) {
      // selects all images and puts in an array
          const images = slideArea.querySelectorAll(".record")

      // when mouseover put images in a random place

          images.forEach(image => {
            const x = Math.floor(Math.random() * Math.floor(80))
            const y = Math.floor(Math.random() * Math.floor(60))

            image.style.left = `${x}%`
            image.style.top = `${y}%`



          })
          event.target.classList.remove("welcome")
        }
      })

          let zCount = 1
      document.addEventListener("mousedown", function(event) {
        if (event.target && event.target.classList.contains("record")) {

          zCount = zCount + 1

          const record = event.target
          record.style.zIndex = zCount

        }
      })
      document.addEventListener("onmouseup", function(event) {
        if (event.target && event.target.classList.contains("record")) {
          const record = event.target
          record.style.zIndex = 0
        }
      })


  		})
}


displayRecords()
