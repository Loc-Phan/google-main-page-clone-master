import React, { useState } from 'react';
import './Header.scss';

export const Header = () => {
    const [showGoogleApps, setShowGoogleApps] = useState(false);
    const [showGoogleAccount, setShowGoogleAccount] = useState(false);
    return (
        <div className="container-header">
            <div className="header-item">
                <a href="https://mail.google.com/">Gmail</a>
            </div>
            <div className="header-item">
                <a href="https://image.google.com/">Images</a>
            </div>
            <div className="header-item container-google-apps-expand-icon">
                <div className="google-apps-round"
                    data-title="Google apps"
                    onClick={() => {
                        if (showGoogleApps) showGoogleApps(false);
                        else setShowGoogleApps(true);
                    }}
                >
                    <div className="image-container"></div>
                </div>
            </div>
            <div className="header-item container-google-account-expand-icon">
                <div
                    className="google-account-round"
                    data-title="pcloc101099@gmail.com"
                    onClick={() => {
                        if (showGoogleAccount) setShowGoogleAccount(false);
                        else setShowGoogleAccount(true);
                    }}
                >
                    <div className="image-container"></div>
                </div>
            </div>
        </div>
    );
}
