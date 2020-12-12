
// const card = document.querySelector('.card');
// const container = document.querySelector('.container');
//  Items
const tooltip = document.querySelector('.tooltip');
const headShot = document.querySelector('.headShot img');
// const info = document.querySelector('.info h3');
//  Moving animation event
tooltip.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//  Animate in
// eslint-disable-next-line no-unused-vars
tooltip.addEventListener('mouseenter', (e) => {
//   card.style.transition = 'none';
  //  popout
//   title.style.transform = 'translateZ(125px)';
  headShot.style.transform = 'translateZ(200px) rotateZ(-25deg) ';
//   info.style.transform = 'translateZ(100px)';
});
//  Animate out
// eslint-disable-next-line no-unused-vars
tooltip.addEventListener('mouseleave', (e) => {
//   card.style.transition = 'all 0.5s ease';
//   card.style.transform = 'rotateY(0deg) rotateX(0deg)';
//   title.style.transform = 'translateZ(0px)';
  headShot.style.transform = 'translateZ(0px) rotateZ( 0deg)';
//   info.style.transform = 'translateZ(0px)';
});














// About me text toggle

$(document).ready(function () {
    $('#aboutMeBtn').click(function () {
               $("#aboutMe").toggleClass("hideAboutMe");
                   }
    )
});

$(document).ready(function () {
    $('#closeAboutMe').click(function () {
               $("#aboutMe").toggleClass("hideAboutMe");
                   }
    )
});


