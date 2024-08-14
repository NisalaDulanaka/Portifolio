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
        strings: ["Hello, I'm a software developer.", "I love coding.", "Welcome to my portfolio!"],
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
    const projectOverviewContainer = document.querySelector('#project-overview-container');
    const projectContainerMain = projectOverviewContainer.querySelector('.project-main');
    const projectOverviewCloseBtn = projectOverviewContainer.querySelector('.close');
    const projects = document.querySelectorAll('#projects .project');

    for (let i =0; i < projects.length; i++) {
        const project = projects[i];
        const projectData = projectsData[i];

        project.addEventListener('click', e => {

            projectContainerMain.innerHTML = projectData.getContent();

            projectOverviewContainer.classList.remove('hidden');
            projectSwiperInit();
            
            setTimeout(() => {
                projectOverviewContainer.classList.add('show');
            }, 50);
        });
    }

    projectOverviewCloseBtn.addEventListener('click', e => {
        projectOverviewContainer.classList.remove('show');
        setTimeout(() => {
            projectOverviewContainer.classList.add('hidden');
            projectContainerMain.innerHTML = '';
        }, 400);
    });
});

function projectSwiperInit(){
    projectSwiper = new Swiper('#swiper-test', {
        speed: 400,
        spaceBetween: 100,
    });

    document.querySelector('#swiper-test-controls .prev').addEventListener('click', e => {
        projectSwiper.slidePrev();
    });

    document.querySelector('#swiper-test-controls .next').addEventListener('click', e => {
        projectSwiper.slideNext();
    });
}

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