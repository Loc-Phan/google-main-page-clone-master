import React, { useState, useRef } from 'react';
import { GoogleAccount } from '../Header-Layout/GoogleAccount/GoogleAccount';
import { GoogleAppsContainer } from "../Header-Layout/GoogleAppsContainer/GoogleAppsContainer";
import { SelectProfileInfo } from "../Header-Layout/SelectProfileInfo/SelectProfileInfo";
import useOutsideClick from "../Helpers/Helpers";
import './Header.scss';

export const Header = () => {
    const [showGoogleApps, setShowGoogleApps] = useState(false);
    const [showGoogleAccount, setShowGoogleAccount] = useState(false);
    const [showSelectProfileInfo, setShowSelectProfileInfo] = useState(false);
    const [userInfo,setUserInfo] = useState({
        avatar:"https://lh3.googleusercontent.com/-A1lUXyyCP7Q/XhDIuG5FAHI/AAAAAAAAC20/uNbfoAqTnKYdAY3WF42C5sq3YL6I-2w9gCEwYBhgLKtQDAL1OcqzKVV_kKgBTm3vpxFz1HncCRUz3o9Ou4Ih37qxMVawHhKfWTbFQIbVoEXJK50W0Hp4cYhC0t95I9SvxMCjJMYdbaQAUpNdwC9RO-iA-pP-JvS0dtbFPYG_6Z90XCBh5-yxTObMrzY4M9pMplIgwJPw2eH_09TA2iYOruCcbUrM98auu2vfMvN3UN825cM5BI9RGy-hkKgTr6dVhxbZw_yyaVcWspEZMmw1niR-F2OgmDLG-QSUqHOunGxz_-ZnLMi2MOQXhmNRO0WXHyQp2o1UfCEbYBUnCsHMTs7weJ7_AGY0Vq6y2Z3yr6VKqrdo0RAUjPNe_lKMms-_1pRHOin6kb_KLYE_urK4sbI0sOKS23xLcslJoUBz9rQ04u2n0oDCN0--Ze57stw4q8LP2huVBeXoMrkffn4In3MAwHpYGdJIcRLGRSok5t_u-jowauIH-PoD8Y7VpWugYpjMluq5X_cfCUT7HoCCUrECVl--vSWmKWUe-t0XO0C_QBEoJhrOUBKiJ81pnooSiZDaBAfdJysBIoqt_Pv_38SM0SiLZtx_VMaXECldGkaC9XmXGmqJ774JcXuFLZwstsKOI59awIC1D2yfwbEuORB7A8vKcMI7TiP0F/w139-h140-p/2020-01-04.jpg",
        email:"vuizuizui1010@gmail.com"
        });
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (showGoogleApps) setShowGoogleApps(false);
        if (showGoogleAccount) setShowGoogleAccount(false);
    });
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
                    onClick={() => setShowGoogleApps(!showGoogleApps)}
                >
                    <div className="image-container"></div>
                </div>
            </div>
            <div className="header-item container-google-account-expand-icon" >
                <div
                    className="google-account-round"
                    data-title={`${userInfo.email}`}
                    onClick={() => setShowGoogleAccount(!showGoogleAccount)}
                >
                    <div 
                        className="image-container"
                        style={{backgroundImage: `url(${userInfo.avatar})`}}
                    >
                    </div>
                </div>
            </div>
            {showGoogleApps && <GoogleAppsContainer outsideClick={ref} />}
            {showGoogleAccount &&
                <GoogleAccount
                    outsideClick={ref}
                    showSelectProfileInfo={showSelectProfileInfo}
                    setShowSelectProfileInfo={setShowSelectProfileInfo}
                    setUserInfo={setUserInfo}
                />
            }
            {showSelectProfileInfo && (
                <SelectProfileInfo
                    showSelectProfileInfo={showSelectProfileInfo}
                    setShowSelectProfileInfo={setShowSelectProfileInfo}
                />
            )}
        </div>
    );
}
