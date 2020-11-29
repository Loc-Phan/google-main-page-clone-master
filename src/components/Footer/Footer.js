import React, { useEffect, useRef, useState } from 'react';
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
    // const [showBackgroundImageAttributes, setShowBackgroundImageAttributes] = useState(false);
    // const [showBackgroundImageAttribute, setShowBackgroundImageAttribute] = useState(false);
    // const preAuthorImage = useRef("");
    // useEffect(() => {
    //     if (authorImage !== "") {
    //         const newAuthorImage = preAuthorImage.current;
    //         preAuthorImage.current = authorImage;
    //         if (authorImage !== newAuthorImage) {
    //             if (showBackgroundImageAttribute === false) {
    //                 setAuthorImage(newAuthorImage);
    //                 setShowBackgroundImageAttributes(false);
    //             }
    //             else {
    //                 setAuthorImage(authorImage);
    //                 setShowBackgroundImageAttributes(true);
    //             }
    //         }
    //     }
    // }, [authorImage]);
    return (
        <div
            className="footer-container"
        >
            {/* {showBackgroundImageAttributes && (
                <a
                    className="bg-image-attribution"
                    href={linkIcon}
                >
                    <BsLink
                        style={{ fontSize: "18", marginRight: 8 }}
                    />
                    <div className="link-icon">{authorImage}</div>
                </a>
            )} */}
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
                // setShowBackgroundImageAttribute={setShowBackgroundImageAttribute}
                />
            )}
        </div>
    )
}