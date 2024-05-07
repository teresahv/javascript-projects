const menu = [
    {
      id: 1,
      title: "black coffee",
      category: "breakfast",
      price: 3,
      img: "./imagesMeal/Breakfast-01.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur.  `,
    },
    {
      id: 2,
      title: "burger with fries",
      category: "lunch",
      price: 12,
      img: "./imagesMeal/Lunch-01.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur.  `,
    },
    {
      id: 3,
      title: "healthy pear",
      category: "shakes",
      price: 6.99,
      img: "./imagesMeal/Shake-01.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
      id: 4,
      title: "healthy salmon",
      category: "dinner",
      price: 16.99,
      img: "./imagesMeal/Dinner-01.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
      id: 5,
      title: "corn flakes apple",
      category: "breakfast",
      price: 8,
      img: "./imagesMeal/Breakfast-02.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur.  `,
    },
    {
      id: 6,
      title: "onion rings whith soda",
      category: "lunch",
      price: 14.98,
      img: "./imagesMeal/Lunch-02.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
      id: 7,
      title: "healthy grapefruit",
      category: "shakes",
      price: 6.99,
      img: "./imagesMeal/Shake-02.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
      id: 8,
      title: "shrimp",
      category: "dinner",
      price: 17.40,
      img: "./imagesMeal/Dinner-02.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
      id: 9,
      title: "healthy fruit",
      category: "breakfast",
      price: 13,
      img: "./imagesMeal/Breakfast-03.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur.`,
    },
    {
      id: 10,
      title: "hot dog with nuguets",
      category: "lunch",
      price: 14.98,
      img: "./imagesMeal/Lunch-03.jpg",
      desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
    },
    {
        id: 11,
        title: "healthy blueberry",
        category: "shakes",
        price: 6.99,
        img: "./imagesMeal/Shake-03.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 12,
        title: "ribs",
        category: "dinner",
        price: 19.40,
        img: "./imagesMeal/Dinner-03.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 13,
        title: "hot cakes",
        category: "breakfast",
        price: 12,
        img: "./imagesMeal/Breakfast-05.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 14,
        title: "pizza and sandwich healthy",
        category: "lunch",
        price: 14.98,
        img: "./imagesMeal/Lunch-04.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 15,
        title: "healthy watermelon",
        category: "shakes",
        price: 6.99,
        img: "./imagesMeal/Shake-04.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 16,
        title: "salad",
        category: "breakfast",
        price: 12,
        img: "./imagesMeal/Breakfast-06.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
      {
        id: 17,
        title: "healthy banana",
        category: "shakes",
        price: 6.99,
        img: "./imagesMeal/Shake-05.jpg",
        desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde temporibus sunt at culpa assumenda consectetur. `,
      },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", () => {
      diplayMenuItems(menu);
      displayMenuButtons();
    });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) =>
        // console.log(item);
        `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`);
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      (values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map((category) => `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`)
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    //console.log(filterBtns);
  
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                  return menuItem;
                }
              });
            (category === "all") ?
              diplayMenuItems(menu) : diplayMenuItems(menuCategory);
          });
      });
  }
  