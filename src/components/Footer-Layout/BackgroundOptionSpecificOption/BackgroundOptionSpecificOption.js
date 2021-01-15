import React, { useState, useEffect } from "react";
import "./BackgroundOptionSpecificOption.scss";

export const BackgroundOptionSpecificOption = ({
    urlImage,
    authorImage,
    sourceImage,
    urlImageSelected,
    setUrlImageSelected,
    setImageAttribution
}) => {
    const [paddingOnClick, setPaddingOnClick] = useState("0px");
    const [choosen, setChoosen] = useState(false);

    useEffect(() => {
        if (urlImageSelected !== urlImage) {
            setPaddingOnClick("0px");
            setChoosen(false);
        }
    }, [urlImageSelected, urlImage]);

    return (
        <div className="background-option-specific-option-container">
            <div className="background-option-specific-option-buffer">
                <div
                    className="option-container"
                    title={`Photo by ${authorImage}`}
                    style={{ padding: paddingOnClick }}
                    onClick={() => {
                        setPaddingOnClick("15px");
                        setUrlImageSelected(urlImage);
                        setChoosen(true);
                        setImageAttribution({ author: authorImage, source: sourceImage });
                    }}
                >
                    {choosen && <div className="choose-icon">✓</div>}
                    <img
                        src={urlImage.replace("WIDTH", "176").replace("HEIGHT", "176")}
                        alt={`${authorImage}`}
                        className="img-fluid"
                    ></img>
                </div>
            </div>
        </div>
    );
};