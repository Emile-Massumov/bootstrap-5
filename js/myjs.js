let calcScrollValue = () => {
    let scrollProgress = document.querySelector("#progress");
    let progressValue = document.querySelector("#progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos >100) {
        scrollProgress.style.display = "grid";

    }else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener ("click", function () {
        document.documentElement.scrollTop = 0;
    });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;