// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const social = document.querySelector(".social-icons");

navToggle.addEventListener("click", () => {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
    social.classList.toggle("show-links");
  });

   //linksContainer.classList.toggle("show-links");
   /*const linksHeight = links.getBoundingClientRect().height;
   const socialHeight = social.getBoundingClientRect().height;
   const containerHeight = linksContainer.getBoundingClientRect().height;
   (containerHeight === 0) ?
     linksContainer.style.height = `${linksHeight + socialHeight}px` :
     linksContainer.style.height = 0;*/
   // console.log(linksContainer.getBoundingClientRect());
   