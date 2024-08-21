const projectsData = [
    {
        getContent: MedicaLinkContent,
        getOverview: MedicalinkOverview
    },
    {
        getContent: CMSContent,
        getOverview: CMSOverview
    },
    {
        getContent: SkillForceContent,
        getOverview: SkillForceOverview
    }
]

function MedicaLinkContent() {

    return (
        `<div class="slide bg-gray-800 col-span-full h-[370px] md:h-auto md:col-span-12 row-span-full">

            <div class="swiper h-full" id="swiper-test">
                <div class="swiper-wrapper h-full">
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/main.png" class="object-cover object-top"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide relative">
                        <div class="play-btn absolute bg-red-50 w-full h-full top-0 left-0 z-[2]">
                            <div class="relative h-full">
                                <img src="./assets/images/projects/medicalink/design (1).png" class="object-cover object-top" alt="overlay">
                                
                                <div class="absolute bg-[radial-gradient(circle,_#00000064,_#0000004b,_#00000013)] top-0 left-0 flex justify-center items-center w-full h-full">
                                    <div class="play relative overflow-hidden flex justify-center items-center text-[#ffffff] bg-[#9476dba1] border-4 border-[#ffffff93] hover:bg-transparent cursor-pointer rounded-full before:rounded-full after:rounded-full">
                                        <span class="material-symbols-outlined text-[80px] z-10">
                                            play_arrow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <video src="./assets/final exhi.mp4" class="object-contain object-center" alt="project-asset" controls></video>
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/design (2).png" class="object-contain"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/design (3).png" class="object-contain"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/h3.png" class="object-contain"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/h1.png" class="object-contain"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/h4.png" class="object-contain"
                            alt="project-asset">
                    </div>
                    <div class="swiper-slide">
                        <img src="./assets/images/projects/medicalink/h2.png" class="object-contain"
                            alt="project-asset">
                    </div>
                </div>
            </div>
            <div class="absolute h-full w-full top-0 left-0 p-4 text-white flex items-center z-10 pointer-events-none">
                <div class="ms-8 mb-5 mt-auto flex items-center select-none pointer-events-auto" id="swiper-test-controls">
                    <span class="material-symbols-outlined cursor-pointer prev">
                        arrow_back_ios
                    </span>
                    <span class="material-symbols-outlined cursor-pointer next">
                        arrow_forward_ios
                    </span>
                    <div class="ms-2 flex items-center anime text-yellow-400">
                        <span class="material-symbols-outlined cursor-default">
                            arrow_forward_ios
                        </span>
                        <span class="material-symbols-outlined cursor-default">
                            arrow_forward_ios
                        </span>
                        <span class="material-symbols-outlined cursor-default">
                            arrow_forward_ios
                        </span>
                        <span class="ms-5">Explore</span>
                    </div>
                </div>
                <div class="ms-auto me-8 mb-5 mt-auto flex items-center !w-fit swiper-pagin">
                </div>
            </div>
        </div>
        <div class="slide bg-orange-500 row-start-4 col-span-full h-[450px] md:h-auto md:col-span-4 md:row-span-8">
            <img src="https://images.theconversation.com/files/373616/original/file-20201208-23-18tgbmo.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C667%2C667&q=45&auto=format&w=240&h=240&fit=crop"
                class="object-cover object-top" alt="project-asset">
            <div class="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-[#303cdfe4] to-[#303cdf86] p-4 text-white flex flex-col">
                <h1 class="text-2xl">01</h1>
                <div class=" mt-auto">
                    <h2 class="font-medium text-xl mb-4">
                        Won <span class="text-[#fffb21] font-bold">1<sup>st</sup> place</span> at the IIT Infoschol Program as the "<span class="text-[#fffb21] font-bold">Best Project Pitch</span>"
                    </h2>
                    <p class="mt-5 mb-5">
                        Won 1<sup>st</sup> place out of 10 projects at the IIT Induction program and got selected for the final round of the 
                        IIT Cutting Edge tournament out of 40+ projects.
                    </p>
                </div>
            </div>
        </div>
        <div class="slide bg-gradient-to-tr from-pink-500 to-indigo-500 row-start-6 col-span-full h-[320px] 
            md:h-auto md:col-span-4 md:row-span-8">
            <div class="p-5 h-full sm:h-auto overflow-y-auto">
                <h1 class="text-lg font-semibold mt-5">Get to know the</h1>
                <h1 class="text-2xl font-bold">Technology Stack</h1>
                <div class="mt-10 flex flex-wrap gap-x-6 gap-y-4 items-center">
                    <span class="w-16">
                        <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
                            alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="">
                    </span>
                    <span class="w-16">
                        <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" alt="">
                    </span>
                    <span class="w-14">
                        <img src="https://v4.mui.com/static/logo.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        <div class="slide bg-[#34365cf6] row-start-2 col-span-full h-[311px] md:h-auto md:col-span-8 md:row-span-4">
            <div class="p-8 text-white h-full sm:h-auto overflow-y-auto">
                <h1 class="mb-1 text-[18px]">Overview</h1>
                <div class="flex items-center gap-x-4 text-xs mb-5">
                    <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
                    <a href="#"
                        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                        Web Application
                    </a>
                    <a href="#"
                        class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                        Mobile Application
                    </a>
                </div>
                <p>
                    MedicaLink is an online platform for managing electronic health records. It aims to
                    replace
                    Sri Lanka's paper-based healthcare systems,
                    which often cause misdiagnoses and delays in patient care, by centralizing healthcare
                    information for hospitals nationwide.
                </p>
            </div>
        </div>`
    );
}

