<template>
  <main class="bg-surface text-on-surface pt-32 pb-24 px-6 md:px-12 min-h-screen">
    <div class="max-w-7xl mx-auto">
    <div class="mb-16">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-headline">Your Bag</h1>
      <p class="text-on-surface/60 font-body">Refined pieces curated for your journey.</p>
    </div>

    <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div class="lg:col-span-7 space-y-10">
        <div v-for="item in cartStore.items" :key="`${item.id}-${item.size}`" class="flex flex-col md:flex-row gap-8 items-start group pb-10 border-b border-outline-variant/20">
          <div class="w-full md:w-40 aspect-3/4 overflow-hidden bg-surface-container-low rounded-lg">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
          </div>
          
          <div class="flex-1 space-y-4 w-full">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-bold font-headline uppercase tracking-tight">{{ item.name }}</h3>
                <p class="text-[10px] font-bold uppercase tracking-widest text-outline mt-1">{{ item.category }} / {{ item.size }}</p>
              </div>
              <p class="text-lg font-bold text-primary">₦{{ (item.price * item.quantity).toLocaleString() }}</p>
            </div>

            <div class="flex items-center gap-8 mt-4">
              <div class="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-full">
                <button @click="cartStore.updateQty(item.id, item.size, -1)" class="hover:text-primary"><span class="material-symbols-outlined text-sm">remove</span></button>
                <span class="text-xs font-bold">{{ item.quantity }}</span>
                <button @click="cartStore.updateQty(item.id, item.size, 1)" class="hover:text-primary"><span class="material-symbols-outlined text-sm">add</span></button>
              </div>
              <button @click="cartStore.removeItem(item.id, item.size)" class="text-[10px] uppercase tracking-widest font-bold text-outline hover:text-error transition-colors flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">delete</span> Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <aside class="lg:col-span-5 bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl sticky top-32 backdrop-blur-md">
        <h2 class="text-2xl font-bold font-headline mb-8 tracking-tight uppercase">Summary</h2>
        <div class="space-y-6 mb-10">
          <div class="flex justify-between text-sm uppercase tracking-widest font-bold text-on-surface/70">
            <span>Subtotal</span>
            <span>₦{{ cartStore.subtotal.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between text-sm uppercase tracking-widest font-bold text-on-surface/70">
            <span>VAT (7.5%)</span>
            <span>₦{{ cartStore.vat.toLocaleString() }}</span>
          </div>
          <div class="pt-6 border-t border-outline-variant/30 flex justify-between items-end">
            <span class="text-xl font-bold font-headline uppercase">Total</span>
            <div class="text-right">
              <span class="text-3xl font-bold text-primary">₦{{ cartStore.total.toLocaleString() }}</span>
            </div>
          </div>
        </div>
        
        <button class="w-full py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
          Secure Checkout
        </button>
        <button @click="$router.push('/collections')" class="w-full py-5 text-on-surface text-[10px] font-bold uppercase tracking-widest hover:text-primary">
          Continue Shopping
        </button>
      </aside>
    </div>

    <div v-else class="py-32 text-center space-y-6">
      <span class="material-symbols-outlined text-outline-variant text-4xl" style="font-size:120px ;">Shopping_bag</span>
      <p class="text-outline uppercase tracking-widest text-sm font-bold">Your bag is currently empty.</p>
      <button @click="$router.push('/collections')" class="px-10 py-4 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded-sm">Explore Collections</button>
    </div>
    </div>
  </main>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';
const cartStore = useCartStore();
</script>