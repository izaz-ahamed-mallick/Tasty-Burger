import Layout from "../../components/Layout/Layout";
import HeroSection from "../Section/HeroSection";
import "../../styles/HeroSection.css";

import AboutSection from "../Section/AboutSection";
import FoodCard from "../Section/FoodCard";
import PromotionSection from "../Section/PromotionSection";
import ShopSection from "../Section/ShopSection";
import BlogSection from "../Section/BlogSection";
import ContactSection from "../Section/ContactSection";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <FoodCard />
            <PromotionSection />
            <ShopSection />
            <BlogSection />
            <ContactSection />
        </Layout>
    );
};

export default Home;
