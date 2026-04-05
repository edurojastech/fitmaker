<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = [
  { label: 'Início', href: '/' },
  { label: 'Programas', href: '#programs' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Planos', href: '#plans' },
  { label: 'Blog', href: '#blog' },
]
</script>

<template>
  <header class="fixed top-0 w-full bg-dark-primary/95 backdrop-blur-md border-b border-dark-tertiary z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link class="flex items-center gap-2" to="/">
        <div class="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
          <span class="font-montserrat font-bold text-white">FM</span>
        </div>
        <span class="text-xl font-montserrat font-bold text-white hidden sm:inline">FitMaker</span>
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium"
        >
          {{ item.label }}
      </a>
      </div>

      <!-- Auth Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <router-link to="/login" class="px-6 py-2 text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium">
          Login
        </router-link>
        <router-link to="/signup" class="btn-primary">
          Cadastro
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden flex flex-col gap-1.5 focus:outline-none"
        @click="toggleMenu"
      >
        <span
          class="w-6 h-0.5 bg-neon-red rounded transition-all duration-300"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="w-6 h-0.5 bg-neon-red rounded transition-all duration-300"
          :class="isMenuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="w-6 h-0.5 bg-neon-red rounded transition-all duration-300"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-dark-secondary border-t border-dark-tertiary"
    >
      <div class="px-4 py-4 space-y-4">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="block text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium py-2"
        >
          {{ item.label }}
        </a>
        <div class="flex flex-col gap-3 pt-4 border-t border-dark-tertiary">
          <router-link to="/login" class="px-6 py-2 text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium">
            Login
          </router-link>
          <router-link to="/signup" class="btn-primary">
            Cadastro
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
