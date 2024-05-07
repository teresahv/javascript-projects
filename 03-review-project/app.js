// local reviews data
const reviews = [
    {
      id: 1,
      name: "john smith",
      work: "ux designer",
      img:
      "images/P1.jpg",
      text:
        "The professional in charge of the UI will focus on the design of the product, impacting the first visual impression of the user, something that determines if the website or application is to their liking.",
      },
    {
      id: 2,
      name: "cristina gracía",
      work: "web designer",
      img:
      "images/P2.jpg",
      text:
        "The web designer is the professional who gathers the necessary knowledge to create websites with the appropriate characteristics and requirements to represent and defend a business, company or activity on the Internet.",
      },
    {
      id: 3,
      name: "peter jones",
      work: "intern",
      img:
      "images/P3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
    {
        id: 4,
        name: "anna williams",
        work: "programmer front-end",
        img:
          "images/P4.jpg",
        text:
          "So, a frontend programmer is in charge of developing the visual part of the web. Design the structure, typography, colorimetry, images, banners, etc. His work is really important because for a web page to work it has to have an attractive and intuitive design for the recipient.",
      },
    {
        id: 5,
        name: "luis brown",
        work: "programmer back-end",
        img:
          "images/P5.jpg",
        text:
          "The backend programmer is in charge of designing all the logic and solutions so that all the actions requested from a web page are executed correctly. To do this, it programs using different programming languages and frameworks.",
      },
    {
      id: 6,
      name: "maria miller",
      work: "the boss",
      img:
        "images/P6.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  // select items
  const img = document.getElementById("author-img");
  const author = document.getElementById("author");
  const work = document.getElementById("work");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
      const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      work.textContent = item.work;
      info.textContent = item.text;
    });
  
  // show worker based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    work.textContent = item.work;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", () => {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showPerson(currentItem);
    });
  // show prev person
  prevBtn.addEventListener("click", () => {
      currentItem--;
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
      showPerson(currentItem);
    });
  // show random person
  randomBtn.addEventListener("click", () => {
      currentItem = Math.floor(Math.random() * reviews.length);
      showPerson(currentItem);
    });
  