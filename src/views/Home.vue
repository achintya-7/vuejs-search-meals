<script setup>
    import { onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

</script>

<template>
    <div class="flex flex-col p-8">
        <input 
            type="text" 
            class="rounded border-2 border-grey-200 w-full" 
            placeholder="Search for meals" 
        />


    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" >
            {{ letter }}
        </router-link>
    </div>


    </div>
</template>

