<template>
  <main class="bg-surface text-on-surface pt-40 pb-24 px-6 md:px-8 min-h-screen">
    <div class="max-w-screen-xl mx-auto">
    <div class="max-w-3xl mx-auto text-center space-y-12">
      <p class="text-primary font-bold text-[10px] tracking-[0.4em] uppercase">The Philosophy</p>
      <h1 
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
        class="text-5xl md:text-7xl font-headline font-bold leading-tight"
      >
        A Dialogue with <br/> <span class="text-outline">Tradition.</span>
      </h1>
      
      <div class="aspect-[16/7] bg-white/5 rounded-2xl overflow-hidden my-16 shadow-2xl">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ZGggZ3XyRYkFuILgVuVi4i7VvweqylF_9n0RUbsgmx5unU5UIKWZPSWPuO9ZPP9kIFpQxO_R3W3Lwa2i54DQqpINcKJ0MXky7GVN1MbrZ34GhfgbEJ0QRLqfLNb-oteazK-akcVaGU8F4KcB-7X8LQWC3YEBn7hKI32cOmm-hR2W3esdn7gMC-Q_BZ6i4ViILSeAuZ0KMNZocHqsbvqzX_q64qWUykU0XeW9Zez0IXxjTibUF7gpRxAkx6sA-dFLjqrz2FntHKM" 
          alt="Artisan hands" 
          class="w-full h-full object-cover"
        />
      </div>

      <div class="space-y-8 text-lg text-on-surface/80 font-body leading-relaxed text-left">
        <p>
          Founded in Lagos, EWA was born from a singular vision: to preserve the intricate artistry of West African textiles while translating them into a silhouette that speaks to the global, modern curator.
        </p>
        <p>
          We believe that "slow fashion" is an ancestral practice. Each piece of <strong>Aso-Oke</strong> is hand-loomed on traditional wooden frames, and every <strong>Adire</strong> motif is hand-dyed in the ancient pits of Abeokuta using organic indigo.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-outline-variant/20">
        <div v-for="stat in values" :key="stat.title" class="space-y-2">
          <h3 class="text-2xl font-headline font-bold text-primary">{{ stat.title }}</h3>
          <p class="text-[10px] uppercase tracking-widest font-bold text-outline">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
    </div>
  </main>
</template>

<script setup>
const values = [
  { title: '100%', desc: 'Artisan Crafted' },
  { title: 'Lagos', desc: 'Design Atelier' },
  { title: 'Ethical', desc: 'Sourcing' }
];
</script>