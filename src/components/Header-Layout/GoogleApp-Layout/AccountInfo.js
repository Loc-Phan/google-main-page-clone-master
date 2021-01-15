import React from 'react'
import { AiOutlineCamera } from "react-icons/ai";

export const AccountInfo = ({
    showSelectProfileInfo,
    setShowSelectProfileInfo,
    mainUser
}) => {
    // const [showSelectProfileInfo, setShowSelectProfileInfo] = useState(false);
    const hanleClickSelectProfileInfo = () => {
        if (!showSelectProfileInfo)
            setShowSelectProfileInfo(true);
    }
    return (
        <div className="avatar">
            <div className="avatar-container">
                <img
                    src={mainUser.avatar}
                    alt="avatar"
                    className="img-fluid"
                >
                </img>
                <div
                    className="camera-container"
                    onClick={hanleClickSelectProfileInfo}
                >
                    <AiOutlineCamera className="camera-setting-avatar" />
                </div>
            </div>
            <div className="info-account">
                <div className="name-account">{mainUser.name}</div>
                <div className="email-account">{mainUser.email}</div>
                <div className="manage-account">
                    <a href="https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=act">
                        Manage your Google Account
                        </a>
                </div>
            </div>
        </div>
    )
}