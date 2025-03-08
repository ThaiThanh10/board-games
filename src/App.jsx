import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Header, Footer } from "./components"
import { BlogPage, Courses, HomePage, Puzzles, Worksheets } from "./pages"

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/courses"
            element={<Courses />}
          />
          <Route
            path="/worksheets"
            element={<Worksheets />}
          />
          <Route
            path="/puzzles"
            element={<Puzzles />}
          />
          <Route
            path="/blog"
            element={<BlogPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
