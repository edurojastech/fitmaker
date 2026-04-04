<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const posts = [
  {
    title: '10 Best Exercises for Home Workouts',
    category: 'Training',
    date: 'Mar 15, 2024',
    image: '🏠',
  },
  {
    title: 'Nutrition Tips for Muscle Building',
    category: 'Nutrition',
    date: 'Mar 12, 2024',
    image: '🥗',
  },
  {
    title: 'Recovery: The Secret to Fitness Success',
    category: 'Wellness',
    date: 'Mar 10, 2024',
    image: '😴',
  },
  {
    title: 'High-Intensity Interval Training Guide',
    category: 'Training',
    date: 'Mar 8, 2024',
    image: '⚡',
  },
  {
    title: 'Mental Health Benefits of Exercise',
    category: 'Wellness',
    date: 'Mar 5, 2024',
    image: '🧠',
  },
  {
    title: 'Beginner\'s Guide to Gym Etiquette',
    category: 'Lifestyle',
    date: 'Mar 1, 2024',
    image: '🏋️',
  },
]
</script>

<template>
  <section class="bg-dark-primary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('blog.title') }}</p>
        <h2 class="heading-md mt-4">{{ t('blog.subtitle') }}</h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ t('blog.description') }}
        </p>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="post in posts"
          :key="post.title"
          class="group overflow-hidden rounded-2xl border border-dark-tertiary hover:border-neon-red transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative h-48 bg-dark-secondary border-b border-dark-tertiary flex items-center justify-center overflow-hidden">
            <div class="text-6xl group-hover:scale-110 transition-transform duration-300">{{ post.image }}</div>
            <div class="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-neon-orange font-bold text-xs uppercase">{{ post.category }}</span>
              <span class="text-gray-500 text-xs">{{ post.date }}</span>
            </div>

            <h3 class="font-montserrat font-bold text-lg line-clamp-2 mb-4">{{ post.title }}</h3>

            <button class="text-neon-red hover:text-neon-orange transition-colors font-bold text-sm">
              {{ t('blog.readMore') }} →
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
