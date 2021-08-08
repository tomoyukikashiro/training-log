import {VFC} from "react";
import Link from "next/link"

const Menu: VFC = () => {
  return (
    <div className="container" style={{paddingTop: "40px"}}>
      <div className="row">
        <ul className="nine columns" style={{ float: "none", margin: "auto" }}>
          <li>
            <Link href="/">Loging</Link>
          </li>
          <li>
            <Link href="/latest">Latest</Link>
          </li>
          <li>
            <Link href="/summary">Summary</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu