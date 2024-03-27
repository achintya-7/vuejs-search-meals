// export function setSearchedMeals(state, meals) {    
//     state.searchedMeals = meals || [];
//     console.log('Meals added to list of length: ' + state.searchedMeals.length);
// }

export function setSearchedReports(state, reports) {
    state.searchReports.reports = reports || [];
    state.searchReports.loading = false;
    console.log('Reports added to list of length: ' + state.searchReports.reports.length);
}