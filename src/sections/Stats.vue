<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { value: '96%', label: t('stats.satisfaction'), icon: '⭐' },
  { value: '+5', label: t('stats.experience'), icon: '🏆' },
  { value: '+800', label: t('stats.members'), icon: '👥' },
  { value: '24/7', label: t('stats.support'), icon: '🛟' },
]
</script>

<template>
  <section class="bg-dark-primary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="card text-center"
        >
          <p class="text-4xl mb-4">{{ stat.icon }}</p>
          <p class="text-neon-red font-montserrat font-bold text-3xl">{{ stat.value }}</p>
          <p class="text-gray-400 mt-3">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
