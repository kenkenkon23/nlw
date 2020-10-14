
//create map
const map = L.map('mapid').setView([-23.5662359,-46.6441534], 16);


//create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68], //largura altura
    iconAnchor: [29, 68],
})
    
let marker; //ou var marker

//create and add mmarker
map.on('click', (event) => {
    console.log("aa");
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    
    document.querySelector('[name=lat]').value = lat;//pesquisa por atributo
    document.querySelector('[name=lng]').value = lng;

    //se o marker existir (!= null) remover ele
    marker && map.removeLayer(marker)

    //adicionar o marker dnv.
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//adc o campo de fotos
function addPhotoField(){
    //get o container de foto #images
    const container = document.querySelector('#images')

    //get o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada. O clone node vai clonar todos os filhos se true
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) 

    //verificar se o campo está vazio. Se sim, não adicionar ao container
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return //o return vai parar o código, ou seja, vai evitar s códigos a partir dessa linha.
    }
    //NULL NÃO É A MESMA COISA QUE ""
    input.value = "";

    //limpar o campo antes de adicionar

    //adicionar o clone ao container de #images  (append => adicionar)
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = "";
        return //o return elimina a necessidade do else, dependendo do casoo
    } 

    //limpar o campo

    //deletar o campo finally :))))
    span.parentNode.remove();   
}

//troca do sim e não
function toggleSelect(event){
    //retirar a classe active dos botões
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'))

    //pegar botão clicado
    const button = event.currentTarget

    //colocar a classe active no botão clicado
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value; //o data set se refere ao data-value, ou data-nome, enfim
    

    //verificar se sim ou não
}