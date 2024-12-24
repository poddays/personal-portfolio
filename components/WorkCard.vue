<template>
    <div class="flex flex-row items-center text-white gap-3">
        <h3 class="text-sm text-nowrap capitalize text-gray-400 hidden md:block">
            {{ formattedDate }} —
        </h3>
        <div class="min-h-[600px] h-[71vh] max-w-[100%] w-[570px] rounded-3xl border border-gray-700 bg-[#141414] relative overflow-hidden">
            <div class="lg:h-[55%]">
                <video class="w-full h-full object-cover" muted loop :src="work.videoLink" autoplay></video>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-4 custom-gradient h-full flex flex-col justify-end">
                <div class="h-[48%] w-full flex flex-col justify-between px-2">
                    <div>
                        <div class="flex flex-col justify-between capitalize">
                            <h2 class="text-white text-3xl font-bold">{{ work.title }}</h2>
                            <div class="flex flex-row items-center gap-2">
                                <p class="text-gray-400 font-light text-xs">{{ work.customer }}</p>
                                <span class="text-gray-400 font-light text-xs md:hidden">— {{ work.month }} {{ work.year
                                    }}</span>
                            </div>
                        </div>

                        <div class="h-[100%] w-5/6">
                            <p class="text-wrap text-white text-sm font-light mt-1">
                                {{ work.description }}
                            </p>
                            <div class="flex flex-row items-center gap-2 mt-4">
                                <span v-for="tech in technologies" :key="tech"
                                    class="px-2.5 py-0.5 rounded-full text-xs"
                                    :class="['bg-white/10', `capsule-${dominantTechnology}`]">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="h-px bg-gray-800 my-4"></div>
                        <div class="flex flex-row justify-center gap-16">
                            <a v-if="work.workLink" :href="work.workLink"
                                class="text-gray-200 hover:underline flex flex-row gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#ffff">
                                    <path
                                        d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                                </svg>
                                Caso studio
                            </a>
                            <a v-if="work.websiteLink" :href="work.websiteLink" target="_blank"
                                class="text-gray-200 hover:underline flex flex-row gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#ffff">
                                    <path
                                        d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                                </svg>
                                Sito web
                            </a>
                        </div>
                    </div>
                </div>
                <div class="sphere-light" :class="`sphere-light--${dominantTechnology}`"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const technologyColors = {
    angular: 'rgb(231, 62, 62)',
    react: 'rgb(62, 217, 231)',
    wordpress: 'rgb(105, 70, 231)',
    svelte: 'rgb(231, 135, 62)',
    vue: 'rgb(231, 135, 62)',
    // Aggiungi altre tecnologie e colori se necessario
};

interface Work {
    title: string;
    date: string;
    videoLink: string;
    workLink: string;
    websiteLink: string;
    description: string;
    customer: string;
    year: number;
    month: string;
    technologies: string[];
}

export default defineComponent({
    props: {
        work: {
            type: Object as () => Work, // Definisci il tipo della prop come Work
            required: true,
        },
    },
    computed: {
        technologies(): string[] {
            return this.work.technologies.map(t => t.toUpperCase()); // Usa toUpperCase()
        },
        dominantTechnology() {
            const firstTechnology = this.work.technologies[0]?.toLowerCase() || '';
            // Restituisci la chiave corrispondente o 'default' se non trovata
            return (firstTechnology in technologyColors) ? firstTechnology : 'default';
        },
        formattedDate() {
            const [day, month, year] = this.work.date.split('/'); // Separa la data in giorno, mese e anno
            const date = new Date(+year, +month - 1, +day); // Crea un nuovo oggetto Date (nota la correzione del mese)
            const options = { month: 'short', year: 'numeric' } as const;
            return date.toLocaleDateString('it-IT', options);
        }

    },

});
</script>

<style>
.custom-gradient {
    background: linear-gradient(to top,
            rgb(20, 20, 20) 0%,
            rgb(20, 20, 20) 48%,
            rgba(0, 0, 0, 0.199) 60%,
            rgba(20, 20, 20, 0) 100%);
}

.capsule-angular {
    background-color: rgb(231, 62, 62, 0.14);
    color: rgb(228, 79, 79);

}

.capsule-react {
    background-color: rgb(62, 217, 231, 0.14);
    color: rgb(95, 178, 219);
}

.capsule-svelte {
    background-color: rgb(231, 135, 62, 0.14);
    color: rgb(252, 168, 103);
}

.capsule-wordpress {
    background-color: rgb(105, 70, 231, 0.14);
    color: rgb(165, 121, 246);
}

.capsule-vue {
    background-color: rgba(108, 231, 70, 0.14);
    color: rgb(163, 246, 121);
}

.capsule-default {
    background-color: rgba(211, 211, 211, 0.14);
    color: rgb(241, 241, 241);
}

.sphere-light {
    position: absolute;
    bottom: -100px;
    right: -120px;
    width: 200px;
    height: 200px;
    z-index: 0;
    pointer-events: none;
    filter: blur(120px);
    mix-blend-mode: screen;
}

.sphere-light--angular {
    background: radial-gradient(circle at center,
            rgba(255, 0, 0, 0.6) 90%,
            rgba(255, 0, 0, 0.3) 80%,
            transparent 100%);
}

.sphere-light--react {
    background: radial-gradient(circle at center,
            rgba(0, 255, 255, 0.6) 90%,
            rgba(0, 255, 255, 0.3) 80%,
            transparent 100%);
}

.sphere-light--wordpress {
    background: radial-gradient(circle at center,
            rgba(38, 0, 255, 0.6) 90%,
            rgba(255, 0, 238, 0.3) 80%,
            transparent 100%);
}

.sphere-light--svelte {
    background: radial-gradient(circle at center,
            rgba(255, 115, 0, 0.6) 90%,
            rgba(255, 149, 0, 0.3) 80%,
            transparent 100%);
}

.sphere-light--vue {
    background: radial-gradient(circle at center,
            rgba(64, 255, 0, 0.6) 90%,
            rgba(0, 255, 162, 0.3) 80%,
            transparent 100%);
}
</style>