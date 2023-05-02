function displayImages() {
  const imageUrls = [    "content/gif-1.gif",    "content/gif-2.gif",    "content/gif-3.gif",    "content/gif-4.gif",    "content/gif-5.gif",    "content/gif-6.gif", "content/gif-7.gif",  "content/gif-8.gif", "content/gif-9.gif"];
  const container = document.getElementById("content");

  for (let j = 0; j < 4; j++) {
    // shuffle the array randomly each time
    for (let i = imageUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
    }
    // display the shuffled images
    for (let i = 0; i < imageUrls.length; i++) {
      const image = document.createElement("img");
      image.src = imageUrls[i];
      image.classList.add("bg-gif");
      container.appendChild(image);
    }
  }
}

displayImages();



