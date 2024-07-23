
document.addEventListener('DOMContentLoaded', function() {
    // Project cards animation
    const rightAlignedContents = document.querySelectorAll(".project-content.project-right .content");
    const contents = document.querySelectorAll('.project-content .content');

    for (const content of contents) {
        let enterTime = 80;
        let leaveTime = 290;
        
        for (const rac of rightAlignedContents) {
            if (content === rac) {
                enterTime = 150;
                leaveTime = 250;
                break;
            }
        }

        content.addEventListener("mouseenter", () => {
            setTimeout(() => {
                content.classList.add('content-top');
            }, enterTime); // Delay before showing box2 and changing z-index
        });

        content.addEventListener("mouseleave", () => {
            setTimeout(() => {
                content.classList.remove('content-top');
            }, leaveTime); // Delay before showing box2 and changing z-index
        });
    }

    const projectVideos = document.querySelectorAll('.project .video video');
    for (const video of projectVideos) {
        video.addEventListener("mouseenter",(e) => {
            e.target.play();
        });
    
        video.addEventListener("mouseleave",(e) => {
            e.target.pause();
            e.target.currentTime = 0;
        });
    }

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
    const projectContainer = document.getElementById('projects');
    const projectOverviewContainer = document.querySelector('#projects .overview-container');
    const projects = document.querySelectorAll('#projects .project');

    let overviewInUse = false, firstTime = true;
    for (const project of projects) {

        project.addEventListener('click', e => {
            overviewInUse = true;
            if(! projectOverviewContainer.classList.contains('show')){
                projectOverviewContainer.classList.add('show');
            }
            project.classList.add('active');
            setTimeout(() => {
                projectOverviewContainer.classList.add('content');
            }, 500);
            project.focus();
            projectContainer.scrollIntoView();
        });

        project.addEventListener('focusout', e => {
            projectOverviewContainer.classList.remove('content');
            setTimeout(() => {
                project.classList.remove('active');

                if(!overviewInUse || firstTime){
                    projectOverviewContainer.classList.remove('show');
                }

                overviewInUse = false;
                firstTime = false;
            }, 500);
        })
    }
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