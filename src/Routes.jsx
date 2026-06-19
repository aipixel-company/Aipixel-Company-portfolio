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
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TrendingBlogsSection from "./Components/TrendingBlogsSection";
import ServiceDetail from "./Pages/ServiceDetail";
import ExpertiseDetail from "./Pages/ExpertiseDetail";
import IndustryDetail from "./Pages/IndustryDetail";
import CaseStudyDetail from "./Pages/CaseStudyDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<HomeStock />} />
      <Route path="aboutus" element={<AboutStock />} />
      <Route path="contact-us" element={<ContactUsStock />} />
      <Route path="services" element={<ServicesStock />} />
      <Route path="services/:id" element={<ServiceDetail />} />

      <Route path="clients" element={<ClientsStock />} />
      <Route path="clients/:id" element={<CaseStudyDetail />} />

      <Route path="expertise" element={<ExpertiseStock />} />
      <Route path="expertise/:id" element={<ExpertiseDetail />} />

      <Route path="industries" element={<IndustriesStock />} />
      <Route path="industries/:id" element={<IndustryDetail />} />

      <Route path="blogs" element={<BlogStock />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      
      <Route path="/blog/:id" element={<TrendingBlogsSection />} />
    </Route>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
