<template>
  <div class="min-h-screen bg-surface font-body text-on-surface antialiased">
    <AppNavbar />
    
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component 
          v-if="slotProps && slotProps.Component"
          :is="slotProps.Component" 
          :key="$route.path" 
        />
      </transition>
    </router-view>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* Smooth editorial fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>