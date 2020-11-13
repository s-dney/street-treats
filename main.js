let num = 100;

for (let i = 1; i <= num; i++) {
  img = document.createElement('img');
  img.src = `photos/thumbnails/${i}.jpg`
  img.className = "thumbnail"
  document.body.append(img)
}



let modal = document.getElementById("myModal");

let imgs = document.getElementsByClassName("thumbnail");
let imgArray = Array.from(imgs)
imgArray.forEach(function(img) { 
  let modalImg = document.getElementById("modal_image");
  let captionText = document.getElementById("caption");
  let fileName = img.src.split("/").pop()

  img.onclick = function(){
    console.log(fileName)
  modal.style.display = "block";
  modalImg.src = `photos/${fileName}`;
  captionText.innerHTML = img.alt;
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  })