import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-section">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
