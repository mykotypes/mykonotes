

<template>
  <NavBar />
  <div class="mt-20 x-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

    <RouterView></RouterView>

  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

import { RouterView } from 'vue-router';
</script>

