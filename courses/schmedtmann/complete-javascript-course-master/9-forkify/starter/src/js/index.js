import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const key = 'API key would go here',
    try {
        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pasta');