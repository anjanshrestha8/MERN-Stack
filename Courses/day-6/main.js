const url = "https://dog.ceo/api/breeds/image/random";

function getDogImage() {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((image) => {
      document.getElementById("img").src = image.message;
    });
}


