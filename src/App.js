import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactPopup from "./ContactPopup";
import WordpressStoreDev from "./WordpressStoreDev";
import MultiChannelExpertise from "./MultiChannelExpertise";
import ProjectForm from "./ProjectForm";
import ExperienceJourney from "./ExperienceJourney";
import InternationalClients from "./InternationalClients";

import AmazonStoreManagement from "./AmazonStoreManagement";
import WalmartMarketplaceManagement from "./WalmartMarketplaceManagement";
import TikTokShopManagement from "./TikTokShopManagement";
import ShopifyStoreDevelopment from "./ShopifyStoreDevelopment";
import WooCommerceDevelopment from "./WooCommerceDevelopment";

import "./App.css";

import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Experience from "./Experience";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import WebsiteDevelopment from "./WebsiteDevelopment";
import Projects from "./Projects";

// Main Landing Page Component
function HomePage() {
  return (
    <div className="App">
      <ContactPopup />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/amazon-store-management" element={<AmazonStoreManagement />} />
        <Route path="/walmart-marketplace-management" element={<WalmartMarketplaceManagement />} />
        <Route path="/tiktok-shop-management" element={<TikTokShopManagement />} />
        <Route path="/shopify-store-development" element={<ShopifyStoreDevelopment />} />
        <Route path="/woocommerce-development" element={<WooCommerceDevelopment />} />
        <Route path="/project-form" element={<ProjectForm />} />
        <Route path="/experience-journey" element={<ExperienceJourney />} />
        <Route path="/international-clients" element={<InternationalClients />} />
        <Route path="/multi-channel-expertise" element={<MultiChannelExpertise />} />
        <Route path="/wordpress-store-dev" element={<WordpressStoreDev />} />
      </Routes>
    </Router>
  );
}

export default App;
