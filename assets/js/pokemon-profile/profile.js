const root = document.getElementById("root");

const loadPokemonDetail = (_ => {
    const numero = window.location.hash.slice(1);
    console.log("POKEMON:", numero)
    return numero
  })();


function profile(pokemon) {
    return `
<section class="profile ${pokemon.type}">
    <div class="name-number">
        <span class="name">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>
    </div>

    <div class="image-pokemon">
        <ol class="types">
           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <span class="image"><img
                src="${pokemon.image}"
                alt="${pokemon.name}">
        </span>
    </div>


    
    <ul class="profile-status">
        <li class="list-status">
            <span class="status">
                Ability: ${pokemon.ability}
            </span>
            <span class="status">
                height: ${pokemon.height} m
            </span>
            <span class="status">
                weight: ${pokemon.weight} Kg
            </span>
        </li>
    </ul>
</section>
`
}

async function loadProfile(loadPokemonDetail) {
    const pokemon = await convertDetails(loadPokemonDetail);
    console.log(pokemon)
    root.innerHTML += profile(pokemon);
}


loadProfile(loadPokemonDetail);