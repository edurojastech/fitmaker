<script setup lang="ts">
import { translations } from '../constants'

const { tools } = translations

const toolsList = [
  { name: tools.calorie, icon: '🔥', description: tools.calorieDesc },
  { name: tools.bmi, icon: '⚖️', description: tools.bmiDesc },
  { name: tools.macro, icon: '🥗', description: tools.macroDesc },
  { name: tools.goal, icon: '🎯', description: tools.goalDesc },
]
</script>

<template>
  <section class="bg-dark-secondary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ tools.title }}</p>
        <h2 class="heading-md mt-4">{{ tools.subtitle }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ tools.description }}
        </p>
      </div>

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="tool in toolsList"
          :key="tool.name"
          class="group card text-center cursor-pointer"
        >
          <p class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ tool.icon }}</p>
          <h3 class="font-montserrat font-bold text-lg">{{ tool.name }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ tool.description }}</p>
          <button class="mt-4 text-neon-red hover:text-neon-orange transition-colors font-bold">
            {{ tools.useTool }} →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
