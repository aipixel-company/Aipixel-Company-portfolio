import Main from "./Layout/Main";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeStock from "./Pages/HomeStock";
import AboutStock from "./Pages/AboutStock";
import ServicesStock from "./Pages/ServicesStock";
import BlogStock from "./Pages/BlogStock";
import ClientsStock from "./Pages/ClientsStock";
import ExpertiseStock from "./Pages/ExpertiseStock";
import IndustriesStock from "./Pages/IndustriesStock";
import ContactUsStock from "./Pages/ContactUsStock";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<HomeStock />} />
      <Route path="aboutus" element={<AboutStock />} />
      <Route path="contact-us" element={<ContactUsStock />} />
      <Route path="services" element={<ServicesStock/>} />
      
      <Route path="clients" element={<ClientsStock/>} />
      
      <Route path="expertise" element={<ExpertiseStock/>} />
      <Route path="industries" element={<IndustriesStock/>} />

      
      <Route path="blogs" element={<BlogStock/>} />
      {/* <Route path="ourwork" element={<WorkStock />} /> */}
    </Route>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
