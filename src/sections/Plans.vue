<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isAnnual = ref(false)

const plans = computed(() => [
  {
    name: t('plans.beginner'),
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      t('plans.feature1'),
      t('plans.feature2'),
      t('plans.feature3'),
      t('plans.feature4'),
      t('plans.feature5'),
    ],
    highlight: false,
  },
  {
    name: t('plans.pro'),
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      `${t('plans.beginner')} +`,
      t('plans.feature6'),
      t('plans.feature7'),
      t('plans.feature8'),
      t('plans.feature9'),
    ],
    highlight: false,
  },
  {
    name: t('plans.custom'),
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: [
      `${t('plans.pro')} +`,
      t('plans.feature10'),
      t('plans.feature11'),
      t('plans.feature12'),
      t('plans.feature13'),
      t('plans.feature14'),
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
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('plans.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('plans.subtitle') }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ t('plans.description') }}
        </p>

        <!-- Toggle Monthly/Annual -->
        <div class="flex items-center justify-center gap-4 mt-8">
          <span :class="!isAnnual ? 'text-white font-bold' : 'text-gray-400'">{{ t('plans.monthly') }}</span>
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
          <span :class="isAnnual ? 'text-white font-bold' : 'text-gray-400'">{{ t('plans.annual') }} <span class="text-neon-red">{{ t('plans.discount') }}</span></span>
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
              {{ t('plans.mostPopular') }}
            </span>
          </div>

          <!-- Plan Name -->
          <h3 class="text-2xl font-montserrat font-bold mt-4">{{ plan.name }}</h3>

          <!-- Price -->
          <div class="mt-6 mb-8">
            <span class="text-5xl font-montserrat font-bold text-neon-red">
              ${{ isAnnual ? plan.yearlyPrice : plan.monthlyPrice }}
            </span>
            <span class="text-gray-400 ml-2">/{{ isAnnual ? t('plans.annual').toLowerCase() : t('plans.monthly').toLowerCase() }}</span>
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
            {{ t('common.chooseThisPlan') }}
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