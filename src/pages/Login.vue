<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { translations } from '../constants'
import Header from '../components/Header.vue'

const { login, common } = translations
const router = useRouter()

const formData = ref({
  email: '',
  password: '',
})

const isLoading = ref(false)
const errorMessage = ref('')
const showPassword = ref(false)

const handleLogin = async () => {
  errorMessage.value = ''

  // Validação básica
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = login.fillFields
    return
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    errorMessage.value = login.invalidEmail
    return
  }

  isLoading.value = true

  try {
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Salvar no localStorage (mock)
    localStorage.setItem('user', JSON.stringify({
      email: formData.value.email,
      name: formData.value.email.split('@')[0],
    }))

    // Redirecionar para home
    router.push('/')
  } catch (error) {
    errorMessage.value = login.error
  } finally {
    isLoading.value = false
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="min-h-screen bg-dark-primary text-white">
    <Header />

    <div class="h-screen pt-28 pb-20 flex items-center justify-center relative overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'); background-size: cover; background-position: center; background-attachment: fixed;">
      <!-- Background Overlay -->
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(229,57,53,0.3) 100%);"></div>
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>

      <div class="max-w-md w-full px-4 relative z-10 max-h-[calc(100vh-160px)] overflow-y-auto">
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
            <h1 class="heading-sm mb-2">{{ login.title }}</h1>
            <p class="text-gray-400">{{ login.subtitle }}</p>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p class="text-red-400 text-sm">{{ errorMessage }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="space-y-4">
            <!-- Email -->
            <div>
              <label class="block text-sm font-bold mb-2">{{ common.email }}</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                :placeholder="login.emailPlaceholder"
              />
            </div>

            <!-- Password -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-sm font-bold">{{ common.password }}</label>
                <a href="#" class="text-neon-red hover:text-neon-orange text-xs font-bold transition-colors">
                  {{ login.forgotPassword }}
                </a>
              </div>
              <div class="relative">
                <input
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:border-neon-red transition-colors"
                  :placeholder="login.passwordPlaceholder"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                </button>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                class="w-4 h-4 accent-neon-red cursor-pointer"
              />
              <label for="rememberMe" class="text-sm text-gray-400 cursor-pointer">
                {{ login.rememberMe }}
              </label>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? login.loading : login.button }}
            </button>
          </form>

          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-dark-tertiary"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-dark-secondary text-gray-400">{{ login.orContinueWith }}</span>
            </div>
          </div>

          <!-- Social Buttons -->
          <div class="grid grid-cols-2 gap-3">
            <button class="px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg hover:border-neon-red transition-colors font-bold flex items-center justify-center gap-2">
              <span>📘</span> Facebook
            </button>
            <button class="px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg hover:border-neon-red transition-colors font-bold flex items-center justify-center gap-2">
              <span>🔵</span> Google
            </button>
          </div>

          <!-- Signup Link -->
          <p class="text-center mt-8 text-gray-400">
            {{ login.noAccount }}
            <router-link to="/signup" class="text-neon-red hover:text-neon-orange font-bold transition-colors">
              {{ login.signupLink }}
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
