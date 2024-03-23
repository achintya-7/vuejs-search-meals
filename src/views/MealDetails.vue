<template>
    <div>
        <h1>
            {{ meal.strMeal }}
        </h1>

        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">

        <p>
            {{ meal.strInstructions }}
        </p>
        
    </div>
</template>

<script setup>
  import store from '../store';
  import { useRoute } from 'vue-router';  
  import { computed } from "@vue/reactivity";

  const route = useRoute();
  const mealId = route.params.id;

  const meal = computed(() => getMealInfo());

  function getMealInfo() {
    const meals = store.state.searchedMeals;
    const meal = meals.find(meal => meal.idMeal === mealId);
    return meal;
  }

</script>