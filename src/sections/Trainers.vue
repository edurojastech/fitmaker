<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const trainers = [
  {
    name: t('trainers.trainer1'),
    role: t('trainers.role1'),
    specialty: t('trainers.spec1'),
    avatar: '💪',
  },
  {
    name: t('trainers.trainer2'),
    role: t('trainers.role2'),
    specialty: t('trainers.spec2'),
    avatar: '🥗',
  },
  {
    name: t('trainers.trainer3'),
    role: t('trainers.role3'),
    specialty: t('trainers.spec3'),
    avatar: '🏃',
  },
  {
    name: t('trainers.trainer4'),
    role: t('trainers.role4'),
    specialty: t('trainers.spec4'),
    avatar: '🧘',
  },
]
</script>

<template>
  <section id="coaching" class="bg-dark-secondary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('trainers.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('trainers.subtitle') }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ t('trainers.description') }}
        </p>
      </div>

      <!-- Trainers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="trainer in trainers"
          :key="trainer.name"
          class="group card"
        >
          <!-- Avatar -->
          <div class="text-7xl mb-4">{{ trainer.avatar }}</div>

          <!-- Info -->
          <h3 class="text-xl font-montserrat font-bold">{{ trainer.name }}</h3>
          <p class="text-neon-orange font-bold text-sm mt-1">{{ trainer.role }}</p>
          <p class="text-gray-400 text-sm mt-2">{{ trainer.specialty }}</p>

          <!-- Button -->
          <button class="mt-4 text-neon-red hover:text-neon-orange transition-colors font-bold text-sm">
            {{ t('common.learnMore') }} →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
