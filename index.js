let projectOverviewContent = null;

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          let element = getElementFromIdLink(this.getAttribute('href'));
          if(element == null) return;
          element.scrollIntoView({
            behavior: 'smooth'
          });
        });
    });

    var options = {
        strings: ["Hello, I'm a web developer.", "I love coding.", "Welcome to my portfolio!"],
        typeSpeed: 45,
        backSpeed: 25,
        startDelay: 0,
        loop: true
    };
  
    var typed = new Typed("#my-titles", options);

    const aboutSection = document.getElementById('about');
    const moreLink = document.getElementById('more-link');
    let collapsed = true;
    moreLink.addEventListener('click', e => {
        if(collapsed){
            aboutSection.querySelector('.para').classList.remove('max-h-[200px]');
            aboutSection.querySelector('.para div').classList.remove('hidden');
            moreLink.innerText = 'See less...';
        }
        else{
            aboutSection.querySelector('.para').classList.add('max-h-[200px]');
            aboutSection.querySelector('.para div').classList.add('hidden');
            moreLink.innerText = 'See more...';
        }

        collapsed = !collapsed;
    });

    //Project animations
    projectOverviewContent = document.getElementById('overview-content');

    const projectContainer = document.getElementById('projects');
    const projectOverviewContainer = document.querySelector('#projects .overview-container');
    const projects = document.querySelectorAll('#projects .project');

    let overviewInUse = false, firstTime = true;
    let activeProject = null;
    let currentTimeOut = null;

    document.getElementById('overview-close').addEventListener('click', e => {
        projectOverviewContainer.classList.remove('content');

        clearTimeout(currentTimeOut);
        currentTimeOut = setTimeout(() => {
            activeProject.classList.remove('active');
            
            projectOverviewContainer.classList.remove('show');
            projectOverviewContent.innerHTML = '';

            overviewInUse = false;
            firstTime = false;
        }, 500);
    });

    for (let i =0; i < projects.length; i++) {
        const project = projects[i];

        project.addEventListener('click', e => {
            overviewInUse = false;

            if(! projectOverviewContainer.classList.contains('show')){
                projectOverviewContainer.classList.add('show');
            }

            if(activeProject != null) activeProject.classList.remove('active');
            project.classList.add('active');
            projectOverviewContent.innerHTML = projectData[i].getContent();
            activeProject = project;
            
            if(!overviewInUse || firstTime){
                projectOverviewContainer.classList.remove('content');
                setTimeout(() => {
                    projectOverviewContainer.classList.add('content');
                }, 500);
            }
            
            project.focus();
            projectContainer.scrollIntoView();

            overviewInUse = true;
            firstTime = false;
        });
    }

    //Project fullscreen swiper
    const swiperContainer = document.getElementById('project-swiper-wrapper');
    document.getElementById('overview-fullScreen').addEventListener('click', e => {
        console.log('happening');
        swiperContainer.classList.remove('hidden');
    });

    document.getElementById('fullscreen-close').addEventListener('click', e => {
        console.log('happening');
        swiperContainer.classList.add('hidden');
    });

    const swiper = new Swiper('#project-swiper', {
        speed: 400,
        spaceBetween: 100,
        /* autoplay: {
            delay: 5000,
        }, */
        pagination: {
            el: ".swiper-pagination",
        }
    });

    document.querySelector('#project-swiper-container .swiper-button-prev').addEventListener('click', e => {
        swiper.slidePrev();
    });

    document.querySelector('#project-swiper-container .swiper-button-next').addEventListener('click', e => {
        swiper.slideNext();
    });
});

function getElementFromIdLink(idLink = ""){
    if(idLink.length < 2) return null;
    idLink = idLink.slice(1);
    
    let ids = idLink.split("/");

    let el = document.querySelector("body");

    for (const id of ids) {
        el = el.querySelector(`#${id}`);
        if(el == null || el == undefined) return null;
    }

    return el;
}