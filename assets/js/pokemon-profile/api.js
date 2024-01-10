const detailApi = {}

function getUrl(numero) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`)
    .then((response) => response.json());

}

async function convertDetails(loadPokemonDetail) {
    const detail = new Details();
    const response = await getUrl(loadPokemonDetail);
    detail.name = response.forms[0].name;
    detail.ability = response.abilities[0].ability.name;
    detail.height = ((response.height)/10);
    detail.weight = response.weight/10;
    detail.number = loadPokemonDetail;
    const types = response.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    detail.types = types;
    detail.type = type;
    detail.image = response.sprites.other.dream_world.front_default;
    return detail;
}

//function convertDataToDetails() {
//    const details = new Details();
//    details.name = responseConvert.forms[0].name
//    details.ability = responseConvert.abilities[0].ability.name
//
//    console.log(ability)
//}

