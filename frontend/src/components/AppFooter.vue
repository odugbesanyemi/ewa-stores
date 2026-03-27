<template>
  <footer class="w-full border-t border-outline-variant/20 bg-neutral-50 dark:bg-neutral-950">
    <div class="flex flex-col md:flex-row justify-between items-center w-full px-8 md:px-12 py-16 gap-10 max-w-screen-2xl mx-auto">
      
      <div class="flex flex-col gap-3 text-center md:text-left">
        <div class="text-xl font-bold text-neutral-900 dark:text-neutral-50 font-headline uppercase tracking-[0.2em]">
          EWA
        </div>
        <p class="text-[10px] font-medium text-neutral-500 uppercase tracking-widest">
          © {{ new Date().getFullYear() }} EWA. Crafted in Nigeria.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8 md:gap-12">
        <a v-for="link in footerLinks" :key="link" href="#" class="text-[10px] font-bold text-neutral-500 hover:text-primary transition-colors uppercase tracking-[0.15em]">
          {{ link }}
        </a>
      </div>

      <div class="flex gap-8">
        <span class="material-symbols-outlined text-neutral-400 hover:text-primary cursor-pointer transition-colors">language</span>
        <span class="material-symbols-outlined text-neutral-400 hover:text-primary cursor-pointer transition-colors">account_circle</span>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
const footerLinks = ['Sustainability', 'Shipping & Returns', 'Contact', 'Privacy'];
</script>