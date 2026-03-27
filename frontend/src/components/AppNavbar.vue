<template>
  <nav 
    :class="[
      'w-full z-50 transition-all duration-500 ease-in-out border-b border-outline-variant/10',
      isAtTop ? 'relative bg-white dark:bg-neutral-900' : 'fixed top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md',
      isHidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <div class="flex justify-between items-center w-full px-6 md:px-8 py-5 max-w-screen-2xl mx-auto">
      
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden hover:opacity-70 transition-opacity">
        <span class="material-symbols-outlined text-on-surface">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </button>

      <router-link to="/" class="hover:opacity-80 transition-opacity">
        <img src="/icon/ewa_logo.png" alt="EWA Logo" class="h-6 md:h-8 w-auto object-contain dark:invert" />
      </router-link>

      <div class="hidden md:flex gap-10 items-center">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors font-label uppercase text-[10px] tracking-[0.15em] font-bold"
          active-class="text-primary border-b border-primary pb-1"
        >
          {{ link.name }}
        </router-link>
      </div>

      <div class="flex items-center gap-5">
        <button class="hover:text-primary transition-colors hidden sm:block">
          <span class="material-symbols-outlined text-on-surface">search</span>
        </button>
        
        <button class="hover:text-primary transition-colors hidden sm:block">
          <span class="material-symbols-outlined text-on-surface">person</span>
        </button>

        <button class="hover:text-primary transition-colors hidden sm:block">
          <span class="material-symbols-outlined text-on-surface">favorite</span>
        </button>

        <router-link to="/cart" class="relative hover:text-primary transition-colors group">
          <span class="material-symbols-outlined text-on-surface">shopping_bag</span>
          <span 
            v-if="cartStore.count > 0"
            class="absolute -top-1 -right-1 bg-primary text-on-primary text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse"
          >
            {{ cartStore.count }}
          </span>
        </router-link>
      </div>
    </div>

    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 top-18 bg-white z-40 md:hidden p-8 flex flex-col gap-8">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          @click="isMenuOpen = false"
          class="text-2xl font-headline font-bold uppercase tracking-widest text-on-surface"
        >
          {{ link.name }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/useCartStore';

const cartStore = useCartStore();
const isMenuOpen = ref(false);
const isAtTop = ref(true);
const isHidden = ref(false);
const lastScrollPosition = ref(0);

const handleScroll = () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // Determine if we are at the very top of the page
  isAtTop.value = currentScroll <= 0;

  // Hide navbar when scrolling down, show when scrolling up
  if (currentScroll > lastScrollPosition.value && currentScroll > 120) {
    // Scrolling Down
    if (!isMenuOpen.value) isHidden.value = true;
  } else {
    // Scrolling Up
    isHidden.value = false;
  }
  
  lastScrollPosition.value = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navLinks = [
  { name: 'Collections', path: '/collections' },
  { name: 'New Arrivals', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Editorial', path: '/editorial' }
];
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>