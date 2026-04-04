<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testimonials = [
  {
    name: t('testimonials.name1'),
    role: t('testimonials.role1'),
    text: t('testimonials.text1'),
    avatar: '👨‍💼',
  },
  {
    name: t('testimonials.name2'),
    role: t('testimonials.role2'),
    text: t('testimonials.text2'),
    avatar: '👩‍🦱',
  },
  {
    name: t('testimonials.name3'),
    role: t('testimonials.role3'),
    text: t('testimonials.text3'),
    avatar: '👨‍🦲',
  },
]
</script>

<template>
  <section class="bg-dark-primary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('testimonials.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('testimonials.subtitle') }}</h2>
      </div>

      <!-- Testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="card"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-neon-orange">⭐</span>
          </div>

          <!-- Text -->
          <p class="text-gray-300 mb-6 italic">{{ testimonial.text }}</p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-dark-tertiary">
            <div class="text-4xl">{{ testimonial.avatar }}</div>
            <div>
              <p class="font-montserrat font-bold">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
