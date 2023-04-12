// Insert your code here
let index = ""

function pokemon(){
for ( let i=1; i<= 15 ; i++) {
    index++
 fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
.then(response => response.json())
.then(data =>{
    document.querySelector('#pokemonContainer').innerHTML += `<div id="pokemonContainer">
    <div class="pokemon ${data.types[0].type.name}">
        <div class="imgContainer">
            <img src=${data.sprites.front_default} alt="${data.name}" />
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <span class="type">Type: <span>${data.types[0].type.name}</span></span>
        </div>
    </div>
</div>`
})
}}

pokemon()

document.querySelector('#next').addEventListener('click', function() {
    pokemon()
})