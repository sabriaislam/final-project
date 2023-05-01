const images = [
  'content/ad-1.jpeg',
  'content/ad-2.jpeg',
  'content/ad-3.png',
  'content/ad-4.jpeg',
  'content/ad-5.gif',
  'content/ad-6.jpg',
  'content/ad-7.jpeg',
  'content/ad-8.jpeg',
  'content/ad-9.jpg',
  'content/ad-10.jpeg',
  'content/ad-11.jpeg',
  'content/ad-12.jpeg',
  'content/ad-13.jpeg',
  'content/ad-14.png',
  'content/ad-15.jpeg'

];

let i = 0

function placeImage(x, y) {
  if (i >= images.length) {
    document.removeEventListener("click", handleClick)
    document.removeEventListener("touchend", handleTouch)
    return
  }
  
  const nextSrc = images[i]
  
  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "false")
  img.classList.add("sponsor")
  
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.2) rotate(" + (Math.random() * 20 - 10) + "deg)"
  
  document.body.appendChild(img)
  
  i = i + 1
}

function handleClick(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
}

function handleTouch(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
}

document.addEventListener("click", handleClick)
document.addEventListener("touchend", handleTouch)




