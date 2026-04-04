<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerSections = computed(() => [
  {
    title: t('footer.company'),
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: t('footer.programs'),
    links: ['Weight Loss', 'Muscle Gain', 'Home Fitness', 'Gym Plans'],
  },
  {
    title: t('footer.resources'),
    links: ['Guides', 'Tutorials', 'Community', 'Support'],
  },
  {
    title: t('footer.legal'),
    links: [t('footer.privacyPolicy'), t('footer.termsOfService'), t('footer.cookieSettings'), 'Refund Policy'],
  },
])

const socialLinks = [
  { name: 'Facebook', icon: 'f', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'YouTube', icon: '▶️', url: '#' },
]
</script>

<template>
  <footer class="bg-dark-primary border-t border-dark-tertiary py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
              <span class="font-montserrat font-bold text-white">FM</span>
            </div>
            <span class="text-xl font-montserrat font-bold">FitMaker</span>
          </div>
          <p class="text-gray-400 text-sm mb-6">
            {{ t('common.slogan') }}
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :title="social.name"
              class="w-10 h-10 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:border-neon-red hover:bg-dark-tertiary transition-all duration-300"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div
          v-for="section in footerSections"
          :key="section.title"
          class="lg:col-span-1"
        >
          <h4 class="font-montserrat font-bold mb-4">{{ section.title }}</h4>
          <ul class="space-y-2">
            <li
              v-for="link in section.links"
              :key="link"
            >
              <a href="#" class="text-gray-400 hover:text-neon-red transition-colors duration-300 text-sm">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-dark-tertiary py-8"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row items-center justify-between">
        <p class="text-gray-400 text-sm">
          {{ t('footer.copyright') }}
        </p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-neon-red transition-colors text-sm">
            {{ t('footer.privacyPolicy') }}
          </a>
          <a href="#" class="text-gray-400 hover:text-neon-red transition-colors text-sm">
            {{ t('footer.termsOfService') }}
          </a>
          <a href="#" class="text-gray-400 hover:text-neon-red transition-colors text-sm">
            {{ t('footer.cookieSettings') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
