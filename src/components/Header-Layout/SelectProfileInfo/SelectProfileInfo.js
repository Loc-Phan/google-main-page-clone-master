import React, { useEffect, useState } from 'react';
import { MdClose } from "react-icons/md";
import { UploadPhoto } from '../GoogleApp-Layout/UploadPhoto';

import "./SelectProfileInfo.scss";

const UPLOAD_PHOTO = "UPLOAD_PHOTOS";
const YOUR_PHOTO = "YOUR_PHOTO";

export const SelectProfileInfo = ({ showSelectProfileInfo, setShowSelectProfileInfo }) => {
    const [active, setActive] = useState(UPLOAD_PHOTO);
    const handleClickActive = (event) => {
        if (event.target.className.includes("upload-photos"))
            setActive(UPLOAD_PHOTO)
        else if (event.target.className.includes("your-photos"))
            setActive(YOUR_PHOTO);
    }

    const [heightContainer, setHeightContainer] = useState(window.innerHeight * 0.85);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setHeightContainer(window.innerWidth * 0.65 * 0.62);
        })
    }, []);

    return (
        <div className="select-profile-info-container-overlay">
            <div className="select-profile-info-container-buffer" style={{ height: heightContainer }}>
                <div className="header">
                    <div className="title-select-profile-info-container">
                        <div className="text">Select Profile Photo</div>
                    </div>
                    <div className="close-button">
                        <MdClose
                            className="close"
                            onClick={() => {
                                setShowSelectProfileInfo(false)
                            }}
                        />
                    </div>
                </div>
                <div className="select-status-container">
                    <div
                        className={active === UPLOAD_PHOTO ? "status upload-photos active" : "status upload-photos"}
                        onClick={(event) => { handleClickActive(event) }}
                    >
                        Upload photos
                    </div>
                    <div
                        className={active === YOUR_PHOTO ? "status your-photos active" : "status your-photos"}
                        onClick={(event) => { handleClickActive(event) }}
                    >
                        Your photos
                    </div>
                </div>
                <div className="choose-photos-component-container">
                    {active === UPLOAD_PHOTO && (
                        <UploadPhoto />
                    )}
                </div>
            </div>
        </div>
    )
}