function MedicalinkOverview(fullScreen = false) {

    return (
        `<h1 class="text-xlfont-semibold ${fullScreen ? 'mt-10' : ''}">MedicaLink
            <span class="block md:inline text-[18px] md:text-xl">
                <span class="hidden md:inline"> - </span>SOnline EHR System
            </span>
        </h1>
        <div class="flex items-center gap-x-4 text-xs mt-3">
            <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
            <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                Web App<span class="hidden md:inline">lication</span>
            </a>
            <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                Mobile
            </a>
        </div>
        <div class="mt-8 text-justify">
            MedicaLink is an online platform for managing electronic health records. It aims to
            replace
            Sri Lanka's paper-based healthcare systems,
            which often cause misdiagnoses and delays in patient care, by centralizing healthcare
            information for hospitals nationwide.
        </div>
        <div>
            <h2 class="font-bold mt-4">My Role</h2>
            <p class="text-gray-50">
                Lead developer
            </p>
        </div>
        <div>
            <h2 class="font-bold mt-8">Technologies Used</h2>
            <div class="mt-3 flex flex-wrap gap-x-6 gap-y-4 items-center">
                <span class="w-16">
                    <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-16">
                    <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://v4.mui.com/static/logo.png" alt="">
                </span>
            </div>
        </div>`
    );
}

