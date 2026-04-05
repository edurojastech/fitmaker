<script setup lang="ts">
import { ref, computed } from 'vue'
import { translations } from '../constants'

const { plans: plansText, common } = translations
const isAnnual = ref(false)

const plans = computed(() => [
  {
    name: plansText.beginner,
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      plansText.feature1,
      plansText.feature2,
      plansText.feature3,
      plansText.feature4,
      plansText.feature5,
    ],
    highlight: false,
  },
  {
    name: plansText.pro,
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      `${plansText.beginner} +`,
      plansText.feature6,
      plansText.feature7,
      plansText.feature8,
      plansText.feature9,
    ],
    highlight: false,
  },
  {
    name: plansText.custom,
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: [
      `${plansText.pro} +`,
      plansText.feature10,
      plansText.feature11,
      plansText.feature12,
      plansText.feature13,
      plansText.feature14,
    ],
    highlight: true,
  },
])
</script>

<template>
  <section id="plans" class="bg-dark-primary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ plansText.title }}</p>
        <h2 class="heading-md mt-4">{{ plansText.subtitle }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ plansText.description }}
        </p>

        <!-- Toggle Monthly/Annual -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <span :class="!isAnnual ? 'text-white font-bold' : 'text-gray-400'">{{ plansText.monthly }}</span>
          <button
            @click="isAnnual = !isAnnual"
            class="relative w-14 h-7 bg-dark-secondary rounded-full border border-dark-tertiary transition-all duration-300"
          >
            <div
              :class="[
                'absolute w-6 h-6 bg-gradient-red rounded-full transition-all duration-300 top-0.5',
                isAnnual ? 'right-0.5' : 'left-0.5',
              ]"
            ></div>
          </button>
          <span :class="isAnnual ? 'text-white font-bold' : 'text-gray-400'">{{ plansText.annual }} <span class="text-neon-red">{{ plansText.discount }}</span></span>
        </div>
      </div>

      <!-- Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'card relative transition-all duration-300 flex flex-col',
            plan.highlight ? 'md:scale-105 glow-border' : '',
          ]"
        >
          <!-- Highlight Badge -->
          <div v-if="plan.highlight" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-red text-white px-4 py-1 rounded-full text-sm font-montserrat font-bold uppercase">
              {{ plansText.mostPopular }}
            </span>
          </div>

          <!-- Plan Name -->
          <h3 class="text-2xl font-montserrat font-bold mt-4">{{ plan.name }}</h3>

          <!-- Price -->
          <div class="mt-6 mb-8">
            <span class="text-5xl font-montserrat font-bold text-neon-red">
              ${{ isAnnual ? plan.yearlyPrice : plan.monthlyPrice }}
            </span>
            <span class="text-gray-400 ml-2">/{{ isAnnual ? plansText.annual.toLowerCase() : plansText.monthly.toLowerCase() }}</span>
          </div>

          <!-- CTA Button -->
          <button
            :class="[
              'font-montserrat font-bold py-3 px-6 rounded-lg mb-8 transition-all duration-300 uppercase',
              plan.highlight
                ? 'bg-gradient-red text-white hover:shadow-glow-lg'
                : 'border border-neon-red text-neon-red hover:bg-neon-red hover:text-white',
            ]"
          >
            {{ common.chooseThisPlan }}
          </button>

          <!-- Features List -->
          <div class="space-y-3 flex-grow">
            <div
              v-for="(feature, index) in plan.features"
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="text-neon-orange mt-0.5">✓</span>
              <span class="text-gray-300 text-sm">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>