<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const faqs = [
  {
    question: t('faq.q1'),
    answer: t('faq.a1'),
  },
  {
    question: t('faq.q2'),
    answer: t('faq.a2'),
  },
  {
    question: t('faq.q3'),
    answer: t('faq.a3'),
  },
  {
    question: t('faq.q4'),
    answer: t('faq.a4'),
  },
  {
    question: t('faq.q5'),
    answer: t('faq.a5'),
  },
  {
    question: t('faq.q6'),
    answer: t('faq.a6'),
  },
]

const openAccordion = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  openAccordion.value = openAccordion.value === index ? null : index
}
</script>

<template>
  <section class="bg-dark-primary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('faq.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('faq.subtitle') }}</h2>
        <p class="text-gray-400 mt-4">
          {{ t('faq.description') }}
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-dark-tertiary rounded-lg overflow-hidden hover:border-neon-red transition-all duration-300"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full px-6 py-4 flex items-center justify-between bg-dark-secondary hover:bg-dark-tertiary transition-colors duration-300"
          >
            <span class="font-montserrat font-bold text-lg text-left">{{ faq.question }}</span>
            <span
              :class="[
                'text-neon-red transition-transform duration-300',
                openAccordion === index ? 'transform rotate-180' : '',
              ]"
            >
              ▼
            </span>
          </button>

          <div
            v-if="openAccordion === index"
            class="px-6 py-4 bg-dark-primary border-t border-dark-tertiary text-gray-300"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
