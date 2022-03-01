import React, { useState } from "react";
import menu from "../data/data";
import "./App.scss";

const allCategories = [
  "All",
  ...new Set(menu.map((item) => item.category)),
];
function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItem(menu);
    } else {
      const newItem = menu.filter(
        (item) => item.category === category
      );
      setMenuItem(newItem);
    }
  }
  return (
    <section className="container">
      <MainTitle />
      <Category
        filterItems={filterItems}
        categories={categories}
      />
      <Menu items={menuItem} />
    </section>
  )
}

function MainTitle() {
  return (
      <h1 className="main-title">Our Menu</h1>
  )
}

function Category({categories, filterItems}) {
  return (
    <nav className="category">
      {
        categories.map((category, index) => {
          return (
            <button
              key={index}
              className="category-button"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })
      }
    </nav>
  )
}

function Menu({items}) {
  return (
    <section className="menu-container">
      {items.map((item) => {
        const {id, title, price, img, desc} = item;
        return (
          <article className="menu-item" key={id}>
            <div className="menu-item-image">
              <img src={img} alt={title} />
            </div>
            <div className="menu-info">
              <header>
                <h4>{title}</h4>
                <p className="price">$ {price}</p>
              </header>
              <p className="desc">{desc}</p>
            </div>
          </article>
        )
      })
      }
    </section>
  )
}

export default App;
