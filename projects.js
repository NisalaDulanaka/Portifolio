const projectData = [
    {
        items: ['./assets/final exhi.mp4','./assets/images/projects/medicalink/design.png',
            './assets/images/projects/medicalink/design (3).png','./assets/images/projects/medicalink/h2.png',
            './assets/images/projects/medicalink/h3.png','./assets/images/projects/medicalink/design (2).png'
        ],
        getContent: MedicaLinkContent,
        getOverview: MedicalinkOverview
    },
    {
        items: ['./assets/final exhi.mp4','./assets/images/projects/medicalink/design.png',
            './assets/images/projects/skillforce/ss2.PNG','./assets/images/projects/medicalink/h2.png',
            './assets/images/projects/medicalink/h3.png','./assets/images/projects/medicalink/design (2).png'
        ],
        getContent: CMSContent,
        getOverview: CMSOverview
    },
    {
        items: ['./assets/final exhi.mp4','./assets/images/projects/skillforce/design (1).png',
            './assets/images/projects/medicalink/design (3).png','./assets/images/projects/skillforce/design (2).png',
            './assets/images/projects/skillforce/ss6.PNG','./assets/images/projects/skillforce/ss.PNG'
        ],
        getContent: SkillForceContent,
        getOverview: SkillForceOverview
    }
]

function MedicaLinkContent() {

    return (
        `<div
            class="ms-[334px] p-4 w-fit h-[100%] grid grid-rows-12 grid-cols-[repeat(12,minmax(85px,_100px))] grid-flow-col gap-4 overview-tiles">
            <div class="tile bg-blue-500 row-span-7 col-span-5">
                <video src="./assets/final exhi.mp4" loop controls></video>
            </div>
            <div class="tile bg-blue-500 row-span-5 col-span-4">
                <img src="./assets/images/projects/medicalink/design.png" alt="project-asset">
            </div>
            <div class="tile bg-blue-500 row-span-5 col-span-2">
                <img src="./assets/images/projects/medicalink/design (3).png" alt="project-asset">
            </div>
            <div class="tile bg-blue-500 row-span-7 col-span-5">
                <img src="./assets/images/projects/medicalink/h2.png" alt="project-asset">
            </div>
            <div class="tile bg-blue-500 row-span-5 col-span-4">
                <img src="./assets/images/projects/medicalink/h3.png" alt="project-asset">
            </div>
            <div class="tile bg-blue-500 row-span-full col-span-2">
                <img src="./assets/images/projects/medicalink/design (2).png" alt="project-asset">
            </div>
        </div>`
    );
}

function MedicalinkOverview(fullScreen = false){

    return (
        `<h1 class="text-xlfont-semibold ${fullScreen? 'mt-10' : ''}">MedicaLink
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
        `<div
            class="ms-[334px] p-4 w-fit h-[100%] grid grid-rows-12 grid-cols-[repeat(12,minmax(85px,_100px))] grid-flow-col gap-4 overview-tiles">
            <div class="tile bg-yellow-500 row-span-7 col-span-5">
                <video src="./assets/final exhi.mp4" loop controls></video>
            </div>
            <div class="tile bg-yellow-500 row-span-5 col-span-4">
                <img src="./assets/images/projects/medicalink/design.png" alt="project-asset">
            </div>
            <div class="tile bg-yellow-500 row-span-5 col-span-2">
                <img src="./assets/images/projects/medicalink/design (3).png" alt="project-asset">
            </div>
            <div class="tile bg-yellow-500 row-span-7 col-span-5">
                <img src="./assets/images/projects/medicalink/h2.png" alt="project-asset">
            </div>
            <div class="tile bg-yellow-500 row-span-5 col-span-4">
                <img src="./assets/images/projects/medicalink/h3.png" alt="project-asset">
            </div>
            <div class="tile bg-yellow-500 row-span-full col-span-2">
                <img src="./assets/images/projects/medicalink/design (2).png" alt="project-asset">
            </div>
        </div>`
    );
}

function CMSOverview(fullScreen = false){

    return (
        `<h1 class="text-xl font-semibold ${fullScreen? 'mt-10' : ''}">VTA CMS
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
        `<div
            class="ms-[334px] p-4 w-fit h-[100%] grid grid-rows-12 grid-cols-[repeat(12,minmax(85px,_100px))] grid-flow-col gap-4 overview-tiles">
            <div class="tile bg-pink-500 row-span-7 col-span-5">
                <video src="./assets/final exhi.mp4" loop controls></video>
            </div>
            <div class="tile bg-pink-500 row-span-5 col-span-2">
                <img src="./assets/images/projects/skillforce/design (1).png" class="object-top"
                    alt="project-asset">
            </div>
            <div class="tile bg-pink-500 row-span-5 col-span-3">
                <img src="./assets/images/projects/skillforce/ss2.PNG" class="object-left" alt="project-asset">
            </div>
            <div class="tile bg-pink-500 row-span-full col-span-3">
                <img src="./assets/images/projects/skillforce/design (2).png" alt="project-asset">
            </div>
            <div class="tile bg-pink-500 row-span-6 col-span-4">
                <img src="./assets/images/projects/skillforce/ss6.PNG" alt="project-asset">
            </div>
            <div class="tile bg-pink-500 row-span-6 col-span-4">
                <img src="./assets/images/projects/skillforce/ss.PNG" alt="project-asset">
            </div>
        </div>`
    );
}

function SkillForceOverview(fullScreen = false){

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