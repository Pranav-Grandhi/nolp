import HeroSection from "components/hero-section";
import BackgroundSlider from "components/BackgroundSlider";
import { LogoColor } from "components/vars";

export default function Presentation() {
    return (
        <div>
            <HeroSection
                children={ //change these later
                    <BackgroundSlider
                        images={[
                            'images/clothesShop.jpg',
                            'images/coffeeShop.jpg',
                            'images/coffeeShop2.jpg',
                            'images/handicraftShop.jpg',
                        ]}
                    duration={8}
                    transition={2}
                  />}
                title="Nolp"
                subtitle="Pranav Grandhi, Agastya Gaur, Eric Gan (Period 1)"
            />
        </div>
    )
}