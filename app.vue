<script setup lang="ts">
</script>

<template>
  <NuxtLoadingIndicator />

  <div class="container h-screen mx-auto antialiased">
    <div>
      <nav class="flex gap-4 p-4 align-center">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/characters">
          Characters
        </NuxtLink>
      </nav>
    </div>
    
    <NuxtLayout />
  </div>
</template>
