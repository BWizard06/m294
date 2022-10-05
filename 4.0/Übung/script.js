const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell;
}

const addPokemon =(pokemon) => {
    const display = document.getElementById("display");
    const tableRow = document.createElement("tr");

    tableRow.append(
        createCell(pokemon.id), 
        createCell(pokemon.name), 
        createCell(pokemon.weight), 
        createCell(pokemon.height)
    );
    
    display.appendChild(tableRow);
}

document.addEventListener("DOMContentLoaded", () => {

    const pokemonForm = document.getElementById("pokemonForm");
    pokemonForm.addEventListener("submit", (event) => {
        event.preventDefault(); //Die Seite lädt nicht neu
        const pokemonFormData = new FormData(pokemonForm);

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonFormData.get("identifier")}/`)
            .then((response) => {
                const identifierInput = document.getElementById("identifierInput");
                if(response.status === 404){
                    identifierInput.style.borderColor = "red";
                } else {
                    identifierInput.style.borderColor = "inherit";
                }
                return response.json()})
            .then((data) =>{
                addPokemon(data);
            })
    });
    
});




/*    pokeID.addEventListener("blur", ()=>{
        let inputPokeID = pokeID.value

        let jsonData;
        fetch("https://pokeapi.co/api/v2/pokemon/" + inputPokeID + "/")
            .then((response) =>{
                return response.json();
            })
            .then((data) => {
                jsonData = data
            })

            if(jsonData){
                const pokeData = jsonData.find((entry) => entry.id == pokeID.value);
                pokeName.value = pokeData.name;
                pokeweight.value = pokeData.weight;
                pokeHeight.value = pokeData.height;
            }
});*/



