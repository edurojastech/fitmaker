<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const isMenuOpen = ref(false)
const { locale } = useI18n()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
  setLocale(newLocale)
}

const currentLocale = computed(() => locale.value)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Plans', href: '#plans' },
  { label: 'About', href: '#about' },
]
</script>

<template>
  <header class="fixed top-0 w-full bg-dark-primary/95 backdrop-blur-md border-b border-dark-tertiary z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
          <span class="font-montserrat font-bold text-white">FM</span>
        </div>
        <span class="text-xl font-montserrat font-bold text-white hidden sm:inline">FitMaker</span>
      </div>

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
        <button class="px-6 py-2 text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium">
          Login
        </button>
        <!-- Language Toggle -->
        <button
          @click="toggleLanguage"
          class="px-4 py-2 rounded-lg bg-dark-secondary hover:bg-dark-tertiary border border-dark-tertiary hover:border-neon-red text-gray-300 hover:text-neon-red transition-all duration-300 font-medium text-sm flex items-center gap-2"
          :title="currentLocale === 'pt-BR' ? 'Switch to English' : 'Trocar para Português'"
        >
          <span :class="{ 'opacity-100': currentLocale === 'pt-BR', 'opacity-50': currentLocale !== 'pt-BR' }">
            🇧🇷
          </span>
          <span class="text-gray-500">/</span>
          <span :class="{ 'opacity-100': currentLocale === 'en', 'opacity-50': currentLocale !== 'en' }">
            🇬🇧
          </span>
        </button>
        <button class="btn-primary">
          Sign Up
        </button>
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
          <button class="px-6 py-2 text-gray-300 hover:text-neon-red transition-colors duration-300 font-medium">
            Login
          </button>
          <!-- Language Toggle Mobile -->
          <button
            @click="toggleLanguage"
            class="px-4 py-2 rounded-lg bg-dark-tertiary hover:bg-opacity-80 border border-dark-tertiary hover:border-neon-red text-gray-300 hover:text-neon-red transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2"
            :title="currentLocale === 'pt-BR' ? 'Switch to English' : 'Trocar para Português'"
          >
            <span :class="{ 'opacity-100': currentLocale === 'pt-BR', 'opacity-50': currentLocale !== 'pt-BR' }">
              🇧🇷
            </span>
            <span class="text-gray-500">/</span>
            <span :class="{ 'opacity-100': currentLocale === 'en', 'opacity-50': currentLocale !== 'en' }">
              🇬🇧
            </span>
          </button>
          <button class="btn-primary">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
