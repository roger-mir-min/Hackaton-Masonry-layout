//We fetch Unsplash photos and append them inside the .container HTML element
const key = "Lhuq0m6fryaGF6Fd1Kzt15sLY30sL5HVcMGfLxSIWzU";

function carrega() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${key}&count=12`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".container").innerHTML = '';
            data.forEach((photo, i) => {
                document.querySelector(".container").innerHTML +=`\
                <div class="box">\
                    <img alt='Foto de unsplash' src='${photo.urls.small}'>\
                        <div class="photo_footer">\
                            <h2>Card ${i + 1}</h2>\
                            <p>${photo.alt_description || "A beautiful card"}</p>\
                        </div>\
                </div>`;
            }
            );
        });
}

