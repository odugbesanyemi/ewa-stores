<template>
  <main v-if="product" class="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
      
      <div class="lg:col-span-7 space-y-8">
        <div class="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
            <img :src="product.image" class="w-full h-full object-cover opacity-80" />
          </div>
          <div class="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center p-8 text-center border border-outline-variant/10">
            <p class="text-[10px] uppercase tracking-widest font-bold text-outline">Hand-woven Texture Detail</p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 lg:sticky lg:top-40 space-y-10">
        <div class="space-y-4">
          <p class="text-primary font-bold text-[10px] tracking-[0.3em] uppercase">{{ product.category }} Collection</p>
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-on-surface leading-tight">{{ product.name }}</h1>
          <p class="text-2xl font-medium text-on-surface-variant font-body">₦{{ product.price.toLocaleString() }}</p>
        </div>

        <p class="text-on-surface-variant leading-relaxed text-lg">
          {{ product.description }}
        </p>

        <div class="space-y-4">
          <label class="text-[10px] font-bold uppercase tracking-widest text-on-surface">Select Size</label>
          <div class="flex flex-wrap gap-3">
            <button 
              v-for="size in sizes" 
              :key="size"
              @click="selectedSize = size"
              :class="[
                'px-6 py-3 text-xs font-bold transition-all uppercase tracking-widest rounded-md border',
                selectedSize === size ? 'bg-primary border-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface border-outline-variant/30 text-on-surface hover:border-primary'
              ]"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <button 
          @click="handleAddToBag"
          class="w-full py-5 bg-primary text-on-primary text-xs font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-primary-container transition-all active:scale-[0.98] shadow-xl shadow-primary/10"
        >
          Add to Bag
        </button>

        <div class="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
          <div v-for="(val, key) in product.features" :key="key" class="space-y-1">
            <h4 class="text-[10px] font-bold uppercase tracking-widest text-outline">{{ key }}</h4>
            <p class="text-sm font-medium">{{ val }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/useProductStore';
import { useCartStore } from '../stores/useCartStore';

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = computed(() => productStore.allProducts.find(p => p.id === parseInt(route.params.id)));
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const selectedSize = ref('M');

const handleAddToBag = () => {
  cartStore.addToBag(product.value, selectedSize.value);
  // Optional: Trigger a success notification here
};
</script>