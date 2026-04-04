<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const posts = [
  {
    title: '10 Best Exercises for Home Workouts',
    category: 'Training',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=400&fit=crop',
  },
  {
    title: 'Nutrition Tips for Muscle Building',
    category: 'Nutrition',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
  },
  {
    title: 'Recovery: The Secret to Fitness Success',
    category: 'Wellness',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
  {
    title: 'High-Intensity Interval Training Guide',
    category: 'Training',
    date: 'Mar 8, 2024',
    image: 'https://images.unsplash.com/photo-1552258987-868014432b8d?w=600&h=400&fit=crop',
  },
  {
    title: 'Mental Health Benefits of Exercise',
    category: 'Wellness',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=400&fit=crop',
  },
  {
    title: 'Beginner\'s Guide to Gym Etiquette',
    category: 'Lifestyle',
    date: 'Mar 1, 2024',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
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
          <div class="relative h-48 bg-dark-secondary border-b border-dark-tertiary overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
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
