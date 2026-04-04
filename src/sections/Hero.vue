<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import atletaImg from '../assets/atleta.png'

  const { t } = useI18n()
</script>

<template>
  <section id="home" class="relative min-h-screen bg-dark-primary pt-28 pb-20 overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-fade-in">
          <div>
            <p class="text-neon-red font-montserrat font-bold text-lg mb-2 uppercase">{{ t('hero.tag') }}</p>
            <h1 class="heading-lg leading-tight">
              {{ t('hero.headline') }} <span class="bg-gradient-red bg-clip-text text-transparent">{{ t('hero.highlight') }}</span> {{ t('hero.subheadline') }}
            </h1>
          </div>

          <p class="text-gray-400 text-lg leading-relaxed max-w-xl">
            {{ t('hero.description') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn-primary">
              {{ t('hero.cta1') }}
            </button>
            <button class="btn-secondary">
              {{ t('hero.cta2') }}
            </button>
          </div>
        </div>

        <!-- Right Content - Athlete Image -->
        <div class="relative hidden lg:flex items-center justify-center">
          <!-- Glow Background Circles -->
          <div class="absolute top-4 -right-20 w-64 h-64 bg-neon-orange opacity-20 rounded-full blur-3xl animate-glow-pulse"></div>
          <div class="absolute -bottom-10 -left-20 w-80 h-80 bg-neon-red opacity-15 rounded-full blur-3xl animate-glow-pulse" style="animation-delay: 0.5s;"></div>

          <!-- Image Container -->
          <div class="relative w-full h-auto z-10">
            <img
              :src=atletaImg
              alt="Muscular Athlete with Dumbbell"
              class="w-full h-auto object-cover rounded-full transition-all duration-500"
            />

            <!-- Stats Badge - Top Right -->
            <div class="absolute top-8 right-4 sm:right-8 bg-dark-secondary/95 backdrop-blur-lg px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neon-orange shadow-glow animate-float">
              <p class="text-neon-orange font-montserrat font-bold text-xs sm:text-sm">+ 1300</p>
              <p class="text-gray-300 text-xs">{{ t('hero.reviews') }}</p>
            </div>

            <!-- Stats Badge - Left -->
            <div class="absolute left-4 sm:left-8 top-1/3 bg-dark-secondary/95 backdrop-blur-lg px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neon-red shadow-glow animate-float" style="animation-delay: 0.3s;">
              <p class="text-neon-red font-montserrat font-bold text-xs sm:text-sm">+ 80</p>
              <p class="text-gray-300 text-xs">{{ t('hero.coaches') }}</p>
            </div>

            <!-- Stats Badge - Bottom Right -->
            <div class="absolute bottom-8 right-4 sm:right-8 bg-dark-secondary/95 backdrop-blur-lg px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neon-orange shadow-glow animate-float" style="animation-delay: 0.6s;">
              <p class="text-neon-orange font-montserrat font-bold text-xs sm:text-sm">+ 1500</p>
              <p class="text-gray-300 text-xs">{{ t('hero.trainers') }}</p>
            </div>

            <!-- Stats Badge - Bottom Left -->
            <div class="absolute -bottom-2 left-1/4 bg-dark-secondary/95 backdrop-blur-lg px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neon-orange shadow-glow animate-float" style="animation-delay: 0.9s;">
              <p class="text-neon-orange font-montserrat font-bold text-xs sm:text-sm">+ 1000</p>
              <p class="text-gray-300 text-xs">{{ t('hero.videos') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>