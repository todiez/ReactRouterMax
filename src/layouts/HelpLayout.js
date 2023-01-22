import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorum
        veritatis nobis officia sequi, beatae accusantium harum! Delectus ex
        libero reiciendis consectetur, dolorem molestias dolor culpa! Voluptates
        reprehenderit aliquid unde.
      </p>
      <Outlet></Outlet>
    </div>
  );
}
