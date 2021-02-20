// window.onscroll = (e) => { 
//     var scrollY = window.pageYOffset || document.documentElement.scrollTop;
//     var header = document.querySelector('header');

//     scrollY <= this.lastScroll 
//       ? header.style.visibility = 'visible'
//       : header.style.visibility = 'hidden'; 
//     // if (this.lastScroll) {
//     //     header.style.transition='all .5s ease-in-out';
//     //     header.style.transform='left top';

//     // }
//     this.lastScroll = scrollY ;
// }

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}