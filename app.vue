<script setup lang="ts">
import { NConfigProvider, lightTheme, darkTheme, NButton } from 'naive-ui'

const currentTheme = ref(darkTheme)
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
})
function setTheme(theme: string) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    localStorage.theme = 'dark'
    currentTheme.value = darkTheme
  }
  if (theme === 'light') {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    currentTheme.value = lightTheme
  }
}
</script>

<template>
  <NuxtLoadingIndicator />
  
  <NConfigProvider :theme="currentTheme">
    <div class="h-screen antialiased bg-gray-50 dark:bg-slate-800">
      <div class="container mx-auto text-gray-900 dark:text-gray-50">
        <NButton @click="setTheme('light')">Light</NButton>
        <NButton @click="setTheme('dark')">Dark</NButton>
        <div>
          <nav class="flex gap-4 p-4 text-red-500 align-center dark:text-green-400">
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
    </div>
  </NConfigProvider>
</template>
