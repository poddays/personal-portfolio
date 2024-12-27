<template>
    <section
        class="flex flex-col justify-between items-center lg:max-w-[620px] min-h-full max-h-[400px] py-8 px-4 md:px-20 md:justify-center md:items-center lg:py-20 lg:px-0 lg:sticky lg:top-0 lg:min-h-screen lg:w-[80%] lg:justify-between ">
        <div class="flex flex-col items-center lg:items-start justify-between text-center lg:text-left">
            <!-- Titolo -->

            <h1
                class="text-2xl ml-3 lg:ml-0 lg:text-4xl font-bold  bg-gradient-to-t from-[#768e8a] to-white bg-clip-text text-transparent">
                Giovanni Podda<span class="inline-block animate-blink text-gray-300 font-thin"> _ </span><span
                    class="text-xs lg:text-xs font-bold text-[#c6c6c6]"> DEV</span>
            </h1>

            <!-- Sottotitolo -->
            <h2 class="text-md  font-light text-[#c6c6c6]">giovanni.podda99@outlook.it</h2>

            <!-- Paragrafo introduttivo -->
            <div class="pt-4">
                <p class="text-base text-wrap lg:text-sm font-light tracking-wider text-[#dbdbdb]">
                    Sviluppatore e web designer, progetto e realizzo esperienze digitali incentrate sull'utente. <br> <br>  Combino  competenze tecniche e  creatività per  offrire soluzioni  efficaci e innovative.  La mia  priorità è  creare  interfacce intuitive e  coinvolgenti,  con  un'attenzione  particolare all'UX design e all'utilizzo di framework moderni.  
                </p>
            </div>
            <div class="text-emerald-500 hover:text-emerald-400 duration-200 lg:self-start mt-7 ">
                <a class="flex flex-row gap-1" href="/CV-Giovanni-Podda.pdf" target="_blank"><span
                        class="hidden lg:block">━</span> Scarica Curriculum</a>
            </div>
        </div>

        <!-- Link -->
        <div class="grid grid-cols-3 lg:self-start w-[300px] justify-center text-white my-12 lg:justify-start">
            <a v-for="link in links" :key="link.name" :href="link.href"
                class="text-white flex flex-col items-center gap-2 group">
                <Icon :name="link.icon"
                    class="group-hover:scale-[1.23] group-hover:-translate-y-2 transition-transform duration-200" />
                <span
                    class="group-hover:opacity-100 group-hover:-translate-y-0 opacity-0 -translate-y-2 transition-all delay-[20ms] duration-[400ms]">|</span>
                <span
                    class="group-hover:opacity-100 group-hover:-translate-y-0 opacity-0 -translate-y-2 transition-all delay-[170ms] duration-[400ms]">{{
                        link.name }}</span>
            </a>
        </div>
    </section>
</template>


<script setup>
import GLight from './GLight.vue';

const links = [
    /* { name: "Instagram", href: "https://instagram.com", icon: 'entypo-social:instagram' }, */
    { name: "Github", href: "https://github.com/poddays", icon: 'entypo-social:github' },
    { name: "Linkedin", href: "https://www.linkedin.com/in/giovanni-podda-596b91231/", icon: 'entypo-social:linkedin' },
    { name: "Mail", href: "mailto:giovanni.podda99@outlook.it", icon: 'entypo:mail' },
]
</script>


<style>
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.animate-blink {
    animation: blink 1.2s steps(1) infinite;
}
</style>