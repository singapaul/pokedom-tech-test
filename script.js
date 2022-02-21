// First i want to console log the objects 

import pokemonArray from "./data/pokemon.js";

//I want to render three types info from each object
// photo, name, tag types and number

// 1. making the pokemon container tag: 

const pokemonContainer = document.querySelector(".card-container");


// 2. write the function

const pokemonCard = () => {
  // resetting the inner HTML
  pokemonContainer.innerHTML = ""
  // now I want to cycle through the items in the object and print the cards out using html
  pokemonArray.forEach((pokemon) => {

    // if statement for description
    let desc = ""
    if (pokemon.types.length == 1) {
      desc = `${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} type pokemon.`;

    } else {
      desc = `${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon.`;
    };

    // rendering the card 
    pokemonContainer.innerHTML += `
  
  <div class="card">
  <img class="card__image" src="${pokemon.sprite}" alt="">
  <div class="card__content">
  <p class="card__heading">${pokemon.name}</p>
  <p class="card__text">${desc}</p></div>
</div> `
  })
}

// filter function - filter based on pokemon type

const filterPokemontype = (pokemon) =>{
  return pokemon =  fire;
}




// 3. Execute the function at the location desired

pokemonCard();
filterPokemontype();

