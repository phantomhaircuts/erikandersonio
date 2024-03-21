// vector stuff
let path = document.querySelector('path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = `${pathLength} ${pathLength} `;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength =  pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
    // paralax stuffs
    const target = document.querySelectorAll('.scroll');
    let index = 0, length = target.length;
    for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical'){
            target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
        } else {
            let posX =  window.pageYOffset * target[index].dataset.rateX;
            let posY =  window.pageYOffset * target[index].dataset.rateY;
            target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }
})

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
window.CP.exitedLoop(0);function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1 });

}


