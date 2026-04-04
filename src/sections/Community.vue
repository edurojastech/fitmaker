<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  password: '',
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}
</script>

<template>
  <section id="about" class="bg-dark-secondary py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left - Benefits -->
        <div class="space-y-8">
          <div>
            <p class="text-neon-red font-montserrat font-bold text-lg uppercase">{{ t('community.title') }}</p>
            <h2 class="heading-md mt-4">{{ t('community.subtitle') }}</h2>
          </div>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="text-3xl">💪</div>
              <div>
                <h3 class="font-montserrat font-bold text-lg">{{ t('community.benefit1') }}</h3>
                <p class="text-gray-400 mt-1">{{ t('community.benefit1Desc') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl">👥</div>
              <div>
                <h3 class="font-montserrat font-bold text-lg">{{ t('community.benefit2') }}</h3>
                <p class="text-gray-400 mt-1">{{ t('community.benefit2Desc') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl">📊</div>
              <div>
                <h3 class="font-montserrat font-bold text-lg">{{ t('community.benefit3') }}</h3>
                <p class="text-gray-400 mt-1">{{ t('community.benefit3Desc') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl">🎁</div>
              <div>
                <h3 class="font-montserrat font-bold text-lg">{{ t('community.benefit4') }}</h3>
                <p class="text-gray-400 mt-1">{{ t('community.benefit4Desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Signup Form -->
        <div class="card">
          <h3 class="text-2xl font-montserrat font-bold mb-6">{{ t('community.createAccount') }}</h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.name') }}</label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="t('common.name')"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.email') }}</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="t('common.email')"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.password') }}</label>
              <input
                v-model="formData.password"
                type="password"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="t('common.password')"
              />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-primary w-full mt-6">
              {{ t('common.signup') }}
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-dark-tertiary"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-dark-secondary text-gray-400">{{ t('community.orContinueWith') }}</span>
            </div>
          </div>

          <!-- Google Button -->
          <button class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg hover:border-neon-red transition-colors font-bold flex items-center justify-center gap-2">
            <span>🔵</span> {{ t('community.google') }}
          </button>

          <!-- Terms -->
          <p class="text-xs text-gray-400 text-center mt-4" v-html="t('community.agreeTerms')">
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
