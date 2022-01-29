import React, { useState } from 'react'
import menu from './data'
import Categories from './categories';
import Menu from './menu';

const menuCategories = ['all', ...new Set(menu.map((item) => item.category
))]

function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(menuCategories)

  const filterCategories=(category)=>{
    if(category === 'all'){
      setMenuItems(menu)
      return;
    }
    const newCategories = menu.filter((item)=> item.category === category)
    setMenuItems(newCategories)
  }
  return (
    <main>
      <section className='menu section'>
          <div className="title">
              <h2>Available Menu</h2>
              <div className='underline'></div>
          </div>
              <Categories categories={categories} filterCategories={filterCategories} />
              <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
