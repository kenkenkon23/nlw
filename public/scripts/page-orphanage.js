//opções do mapa. é um argumento do const map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.5662359,-46.6441534], 16);


//create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68], //largura altura
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

//create marker
L.marker([-23.5662359,-46.6441534], {icon}).addTo(map)
    .bindPopup(popup)

//image gallery
function selectImage(event){
    //guarda qual botão vc apertou
    const button = event.currentTarget

    //remover as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})

    // function removeActiveClass(button){ button.classList.remove("active") }

    //selecionar a imagem clicada
    //o children são os elementos dentro de um elemento. no caso do button, tem uma img.
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img") //pega o container da immg grande

    //atualizar o container de imagem
    imageContainer.src = image.src
    
    //adicionar a classe .active pro botão clicado
    button.classList.add('active')
}