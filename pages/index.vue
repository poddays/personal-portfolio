<template>
    <div class="bg-gradient-to-t from-transparent to-[#00000] fixed top-0 h-[4vh] min-w-full z-50"></div>
    <div class="flex flex-col gap-0 lg:flex-row lg:px-[7vw] justify-center w-[100%]">

        <!-- Hero Section -->
        <div class="order-1 lg:order-none">
            <HeroIntro />
            
        </div>

        <!-- Cards Section -->
        <div class="order-2 lg:order-none">
            <WorksSection />
        </div>
        <div class="fixed bottom-[-60px] left-[-110px] w-24">
           <HexRotating/>
        </div>

       <div class="fixed bottom-0 right-0 p-4 opacity-50" >
        <p class="text-gray-600 text-light">Portfolio still under development</p>
       </div>
        
        <div class="bg-gradient-to-b from-transparent to-[#00000] fixed bottom-0 h-[4vh] w-full z-50"></div>
    </div>
</template>
