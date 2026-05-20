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

function App() {
  return (
    <>
      {window.location.pathname === "/website-development" ? (
        <WebsiteDevelopment />

      ) : window.location.pathname === "/amazon-store-management" ? (
        <AmazonStoreManagement />

      ) : window.location.pathname === "/walmart-marketplace-management" ? (
        <WalmartMarketplaceManagement />

      ) : window.location.pathname === "/tiktok-shop-management" ? (
        <TikTokShopManagement />

      ) : window.location.pathname === "/shopify-store-development" ? (
        <ShopifyStoreDevelopment />

      ) : window.location.pathname === "/woocommerce-development" ? (
        <WooCommerceDevelopment />

      ) : window.location.pathname === "/project-form" ? (
        <ProjectForm />

      ) : window.location.pathname === "/experience-journey" ? (
        <ExperienceJourney />

      ) : window.location.pathname === "/international-clients" ? (
        <InternationalClients />

      ) : window.location.pathname === "/multi-channel-expertise" ? (
        <MultiChannelExpertise />

      ) : window.location.pathname === "/wordpress-store-dev" ? (
        <WordpressStoreDev />

      ) : (
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
      )}
    </>
  );
}

export default App;
