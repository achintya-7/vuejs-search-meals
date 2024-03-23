export function setSearchedMeals(state, meals) {    
    state.searchedMeals = meals || [];
    console.log('Meals added to list of length: ' + state.searchedMeals.length);
}