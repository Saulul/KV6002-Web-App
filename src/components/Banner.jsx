import React, {useState, useEffect} from "react";

const Banner = () => {
    const [image, setImage] = useState("/assets/home-banner.png");
    const [text, setText] = useState("Made for those who do");

    useEffect(() => {
        const images = ["/assets/home-banner-1.png", "/assets/home-banner-2.png", "/assets/home-banner-3.png"];
        const texts = ["Made for those who do", "Made for the proud", "Made for the first timers"];
        const randomIndex = Math.floor(Math.random() * images.length);
        setImage(images[randomIndex]);
        setText(texts[randomIndex]);
    }, []);

    return (
        <div
            className="flex overflow-hidden relative flex-col px-9 py-12 mt-8 w-full min-h-[596px] max-md:px-5 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet={image}
                className="object-cover absolute inset-0 size-full"
                alt={"banner"}/>
            <div
                className="flex justify-center items-center relative self-center mt-16 text-6xl font-bold text-center text-white uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl"
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                {text}
            </div>
        </div>
    );
};

export default Banner;

