<template>
  <div class="bg-coffee-dark overflow-hidden" id="hero">
    <div class="text-white relative  z-0">
      <div class=" mx-auto px-6 text-center  relative lg:pt-[100px] md:pt-[50px] pt-[50px] z-10 md:min-h-screen h-[600px] ">
        <img
          src="/cofee.png"
          class="absolute bottom-0 left-1/2 -translate-x-1/2  pointer-events-none md:hidden block"
           :style="{ opacity: 1 - scrollY / 300 }"
        />
        <h1 class="md:text-[100px] font-extrabold  leading-tight drop-shadow-lg  z-20"  
        :style="{ transform: `translate(0%, ${scrollY * 1}px)`,opacity : 1 - scrollY / 600  }"
        >Brewed to Perfection</h1>
        <p class="text-lg mb-8 "
        :style="{ transform: `translate(0%, ${scrollY * 1}px)`,opacity : 1 - scrollY / 600 }"
        >
          Freshly roasted beans. Handcrafted with love.
        </p>
      </div>

      <img
        src="/smoke.png"
        class=" w-auto absolute top-[300px] -left-[600px]   z-0"
          :style="{
            transform: `translate(${-200 - scrollY * 1}px, -${scrollY * 0.3}px)`
          }"
      />
      <img
        src="/smoke.png"
        class=" w-auto absolute  top-[300px] -right-[600px] z-0"
        :style="{
            transform: `translate(${scrollY * 1}px, -${scrollY * 0.3}px)`
          }"
      />
      <div class="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
      <img
        src="/cofee.png"
        :style="{ opacity: 1 - scrollY / 300 }"
        class="w-auto md:h-[600px]"
        data-aos="zoom-in"
      />
    </div>
    </div>

    
    <section class="bg-coffee-dark py-20 min-h-screen">
      <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 class="text-3xl md:text-[30px] text-white mb-12  font-extrabold  leading-tight">Sip Something Special</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-left" data-aos="fade-in">
          <div class=" rounded-xl  p-6 hover:shadow-2xl transition" >
            <img
              src="/coffee.png"
              alt="Our Coffee Story"
              class="md:h-[200px] h-[100px]  mx-auto mb-3"
            />
            <h3 class="md:text-xl text-base font-semibold text-white mb-2 text-center">Espresso Supreme</h3>
            <p class="text-gray-400 text-center md:text-base text-sm">Bold, rich, and silky smooth.</p>
          </div>

          <div class=" rounded-xl  p-6 hover:shadow-2xl transition" >
            <img
              src="/coffee.png"
              alt="Our Coffee Story"
              class="md:h-[200px] h-[100px]  mx-auto mb-3"
            />
            <h3 class="md:text-xl text-base font-semibold text-white mb-2 text-center">Espresso Supreme</h3>
            <p class=" text-gray-400 text-center md:text-base text-sm">Bold, rich, and silky smooth.</p>
          </div>

          <div class=" rounded-xl  p-6 hover:shadow-2xl transition" >
            <img
              src="/coffee.png"
              alt="Our Coffee Story"
              class="md:h-[200px] h-[100px]  mx-auto mb-3"
            />
          <h3 class="md:text-xl text-base font-semibold text-white mb-2 text-center">Espresso Supreme</h3>
          <p class="text-gray-400 text-center md:text-base text-sm">Bold, rich, and silky smooth.</p>
          </div>

          <div class=" rounded-xl  p-6 hover:shadow-2xl transition" >
            <img
              src="/coffee.png"
              alt="Our Coffee Story"
              class="md:h-[200px] h-[100px] mx-auto mb-3"
            />
            <h3 class="md:text-xl text-base font-semibold text-white mb-2 text-center">Espresso Supreme</h3>
          <p class="text-gray-400 text-center md:text-base text-sm">Bold, rich, and silky smooth.</p>
          </div>
        </div>

        <div class="mt-12">
          <NuxtLink
            to="/menu"
            class="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-coffee-darker transition text-sm"
          >
            View Full Menu
          </NuxtLink>
        </div>
      </div>
    </section>


  <section class="min-h-screen bg-gradient-to-br from-coffee-dark mx-auto to-coffee-light text-white py-16 md:py-24 relative overflow-hidden">
    <!-- Background Accent -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div data-aos="fade-right">
        <h2 class="text-3xl md:text-5xl  mb-4  font-extrabold  leading-tight">
          This Month’s Feature: <span class="text-orange-300">Pumpkin Spice Latte 🎃</span>
        </h2>
        <p class="text-lg text-gray-200 mb-6">
          Spiced, creamy, and perfectly cozy — available for a limited time only.
        </p>
        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Order Now
        </button>
      </div>

      <!-- Image -->
      <div class="relative group mx-auto" data-aos="fade-left">
        <img
          src="/coffee.png"
          alt="Pumpkin Spice Latte"
          class="rounded-2xl  transform transition-transform duration-500 group-hover:scale-105 md:h-[500px]"
        />
        <!-- Decorative Circle -->
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 opacity-30 rounded-full"></div>
      </div>
    </div>
  </section>


  <section class="bg-coffee-dark text-white py-16  min-h-screen">
      <div class="container mx-auto px-6 md:px-12 lg:px-20 flex md:flex-row flex-col  gap-10 items-center py-5">
        <div class="lg:w-1/2 relative">
          <img
            src="/bg-wall.jpg"
            alt="Our Coffee Story"
            class="rounded-2xl shadow-lg"
            data-aos="fade-right"
          />
          <div class="absolute -bottom-6 -right-6 bg-coffee-light w-24 h-24 rounded-full opacity-30"></div>
        </div>

        <div class="lg:w-1/2 ">
          <h2 class="text-3xl md:text-5xl font-extrabold  leading-tight drop-shadow-lg mb-6 " data-aos="fade-in">Our Story</h2>
          <p class="text-lg leading-relaxed text-gray-300" 
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          >
            At <span class="text-coffee-light font-semibold">[Coffee Shop Name]</span>, coffee isn’t just a drink — it’s a ritual.
            We carefully source our beans from sustainable farms around the world, roast them in-house for peak freshness, 
            and craft every cup with skill and heart. Whether you’re here for your morning pick-me-up or an afternoon escape, 
            you’ll always find a warm welcome waiting.
          </p>
        </div>
      </div>

       <div class="container mx-auto px-6 md:px-12 lg:px-20 flex lg:flex-row flex-col-reverse gap-10 items-center py-5">

        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-extrabold  leading-tight drop-shadow-lg mb-6 " data-aos="fade-in">Where We Start</h2>
          <p class="text-lg leading-relaxed text-gray-300" 
          data-aos="fade-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
          >
            At <span class="text-coffee-light font-semibold">[Coffee Shop Name]</span>, coffee isn’t just a drink — it’s a ritual.
            We carefully source our beans from sustainable farms around the world, roast them in-house for peak freshness, 
            and craft every cup with skill and heart. Whether you’re here for your morning pick-me-up or an afternoon escape, 
            you’ll always find a warm welcome waiting.
          </p>
        </div>

         <div class="md:w-1/2 relative">
          <img
            src="/bg-wall.jpg"
            alt="Our Coffee Story"
            class="rounded-2xl shadow-lg"
            data-aos="fade-left"
            
          />
          <div class="absolute -bottom-6 -right-6 bg-coffee-light w-24 h-24 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>

    <section class=" text-white py-20 relative min-h-screen">
      <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <!-- Title -->
        <div class="mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-extrabold ">
            More Than Just Coffee
          </h2>
          <p class="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            We’re more than your daily caffeine fix — we’re a space built around quality, ethics, and connection.
          </p>
        </div>

        <!-- Features -->
        <div class="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          
          <!-- Card 1 -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:bg-white/10 transition">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-coffee-light/20 flex items-center justify-center">
              <img src="/support.webp" alt="Ethically Sourced" class="w-10 h-10">
            </div>
            <h3 class="text-xl font-semibold mb-2">Ethically Sourced Beans</h3>
            <p class="text-gray-300 text-sm">
              Supporting farmers, protecting the planet.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:bg-white/10 transition">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-coffee-light/20 flex items-center justify-center">
              <img src="/support.webp" alt="Expertly Crafted" class="w-10 h-10">
            </div>
            <h3 class="text-xl font-semibold mb-2">Expertly Crafted</h3>
            <p class="text-gray-300 text-sm">
              Every shot pulled to perfection.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:bg-white/10 transition">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-coffee-light/20 flex items-center justify-center">
              <img src="/support.webp" alt="Cozy Escape" class="w-10 h-10">
            </div>
            <h3 class="text-xl font-semibold mb-2">A Cozy Escape</h3>
            <p class="text-gray-300 text-sm">
              A space to relax, work, or meet with friends.
            </p>
          </div>

        </div>
      </div>
    </section>


<!-- Testimonials -->
<section class="bg-gradient-to-b from-coffee-dark to-black text-white py-20 ">
  <div class="container mx-auto px-6 md:px-12 text-center">
    <h2 class="text-3xl md:text-5xl font-bold mb-16" data-aos="fade-up">
      What Our Customers Say
    </h2>

    <div class="grid gap-8 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
      <!-- Testimonial Card 1 -->
      <div class="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-white/10 transition">
        <p class="italic text-gray-300 mb-4">“Best coffee in town — no contest!”</p>
        <h4 class="font-semibold text-lg">— Sarah M.</h4>
      </div>

      <!-- Testimonial Card 2 -->
      <div class="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:bg-white/10 transition">
        <p class="italic text-gray-300 mb-4">“The atmosphere here is unbeatable.”</p>
        <h4 class="font-semibold text-lg">— Jason K.</h4>
      </div>
    </div>
  </div>
</section>










  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";


const scrollY = ref(0);
const isVisible = ref(false);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() =>{
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
