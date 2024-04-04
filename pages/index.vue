<template>
    <div>
<Headers/>
<About />
<Features />
<Gall />
<Album />
<Team />
<Contact />
<Footer />
    </div>
</template>

<script setup>
// import { ref } from 'vue';
import Headers from '~/components/main/headers.vue';
import About from '~/components/about/aboutus.vue';
import Features from '~/components/features/feat.vue';
// import Gallery from '~/components/gallery/galler.vue';
import Gall from '~/components/gallery/gall.vue';
import Album from '~/components/Alb/Albums.vue';
import Team from '~/components/team/ourTeam.vue';
import Contact from '~/components/contact/contactUs.vue';
import Footer from '~/components/foot/footer.vue';

</script>