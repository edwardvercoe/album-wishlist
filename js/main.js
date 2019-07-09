
// pick all images and layer them based on the z-index

const slideArea = document.querySelector(".albums")
// selects all images and puts in an array
const images = slideArea.querySelectorAll(".record")


let currentSlide = 0
let zIndex = 1

slideArea.addEventListener("click", function() {

  currentSlide = currentSlide + 1
    if (currentSlide > images.length -1) {
    currentSlide = 0
  }
  zIndex = zIndex + 1

  // remove the animation from the style for EVERY image
  images.forEach(image => {
    image.style.animation = ""
  })

  images[currentSlide].style.zIndex = zIndex
	images[currentSlide].style.animation = "fade 0.5s"
})

// when mouseover put images in a random place

slideArea.addEventListener("mouseover", () => {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() * 5)) -50
    const y = 25 * (Math.floor(Math.random() * 5)) -50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

slideArea.addEventListener("mouseout", () => {
  images.forEach(image => {
    image.style.transform = ""
  })
})


console.log(images)
