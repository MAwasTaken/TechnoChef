// react
import { Link } from "react-router-dom"

// react icons
import {BiSearch} from 'react-icons/bi'

// header
const Header = () => {
  // tsx
  return (
    // container
    <header>
      {/* right section */}
      <div>
        {/* logo */}
        <Link to="/">TechnoChef</Link>
      </div>
      {/* center section */}
      <div>
        {/* navigation */}
        <ul>
          {/* home */}
          <li>خانه</li>
          {/* products */}
          <li>محصولات</li>
          {/* about us */}
          <li>درباه‌ما</li>
        </ul>
      </div>
      {/* left section */}
      <div>
        {/* search button */}
        <button>
          <BiSearch />
        </button>
        {/* login / register / panel button */}
        <button>
          {/* login */}
          <span>ورود</span>
          {/* divider */}
          <span></span>
          {/* register */}
          <span>ثبت نام</span>
        </button>
      </div>
    </header>
  )
}

// exports
export default Header