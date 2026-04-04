<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '../components/Header.vue'

const router = useRouter()
const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const acceptTerms = ref(false)

const handleSignup = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validação básica
  if (!formData.value.name || !formData.value.email || !formData.value.password || !formData.value.confirmPassword) {
    errorMessage.value = t('signup.fillFields')
    return
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    errorMessage.value = t('signup.invalidEmail')
    return
  }

  // Validação de senha
  if (formData.value.password.length < 8) {
    errorMessage.value = t('signup.passwordTooShort')
    return
  }

  if (formData.value.password !== formData.value.confirmPassword) {
    errorMessage.value = t('signup.passwordMismatch')
    return
  }

  if (!acceptTerms.value) {
    errorMessage.value = t('signup.acceptTerms')
    return
  }

  isLoading.value = true

  try {
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Salvar no localStorage (mock)
    localStorage.setItem('user', JSON.stringify({
      name: formData.value.name,
      email: formData.value.email,
    }))

    successMessage.value = t('signup.success')

    // Redirecionar para home
    setTimeout(() => {
      router.push('/')
    }, 1500)
  } catch (error) {
    errorMessage.value = t('signup.error')
  } finally {
    isLoading.value = false
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
</script>

<template>
  <div class="min-h-screen bg-dark-primary text-white">
    <Header />

    <div class="min-h-screen pt-28 pb-20 flex items-center justify-center relative overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none"></div>

      <div class="max-w-md w-full px-4 relative z-10">
        <!-- Card -->
        <div class="card">
          <!-- Logo -->
          <div class="flex items-center justify-center gap-2 mb-8">
            <div class="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
              <span class="font-montserrat font-bold text-white">FM</span>
            </div>
            <span class="text-2xl font-montserrat font-bold">FitMaker</span>
          </div>

          <!-- Title -->
          <div class="text-center mb-8">
            <h1 class="heading-sm mb-2">{{ t('signup.title') }}</h1>
            <p class="text-gray-400">{{ t('signup.subtitle') }}</p>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p class="text-red-400 text-sm">{{ errorMessage }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p class="text-green-400 text-sm">{{ successMessage }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSignup" class="space-y-4">
            <!-- Name -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.name') }}</label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="t('signup.namePlaceholder')"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.email') }}</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="t('signup.emailPlaceholder')"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('common.password') }}</label>
              <div class="relative">
                <input
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                  :placeholder="t('signup.passwordPlaceholder')"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-1">{{ t('signup.passwordHint') }}</p>
            </div>

            <!-- Confirm Password -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ t('signup.confirmPassword') }}</label>
              <div class="relative">
                <input
                  v-model="formData.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                  :placeholder="t('signup.confirmPasswordPlaceholder')"
                />
                <button
                  type="button"
                  @click="toggleConfirmPasswordVisibility"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {{ showConfirmPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
            </div>

            <!-- Accept Terms -->
            <div class="flex items-start gap-2">
              <input
                v-model="acceptTerms"
                type="checkbox"
                id="acceptTerms"
                class="w-4 h-4 accent-neon-red cursor-pointer mt-1"
              />
              <label for="acceptTerms" class="text-xs text-gray-400 cursor-pointer">
                {{ t('signup.acceptTerms') }}
              </label>
            </div>

            <!-- Signup Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? t('signup.loading') : t('signup.button') }}
            </button>
          </form>

          <!-- Login Link -->
          <p class="text-center mt-8 text-gray-400">
            {{ t('signup.hasAccount') }}
            <router-link to="/login" class="text-neon-red hover:text-neon-orange font-bold transition-colors">
              {{ t('signup.loginLink') }}
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
