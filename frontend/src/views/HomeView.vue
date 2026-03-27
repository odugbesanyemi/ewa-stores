<template>
  <main class="bg-[#0F1121] text-[#F4EAD5] overflow-x-hidden" @mousemove="handleMouseMove">
    <!-- Liquid Cursor Canvas -->
    <canvas ref="trailCanvas" class="fixed inset-0 pointer-events-none z-50"></canvas>

    <!-- Reactive Adire Background Pattern -->
    <div 
      class="fixed inset-0 opacity-[0.03] pointer-events-none z-0 transition-transform duration-700 ease-out"
      :style="{ transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px) scale(1.1)` }"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="adire-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 5L95 50L50 95L5 50Z" fill="none" stroke="currentColor" stroke-width="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#adire-pattern)" />
      </svg>
    </div>

    <section class="relative min-h-screen flex flex-col lg:flex-row overflow-hidden pt-20">
      <div class="lg:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 z-10">
        <div 
          class="space-y-8 max-w-xl transition-transform duration-300 ease-out"
          :style="{ transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }"
        >
          <p class="text-[#C25E2E] font-bold text-xs tracking-[0.4em] uppercase">Est. 2024 • Lagos</p>
          <h1 class="text-7xl md:text-9xl font-headline font-bold leading-[0.85] tracking-tighter">
            Modern <br/><span class="text-outline">Ancestry.</span>
          </h1>
          <p class="text-lg text-[#F4EAD5]/70 font-body leading-relaxed">
            EWA is a dialogue between traditional Nigerian craftsmanship and contemporary minimalism. Every thread tells a story of heritage.
          </p>
          <div class="flex gap-6 pt-4">
            <button 
              @click="$router.push('/collections')" 
              class="group flex items-center gap-2 px-10 py-5 bg-[#C25E2E] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-all shadow-2xl shadow-[#C25E2E]/20"
            >
              Shop Collection
              <span class="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </button>
            <button class="flex items-center gap-2 px-10 py-5 border border-[#F4EAD5]/20 text-[#F4EAD5] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#F4EAD5]/5 transition-all">
              Editorial
              <span class="material-symbols-outlined text-sm hover:rotate-45 transition-transform">north_east</span>
            </button>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 relative h-[70vh] lg:h-screen p-8 md:p-20">
        <div 
          class="relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 ease-out shadow-2xl"
          :style="{ transform: `perspective(1000px) rotateY(${mousePos.x * 0.01}deg) rotateX(${mousePos.y * -0.01}deg)` }"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3iuljabmRyBtQVPLfm67v9Qqz0YMze3b5al4znHsQY-2FVfzxRJjWqZaZ86xjmJrGlrYMpKfs6PKMutmzKCI5g5LE1mU7VBQ3JhAeafbdWZCygg4xDSJ8h7LTkyuSXIFcP2YZkbhLIsEXbfSBAaC5ahciYlUF23FHtFa9jSlJqlXyMxx98YM8DqIxclR3ENTARuhAUHRZkvSkrZ4Bn9qyOUmY-yNGJubMHSCZaov9xi1ufiUKu2GulvsCKO4wHVscwqotS1eFlGE" 
            alt="EWA Editorial - Okin Sculpted Blazer" 
            class="w-full h-full object-cover scale-110"
          />
          <div class="absolute inset-0 bg-linear-to-t from-[#0F1121]/80 to-transparent"></div>
        </div>
        
        <div 
          class="absolute bottom-14 right-14 bg-white/10 backdrop-blur-xl p-8 border border-white/10 rounded-xl hidden md:block"
          :style="{ transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)` }"
        >
          <p class="text-[10px] text-white uppercase tracking-widest font-bold">Featured Piece</p>
          <p class="text-xl text-white font-headline font-bold">The Okin Blazer</p>
        </div>
      </div>
    </section>

    <section class="py-32 px-8 max-w-screen-2xl mx-auto relative z-10">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-3xl font-headline font-bold uppercase tracking-tight">The Heritage Series</h2>
        <router-link to="/collections" class="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#C25E2E] border-b border-[#C25E2E] pb-1 hover:gap-3 transition-all">
          View All
          <span class="material-symbols-outlined text-xs">arrow_forward</span>
        </router-link>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="product in productStore.allProducts.slice(0, 3)" 
          :key="product.id" 
          class="group cursor-pointer relative" 
          @click="$router.push(`/product/${product.id}`)"
        >
          <div class="aspect-3/4 overflow-hidden rounded-xl bg-white/5 mb-6">
            <img :src="product.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <h3 class="text-xl font-headline font-semibold group-hover:text-[#C25E2E] transition-colors">{{ product.name }}</h3>
          <p class="text-sm text-[#F4EAD5]/50 mt-1 font-medium italic">₦{{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';
import { useProductStore } from '../stores/useProductStore';

const productStore = useProductStore();
const mousePos = reactive({ x: 0, y: 0 });
const trailCanvas = ref(null);

let ctx;
let animationFrame;
const points = Array.from({ length: 20 }, () => ({ x: 0, y: 0 }));
const targetPos = { x: 0, y: 0 };

const handleMouseMove = (e) => {
  mousePos.x = e.clientX - window.innerWidth / 2;
  mousePos.y = e.clientY - window.innerHeight / 2;
  
  targetPos.x = e.clientX;
  targetPos.y = e.clientY;
};

const initCanvas = () => {
  const canvas = trailCanvas.value;
  ctx = canvas.getContext('2d');
  
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  
  window.addEventListener('resize', resize);
  resize();
  
  // Initialize points at current mouse position to prevent "jump" on start
  points.forEach(p => {
    p.x = targetPos.x;
    p.y = targetPos.y;
  });
};

const renderTrail = () => {
  ctx.clearRect(0, 0, trailCanvas.value.width, trailCanvas.value.height);
  
  // Update points with spring physics
  points.forEach((p, i) => {
    if (i === 0) {
      p.x += (targetPos.x - p.x) * 0.5;
      p.y += (targetPos.y - p.y) * 0.5;
    } else {
      const prev = points[i - 1];
      p.x += (prev.x - p.x) * 0.35;
      p.y += (prev.y - p.y) * 0.35;
    }
  });

  // Draw the liquid path
  ctx.strokeStyle = '#C25E2E';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#C25E2E';
  
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  
  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  
  ctx.stroke();
  animationFrame = requestAnimationFrame(renderTrail);
};

onMounted(() => {
  initCanvas();
  renderTrail();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>