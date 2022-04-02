const shareBtn = document.querySelector('#shareBtn');
const socialIcons = document.querySelector('.social-icons-wrap');

shareBtn.addEventListener('click', () => {
    console.log("button clicked");
    socialIcons.classList.toggle('active');
    shareBtn.classList.toggle('active');
});

shareBtn.addEventListener('blur', (e) => {
    //when a mouse click is detected outside the socialIcons,
    // the socialIcons is closed
    // e.target is the element that triggered the event
    // e.relatedTarget is the element that was clicked

    console.log(e.target, e.relatedTarget);
    if (e.relatedTarget !== socialIcons) {
        socialIcons.classList.remove('active');
        shareBtn.classList.remove('active')
    }
});

socialIcons.addEventListener('blur', (e) => {
    socialIcons.classList.remove('active');
    shareBtn.classList.remove('active');
});
