import { Link } from "react-router-dom";


export default function Nav({ categories = [], subCategories = [], specialLinks = [] }) {
  return (
      <nav className='header-bottom' style={{ backgroundColor: "green" }}>
          <div className='nav-left'>
              <ul className='nav-main'>
                  {categories.map((category, index) => (
                      <li key={index}>
                          <a href={category.link}>{category.label}</a>
                      </li>
                  ))}
              </ul>
              <span>|</span>
              <ul className='nav-sub'>
                  {subCategories.map((sub, index) => (
                      <li key={index}>
                          <a href={sub.link}>{sub.label}</a>
                      </li>
                  ))}
              </ul>
          </div>
          <div className='nav-right'>
              <ul className='nav-special'>
                  {specialLinks.map((special, index) => (
                      <li key={index}>
                          <a href={special.link}>{special.label}</a>
                      </li>
                  ))}
              </ul> 
          </div>
      </nav>
  );
}