function CMSContent() {

    return (
        `<div class="slide bg-gray-800 col-span-full h-[370px] md:h-auto md:col-span-12 row-span-full">

                <div class="swiper h-full" id="swiper-test">

                    <div class="swiper-wrapper h-full">

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/cms/main.png" class="object-cover object-top"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/cms/1.png" class="object-contain" alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/cms/2.png" class="object-contain" alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/cms/3.png" class="object-contain" alt="project-asset">
                        </div>

                    </div>

                </div>

                <div class="absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col z-10">
                    <div class="ms-8 mb-5 mt-auto flex items-center" id="swiper-test-controls">
                        <span class="material-symbols-outlined cursor-pointer prev">
                            arrow_back_ios
                        </span>
                        <span class="material-symbols-outlined cursor-pointer next">
                            arrow_forward_ios
                        </span>
                        <div class="ms-2 flex items-center anime text-yellow-400">
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="ms-5">Explore</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slide bg-orange-500 row-start-4 col-span-full h-[450px] md:h-auto md:col-span-4 md:row-span-8">
                <img src="https://assets.weforum.org/article/image/responsive_big_webp_J3jUjzyyOxW4zWGs9ZMvpaRi8QjdQDb1x5adaI9wUpY.webp"
                    class="object-cover object-center-top" alt="project-asset">

                <div class="absolute h-full w-full top-0 left-0 bg-[#2092a386] p-4 text-white flex flex-col">
                    <h1 class="text-2xl">01</h1>
                    <div class=" mt-auto">
                        <h2 class="font-medium text-xl">
                            <span class="text-yellow-400 font-bold">Experience</span> the true <span
                                class="text-yellow-400 font-bold">power</span> of a modern information management
                            system.
                        </h2>
                        <p class="mt-3 mb-5">
                            A feature rich solution for managing all aspects of a centre, built with modern technology.
                        </p>
                    </div>
                </div>
            </div>

            <div class="slide bg-gradient-to-tr from-[#30766d] to-[#ff4efc] row-start-6 col-span-full h-[320px] 
            md:h-auto md:col-span-4 md:row-span-8">

                <div class="p-5 h-full sm:h-auto overflow-y-auto">
                    <h1 class="text-lg font-semibold mt-5">Get to know the</h1>
                    <h1 class="text-2xl font-bold">Technology Stack</h1>

                    <div class="mt-10 flex flex-wrap gap-x-6 gap-y-4 items-center">
                        <span class="w-16">
                            <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="">
                        </span>
                        <span class="w-16">
                            <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" alt="">
                        </span>
                        <span class="w-44">
                            <img src="assets/images/MOTIONS PHPLogo.svg" alt="">
                        </span>
                    </div>
                </div>

            </div>

            <div class="slide bg-[#344c5cf6] row-start-2 col-span-full h-[311px] md:h-auto md:col-span-8 md:row-span-4">

                <div class="p-8 text-white h-full sm:h-auto overflow-y-auto">
                    <h1 class="mb-1 text-[18px]">Overview</h1>
                    <div class="flex items-center gap-x-4 text-xs mb-5">
                        <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
                        <a href="#"
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                            Web Application
                        </a>
                    </div>
                    <p>
                        A center management system for the Vocational Training Authority of Sri Lanka. It
                        manages
                        student registration,
                        Attendance marking, Assessment handling and Inventory handling of centres owned by the
                        VTA.
                    </p>
                </div>

            </div>`
    );
}

function CMSOverview(fullScreen = false) {

    return (
        `<h1 class="text-xl font-semibold ${fullScreen ? 'mt-10' : ''}">VTA CMS
            <span class="block md:inline text-[18px] md:text-xl">
                <span class="hidden md:inline"> - </span>Centre Management System
            </span>
        </h1>
        <div class="flex items-center gap-x-4 text-xs mt-3">
            <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
            <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                Desktop Application
            </a>
        </div>
        <div class="mt-8 text-justify">
            A center management system for the Vocational Training Authority of Sri Lanka. It
            manages
            student registration,
            Attendance marking, Assessment handling and Inventory handling of centres owned by the
            VTA.
        </div>
        <div>
            <h2 class="font-bold mt-8">My Role</h2>
            <p class="text-gray-50">
                Project Lead | Developer
            </p>
        </div>
        <div>
            <h2 class="font-bold mt-8">Technologies Used</h2>
            <div class="mt-3 flex flex-wrap gap-x-6 gap-y-4 items-center">
                <span class="w-16">
                    <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-16">
                    <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-44">
                    <img src="assets/images/MOTIONS PHPLogo.svg" alt="">
                </span>
            </div>
        </div>`
    );
}

