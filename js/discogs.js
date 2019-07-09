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
	<div class="record">
	 	<img src="${result.coverimg}">
	</div>
	`
  })

}

const displayRecords = function() {

  discogsData()
    .then(results => {
    	addResults(results)
  		})  
}

displayRecords()
