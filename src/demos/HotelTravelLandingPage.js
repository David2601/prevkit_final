import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/TwoColWithButton.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm.js";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <SliderCard />
    <TrendingCard />
    <Contact/>
    <Footer />
  </AnimationRevealPage>
);
