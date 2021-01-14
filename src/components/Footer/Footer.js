import React, { useEffect, useState } from 'react';
import { HiPencil } from "react-icons/hi";
import { MdLink } from "react-icons/md";
import { CustomizeLayout } from '../Footer-Layout/CustomizeLayout/CustomizeLayout';
import "./Footer.scss";

export const Footer = ({
    backgroundImage,
    setBackgroundImage,
    setDefaultBackground,
    setImageDefaultBackground,
}) => {
    const [showCustomizeLayout, setShowCustomizeLayout] = useState(false);
    const [imageAttribution, setImageAttribution] = useState({ author: null, source: null });
    const [defaultInfoImage, setDefaultInfoImage] = useState(false);

    useEffect(() => {
        if (defaultInfoImage) {
            setDefaultInfoImage(false);
        }
    }, [defaultInfoImage]);
    return (
        <div
            className="footer-container"
        >
            {
                imageAttribution.author ? <a
                    className="background-image-attribution"
                    href={imageAttribution.source}
                >
                    <MdLink className="link-icon-link" />
                    <div className="image-attribution">{`Photo by ${imageAttribution.author}`}</div>
                </a>
                    : <div className="background-image-attribution"></div>
            }
            <div
                className="customize-button"
                title="Customize this page"
                onClick={() => { setShowCustomizeLayout(!showCustomizeLayout) }}
            >
                <HiPencil
                    className="customize-icon"
                />
                <div className="customize-text">Customize</div>
            </div>
            {showCustomizeLayout && (
                <CustomizeLayout
                    backgroundImage={backgroundImage}
                    setBackgroundImage={setBackgroundImage}
                    setDefaultBackground={setDefaultBackground}
                    setShowCustomizeLayout={setShowCustomizeLayout}
                    setImageDefaultBackground={setImageDefaultBackground}
                    defaultInfoImage={defaultInfoImage}
                    setDefaultInfoImage={setDefaultInfoImage}
                    setImageAttribution={setImageAttribution}
                    imageAttribution={imageAttribution}
                />
            )}
        </div>
    )
}