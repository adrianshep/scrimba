import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
};

export const loadRecipe = async function(id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);

        const {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        // Temporary error handling
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
};

export const loadSearchResults = async function(query) {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`)
    } catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw err;
    }
}
