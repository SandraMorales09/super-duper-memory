const fetchPokemon = () => {
    const url = "http//pokeapi.co/api/v2/pokemon/chikorita";
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
    })
}
//fetchPokemon();

const imprimir =() => {
    const pokeName = document.geltElementById("pokeName")
    let pokeInput = pokeName.value;
    console.log("Hola" + pokeInput);
}
const pokeImg = (url) => {
    const pokeImg = document.geltElementById("pokeImg");
    pokeImg.src = url;
}
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");




