import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesTwo from "./pages/services/ServicesTwo";
import ServiceDetailsTwo from "./pages/details-page/service-details/ServiceDetailsTwo";
import ServiceDetailsOne from "./pages/details-page/service-details/ServiceDetailsOne";
import ServicesOne from "./pages/services/ServicesOne";
import ProjectDetails from "./pages/details-page/ProjectDetails";
import BlogOne from "./pages/blogs/BlogOne";
import BlogTwo from "./pages/blogs/BlogTwo";
import BlogDetails from "./pages/details-page/BlogDetails";
import ProjectsOne from "./pages/projects/ProjectsOne";
import ProjectsTwo from "./pages/projects/ProjectsTwo";
import ScrollToTop from "./common/ScrollToTop";
import TeamMembersPage from "./pages/TeamMembersPage";
import BlogWithSidebar from "./pages/blogs/BlogWithSidebar";
import ContactUs from "./pages/ContactUs";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path={'/services-1'} element={<ServicesOne/>}/>
                <Route exact path={'/services-2'} element={<ServicesTwo/>}/>
                <Route exact path={'/service-details/:id'} element={<ServiceDetailsOne/>}/>
                <Route exact path={'/service-details-two/:id'} element={<ServiceDetailsTwo/>}/>
                <Route exact path={'/projects-1'} element={<ProjectsOne/>}/>
                <Route exact path={'/projects-2'} element={<ProjectsTwo/>}/>
                <Route exact path={'/project-details/:id'} element={<ProjectDetails/>}/>
                <Route exact path={'/blogs-1'} element={<BlogOne/>}/>
                <Route exact path={'/blogs-2'} element={<BlogTwo/>}/>
                <Route exact path={'/blog-with-sidebar'} element={<BlogWithSidebar/>}/>
                <Route exact path={'/blog-details/:id'} element={<BlogDetails/>}/>
                <Route exact path={'/employees'} element={<TeamMembersPage/>}/>
                <Route exact path={'/contact-us'} element={<ContactUs/>}/>
                <Route exact path={'/about'} element={<AboutUsPage/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
