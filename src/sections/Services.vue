<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = [
  {
    title: t('services.weightLoss'),
    description: t('services.weightLossDesc'),
    icon: '⚡',
  },
  {
    title: t('services.muscleBuilding'),
    description: t('services.muscleBuildingDesc'),
    icon: '💪',
  },
  {
    title: t('services.homeTraining'),
    description: t('services.homeTrainingDesc'),
    icon: '🏠',
  },
  {
    title: t('services.gymPlan'),
    description: t('services.gymPlanDesc'),
    icon: '🏋️',
  },
]
</script>

<template>
  <section id="programs" class="bg-dark-secondary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('services.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('services.subtitle') }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ t('services.description') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="group relative overflow-hidden rounded-2xl"
        >
          <!-- Card Background -->
          <div class="absolute inset-0 bg-dark-secondary border border-dark-tertiary group-hover:border-neon-red transition-all duration-300"></div>

          <!-- Content -->
          <div class="relative p-8 h-full flex flex-col justify-between z-10">
            <div>
              <p class="text-5xl mb-4">{{ service.icon }}</p>
              <h3 class="text-xl font-montserrat font-bold">{{ service.title }}</h3>
              <p class="text-gray-400 mt-3 text-sm">{{ service.description }}</p>
            </div>

            <button class="mt-6 text-neon-red hover:text-neon-orange font-montserrat font-bold inline-flex items-center gap-2 transition-colors">
              {{ t('common.learnMore') }} →
            </button>
          </div>

          <!-- Glow Effect on Hover -->
          <div class="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>