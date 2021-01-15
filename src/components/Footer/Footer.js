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
    const [imageDefaultAttribution, setImageDefaultAttribution] = useState({ author: null, source: null });
    const [imageAttribution, setImageAttribution] = useState({ ...imageDefaultAttribution });
    const [defaultImage, setDefaultImage] = useState(false);

    useEffect(() => {
        if (defaultImage) {
            setImageAttribution({ ...imageDefaultAttribution });
            setDefaultImage(false);
        }
    }, [defaultImage, imageDefaultAttribution]);

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
                    imageAttribution={imageAttribution}
                    setImageAttribution={setImageAttribution}
                    setImageDefaultAttribution={setImageDefaultAttribution}
                    setDefaultImage={setDefaultImage}
                />
            )}
        </div>
    )
}