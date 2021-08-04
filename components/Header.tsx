import Link from "next/link"

const styles = {
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end"
}

const Header = () => {
  return (
    <header>
      <div className="row" style={styles}>
          <Link href="/menu">
            <a className="button">Menu</a>
          </Link>
      </div>
    </header>
  )
}

export default Header