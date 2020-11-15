import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";

import "../../../css/UploadPhoto.scss";

const START = "START";
const UPLOADING = "UPLOADING";
const DISPLAY = "DISPLAY";

export const UploadPhoto = () => {
    const [status, setStatus] = useState(START);
    const [showHightLight, setShowHightLight] = useState(false);
    return (
        <div className="upload-photos-component">
            <div className={showHightLight ? "drop-area highlight" : "drop-area"}>
                {status === START && (
                    <form className="my-form">
                        <input
                            type="file"
                            id="fileElement"
                            multiple={false}
                            accept="image/*"
                        // onChange={(event) => { }}
                        ></input>
                        <label
                            className="button"
                            htmlFor="fileElement"
                        >
                            <div className="image-icon"></div>
                            <div className="big-text text">Drag a profile photo here</div>
                            <div className="small-text text">— or —</div>
                            <div className="select-button">
                                Select a photo from your computer
                            </div>
                        </label>
                    </form>
                )}
            </div>
        </div>
    );
};