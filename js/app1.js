let sidebar_toggle= document.querySelector(".toggle-sidebar");

sidebar_toggle.addEventListener("click", () =>{
  let profile= document.querySelector(".profile");
  let formwrap= document.querySelector(".form-wrap");
  let mainhead= document.querySelectorAll(".main-nav-heading");
  let mainitem1= document.querySelectorAll(".main-nav-item > span");
  let mainitem2= document.querySelectorAll(".main-nav-item > div > span");
  let mainitem3= document.querySelectorAll(".main-nav-item > i");
  let brand= document.querySelectorAll(".brand-details");
  
  profile.classList.toggle("collapse");
  formwrap.classList.toggle("collapse");
  for(let i=0; i<mainhead.length; i++) mainhead[i].classList.toggle("collapse");
  for(let i=0; i<mainitem1.length; i++) mainitem1[i].classList.toggle("collapse");
  for(let i=0; i<mainitem2.length; i++) mainitem2[i].classList.toggle("collapse");
  for(let i=0; i<mainitem3.length; i++) mainitem3[i].classList.toggle("collapse");
  for(let i=0; i<brand.length; i++) brand[i].classList.toggle("collapse");
  

});

const mediaQuery = window.matchMedia('(max-width: 960px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  let sidebar_toggle= document.querySelector(".toggle-sidebar");

sidebar_toggle.addEventListener("click", () =>{
  let sidebar= document.querySelector(".sidebar");
  sidebar.classList.toggle("sidebar-collapse");
});
}
