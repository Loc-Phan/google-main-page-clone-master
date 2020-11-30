import React, { useEffect, useState } from 'react';
import { HiPencil } from "react-icons/hi";
import { CustomizeLayout } from '../Footer-Layout/CustomizeLayout/CustomizeLayout';
import { BsLink } from "react-icons/bs";
import "./Footer.scss";

export const Footer = ({
    backgroundImage,
    setBackgroundImage,
    setDefaultBackground,
    setImageDefaultBackground,
}) => {
    const [showCustomizeLayout, setShowCustomizeLayout] = useState(false);
    const [linkIcon, setLinkIcon] = useState("");
    const [authorImage, setAuthorImage] = useState("");
    const [showBackgroundImageAttributes, setShowBackgroundImageAttributes] = useState(false);
    const [defaultInfoImage, setDefaultInfoImage] = useState(false);
    // const preAuthorImage = "";
    useEffect(() => {
        if (authorImage !== "") {
            setShowBackgroundImageAttributes(true);
        }
    });
    useEffect(() => {
        if (defaultInfoImage) {
            setAuthorImage(authorImage);
            setDefaultInfoImage(false);
        }
    })
    return (
        <div
            className="footer-container"
        >
            {showBackgroundImageAttributes && (
                <a
                    className="bg-image-attribution"
                    href={linkIcon}
                >
                    <BsLink
                        style={{ fontSize: "18", marginRight: 8 }}
                    />
                    <div className="link-icon">{authorImage}</div>
                </a>
            )}
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
                    setLinkIcon={setLinkIcon}
                    setAuthorImage={setAuthorImage}
                    defaultInfoImage={defaultInfoImage}
                    setDefaultInfoImage={setDefaultInfoImage}
                // setShowBackgroundImageAttribute={setShowBackgroundImageAttribute}
                />
            )}
        </div>
    )
}