<template>
    <div class="p-8 pb-0">
        <h1 class="text-4x1 font-bold mb-4 text-orange-500">
            Search Meals by Name
        </h1>
    </div>

    <div class="px-8 pb-3">
        <input
         type="text"
         v-model="keyword"
         class="rounded border-2 bg-white border-grey-200 w-full"
         placeholder="Search for meals"
         @change="searchMeals"
        />
    </div>

    <Meals :meals="meals" />
    
</template>

<script setup>
    import { ref } from 'vue';  
    import store from '../store';
    import { computed } from "@vue/reactivity";
    import Meals from '../components/Meals.vue';

    const keyword = ref('');
    import { computed, useStore } from 'vuex';

    export default {
        setup() {
            const store = useStore();
            const meals = computed(() => store.getters.searchedMeals);

            return {
                meals
            };
        }
    }

    function searchMeals() {
        if (keyword.value) {
            store.dispatch("searchMeals", keyword.value);
        } else {
            store.commit("setSearchedMeals", []);
        }
    }

</script>