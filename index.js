
// For adding the 
document.addEventListener('DOMContentLoaded', function() {
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
});