function SkillForceContent() {

    return (
        `<div class="slide bg-gray-800 col-span-full h-[370px] md:h-auto md:col-span-12 row-span-full">

                <div class="swiper h-full" id="swiper-test">

                    <div class="swiper-wrapper h-full">

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/main.png" class="object-cover object-top"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/design (1).png" class="object-contain"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/design (2).png" class="object-contain"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/ss.PNG" class="object-contain"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/ss2.PNG" class="object-contain"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/ss4.PNG" class="object-contain"
                                alt="project-asset">
                        </div>

                        <div class="swiper-slide">
                            <img src="./assets/images/projects/skillforce/ss6.PNG" class="object-contain"
                                alt="project-asset">
                        </div>

                    </div>

                </div>

                <div class="absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col z-10">
                    <div class="ms-8 mb-5 mt-auto flex items-center" id="swiper-test-controls">
                        <span class="material-symbols-outlined cursor-pointer prev">
                            arrow_back_ios
                        </span>
                        <span class="material-symbols-outlined cursor-pointer next">
                            arrow_forward_ios
                        </span>
                        <div class="ms-2 flex items-center anime text-yellow-400">
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="material-symbols-outlined cursor-default">
                                arrow_forward_ios
                            </span>
                            <span class="ms-5">Explore</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slide bg-orange-500 row-start-4 col-span-full h-[450px] md:h-auto md:col-span-4 md:row-span-8">
                <img src="https://i.ytimg.com/vi/t892axrPj9A/maxresdefault.jpg" class="object-cover object-left-top"
                    alt="project-asset">

                <div class="absolute h-full w-full top-0 left-0 bg-[#df303086] p-4 text-white flex flex-col">
                    <h1 class="text-2xl">01</h1>
                    <div class=" mt-auto">
                        <h2 class="font-medium text-xl">DEVELOPED AND USED FOR THE DERENA <span
                                class="text-yellow-400 font-bold">SKILL FORCE</span> PROGRAM</h2>
                        <p class="mt-3 mb-5">
                            Skill Force is an exhibition organized by Derena where students from
                            various educational institutions get to showcase their bright ideas to a mass audience.
                        </p>
                    </div>
                </div>
            </div>

            <div class="slide bg-gradient-to-tr from-[#FF4E50] to-[#F9D423] row-start-6 col-span-full h-[320px] 
            md:h-auto md:col-span-4 md:row-span-8">

                <div class="p-5 h-full sm:h-auto overflow-y-auto">
                    <h1 class="text-lg font-semibold mt-5">Get to know the</h1>
                    <h1 class="text-2xl font-bold">Technology Stack</h1>

                    <div class="mt-10 flex flex-wrap gap-x-6 gap-y-4 items-center">
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000" alt="">
                        </span>
                        <span class="w-14">
                            <img src="https://img.icons8.com/?size=100&id=30461&format=png&color=000000" alt="">
                        </span>
                        <span class="w-28">
                            <img src="https://gradle.com/wp-content/uploads/2023/09/LOGO-GRADLE-HZ_RGB.svg" alt="">
                        </span>
                    </div>
                </div>
            </div>

            <div class="slide bg-[#5c3834f6] row-start-2 col-span-full h-[311px] md:h-auto md:col-span-8 md:row-span-4">
                <div class="p-8 text-white h-full sm:h-auto overflow-y-auto">
                    <h1 class="mb-1 text-[18px]">Overview</h1>
                    <div class="flex items-center gap-x-4 text-xs mb-5">
                        <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
                        <a href="#"
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                            Desktop Application
                        </a>
                    </div>
                    <p>
                        A student application management system for the Vocation
                        Training Authority of Sri Lanka. It is used to manage application
                        submitted by students for VTA courses. Completed the whole project
                        in a week.
                    </p>
                </div>
            </div>`
    );
}

function SkillForceOverview(fullScreen = false) {

    return (
        `<h1 class="text-xl font-semibold">Skill Force
            <span class="block md:inline text-[18px] md:text-xl">
                <span class="hidden md:inline"> - </span>Student Application System
            </span>
        </h1>
        <div class="flex items-center gap-x-4 text-xs mt-3">
            <time datetime="2024-06-20" class="text-blue-50 text-[14px]">June 20, 2024</time>
            <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-white">
                Desktop Application
            </a>
        </div>
        <div class="mt-8 text-justify">
            A student application management system for the Vocation
            Training Authority of Sri Lanka. It is used to manage application
            submitted by students for VTA courses. Completed the whole project
            in a week.
        </div>
        <div>
            <h2 class="font-bold mt-8">My Role</h2>
            <p class="text-gray-50">
                Project Lead | Developer
            </p>
        </div>
        <div>
            <h2 class="font-bold mt-8">Technologies Used</h2>
            <div class="mt-3 flex flex-wrap gap-2">
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000"
                        alt="">
                </span>
                <span class="w-14">
                    <img src="https://img.icons8.com/?size=100&id=30461&format=png&color=000000"
                        alt="">
                </span>
            </div>
        </div>`
    );
}