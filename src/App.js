import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages import
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayout}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
