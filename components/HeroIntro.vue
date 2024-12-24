<template>
    <section class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-[40vh] lg:w-full lg:flex-col lg:justify-between lg:py-28">
        <div class="h-[100%] flex flex-col justify-between">
            <div class="flex flex-col text-white w-full">
                <h1
                    class="text-5xl font-bold py-2 bg-gradient-to-t from-[#768e8a] to-white bg-clip-text text-transparent">
                    Giovanni Podda<span class="inline-block animate-blink text-white font-thin">_</span>
                </h1>
                <h2 class="text-xl font-bold text-[#f3f3f3] ">Front-end developer</h2>
                <div class="pt-4 w-7/12">
                    <p class="font-light tracking-wider text-[#dbdbdb]">
                        Questo è il mio portfolio e questo è un testo di prova, qui scrivo una piccola introduzione e
                        potrà
                        essere modificata dinamicamente in una pagina esterna.
                        <br><br>
                        Questo è il mio portfolio e questo è un testo di prova, qui scrivo una piccola introduzione e
                        potrà
                        essere modificata dinamicamente in una pagina esterna.
                    </p>
                </div>
            </div>
            <nav>

            </nav>

            <div class="flex w-full justify-start flex-row gap-4 text-white my-12">
                <a v-for="link in links" :key="link.name" :href="link.href"
                    class="text-white flex flex-col items-center gap-2 group">
                    <Icon :name="link.icon" class="group-hover:scale-[1.23] transition-transform duration-200" />
                    <span
                        class="group-hover:opacity-100 group-hover:-translate-y-0 opacity-0 -translate-y-2 transition-all delay-[20ms] duration-[400ms]">|</span>
                    <span
                        class="group-hover:opacity-100 group-hover:-translate-y-0 opacity-0 -translate-y-2 transition-all delay-[170ms] duration-[400ms]">{{
                        link.name }}</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const links = [
    { name: "Instagram", href: "https://instagram.com", icon: 'entypo-social:instagram' },
    { name: "Github", href: "https://github.com/poddays", icon: 'entypo-social:github' },
    { name: "Linkedin", href: "https://www.linkedin.com/in/giovanni-podda-596b91231/", icon: 'entypo-social:linkedin' },
    { name: "Mail", href: "mailto:giovanni.podda99@outlook.it", icon: 'entypo:mail' },
]
</script>


<style>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-blink {
  animation: blink 1.2s steps(1) infinite;
}
</style>