import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`/search.php?s=${keyword}`)
        .then(response => {
            commit('setSearchedMeals', response.data.meals);
        });
}

export function searchReports({ commit }, keyword) {
    axiosClient.get(`/search?report=${keyword}`)
        .then(response => {
            commit('setSearchedReports', response.data.meals);
        });
}