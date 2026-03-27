<template>
  <main class="bg-surface text-on-surface pt-32 pb-24 px-6 md:px-8 max-w-screen-2xl mx-auto min-h-screen">
    <section class="mb-16 md:mb-20">
      <h1 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-5xl md:text-7xl font-headline font-bold text-primary mb-6 tracking-tight"
      >
        The Heritage Edit
      </h1>
      <p class="text-lg max-w-2xl text-on-surface/70 font-body leading-relaxed">
        A curation of Nigerian ancestral craftsmanship reimagined for the contemporary silhouette. From the structured weave of Aso Oke to the fluid indigo of Adire.
      </p>
    </section>

    <section class="mb-16 bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-10 items-start md:items-center shadow-sm backdrop-blur-md">
      <div class="flex flex-col gap-3">
        <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">Category</span>
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="productStore.setFilter(cat)"
            :class="[
              'px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300',
              productStore.filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/10 text-on-surface hover:bg-white/20'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-3 ml-auto">
        <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">Sort By</span>
        <select class="bg-midnight border-none text-xs font-bold focus:ring-0 cursor-pointer uppercase tracking-widest text-on-surface ring-1 ring-white/10 rounded-lg px-4 py-2">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10">
      <div 
        v-for="(product, index) in productStore.filteredProducts" 
        :key="product.id" 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        :class="[
          'group cursor-pointer transition-all duration-500',
          index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
        ]"
        @click="$router.push(`/product/${product.id}`)"
      >
        <div 
          class="relative overflow-hidden rounded-xl bg-white/5"
          :class="index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'"
        >
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div v-if="index === 0" class="absolute top-6 left-6 bg-white/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
            <span class="text-[9px] font-bold uppercase tracking-widest text-on-surface">Limited Edition</span>
          </div>
        </div>

        <div class="mt-6 flex justify-between items-start">
          <div>
            <h3 class="text-xl md:text-2xl font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">
              {{ product.name }}
            </h3>
            <p class="text-xs text-on-surface-variant font-medium mt-1 uppercase tracking-widest">
              {{ product.category }} • {{ product.color }}
            </p>
          </div>
          <span class="text-lg md:text-xl font-headline font-bold text-primary">
            ₦{{ product.price.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="productStore.filteredProducts.length === 0" class="py-32 text-center">
      <p class="text-outline uppercase tracking-widest text-sm font-bold">No pieces found in this category.</p>
      <button @click="productStore.setFilter('All Pieces')" class="mt-4 text-primary underline text-xs font-bold uppercase tracking-widest">Clear Filters</button>
    </div>
  </main>
</template>

<script setup>
import { useProductStore } from '../stores/useProductStore';

const productStore = useProductStore();
const categories = ['All Pieces', 'Aso Oke', 'Adire', 'Modern'];
</script>