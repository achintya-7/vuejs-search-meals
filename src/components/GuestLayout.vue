<script setup> 
    import Navbar from './Navbar.vue';
</script>

<template>
  <div class="bg-gray-100 h-100">
    <Navbar />

    <main>
        <router-view />
    </main>
 </div>
</template>



