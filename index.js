
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