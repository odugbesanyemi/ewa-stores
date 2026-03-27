<template>
  <main class="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div class="space-y-4">
        <p class="text-primary font-bold text-[10px] tracking-[0.3em] uppercase">Volume 01</p>
        <h1 class="text-6xl font-headline font-bold tracking-tighter">The Harmattan <br/> Chronicles.</h1>
      </div>
      <p class="max-w-sm text-sm text-on-surface-variant leading-relaxed font-medium">
        An exploration of dust, light, and the way silk moves against the dry Sahara winds. Shot on location in the Northern frontiers.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <div class="md:col-span-7 group relative overflow-hidden rounded-xl aspect-[4/5]">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSopL8nTwTBSNQy2UFva6RdKehMurhP0Xm8P3v_S3ksHEWs4E8tQPgXazy2LAsnBHXNbb20X_0yNkKoZn-plFbINZuYtQbIBst9z3zTCbYzAocusHzSjkyofLi3a90KSPra2V0rAUyvbIABU-CuQlqG_TLFEzeYB6woEBeD3tMye369EwoZ3XpXmp2ju57GCa5DGr17jkyJmyfntom-dkGQchbXxE5y66FVglKMFnLLnCw9K-4biUN3HT_6Md7jq2iGiuPX0O-ZUc" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-10">
          <p class="text-white font-headline text-3xl font-bold italic">Sun-drenched Silk</p>
        </div>
      </div>

      <div class="md:col-span-5 space-y-8 md:pt-24">
        <div class="aspect-square bg-surface-container-low rounded-xl overflow-hidden group">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIHQ2ZKVD-9EnKLuskpqFBW_DYNj2C4GAz97qn1gkZWMgmOrjVzjcHYR1IxCBdKLqwlr86GvVCkacr7BKDAHZCncvEZCx6RLMHAJLADwo9yID0Vgs96ZJuCKGjoqEL654pTCMkc7U57HXWHT2oDd-Qq17N2VheRitBMRufxIwm-fdzM7OIRIrpfqZP7bvIgh2FfDrX3o6fxYurJ4NPU5bvF6ciAcZbYKLln8KBB10OK9Gtg32tc9jFK84sO8ahrjaVugCJLwMsSA8" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
        </div>
        <div class="p-6 border-l-2 border-primary">
          <p class="text-xl font-headline italic">"Texture is the memory of the loom."</p>
          <p class="text-[10px] uppercase tracking-widest font-bold mt-4">— Head Weaver, Abeokuta</p>
        </div>
      </div>

      <div class="md:col-span-12 aspect-[21/9] bg-surface-container-low rounded-xl overflow-hidden mt-8 group">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA73I5QDv4x3UTxHwNkJ8Ui9gr2oV1DSA0_kXtkK2ESFv5v6VFLVa-Goo7EG9Bo0vOocrb-zFSIe8e9xMY5OzQ6xLCGDkSr96kUWYPcEBOwEs1gfaRZY2jwXYbDrd7iebi8auM38f3OZgr9ZSlnF39adWFHPoBPVSJ-qUc1ri0I94-g4s3svKKe1gzWGehTP6QfrpIr56OVFSVRhkr5L5F4IQTtb6ag9PbZnDUZmTu7divk6Z8PV4HyhXOGGx7J8OBVYhViCTOnzXQ" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
      </div>

      <div class="md:col-span-4 aspect-[3/4] rounded-xl overflow-hidden">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxVC7Aajt1ssaI-m8l_VTRP8Hv8xYejqCZOEiv5sN5NoOiGfQj5Rb-veKPdv4Z6IWRubD9VFMbxkq-JP6JiAMEoEQylZIzfQPXDPFGnrCJkwpA1ceE0zHK5WMygHLRWwiaVOe9vTPDNf3aafXmobKM6d_2XUre0EG6VmBsnE7WD_UF2tx8z91VjroxvC_u0G8nkZAj5Mk5X8kbZHHWBNnKLghDy8IvYzAU0mDBBf5fadv_F6oAweTDuPg25QYvrRYcy_-CcxuhiEs" class="w-full h-full object-cover" />
      </div>
      <div class="md:col-span-8 aspect-[16/10] rounded-xl overflow-hidden md:-mt-20">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF6TqJHx15y6QTa4QSDOSfSV9l7X35Jo4eZk_NwBGSGsMjC9G8yz8Vc8YxXu8nFQ7ONBhgEB6stM2RDS87pAq_EYgyCS97H1RimJy1aJ3cpJ_PfzNol6Dig_BfgE7ASAgJorupr2Bax9Rovgtv0nwphohTCZP11e91F7q0mTgFfauJW6jZTGPg04z68p3MEqE8hihfRm511bhcJa5cqHuOPFTJkpAJh5gUWKaY3yx4LFJan_Ze4Jc8kGPaLXQiOIe9boZy5z5Up9c" class="w-full h-full object-cover" />
      </div>
    </div>
  </main>
</template>