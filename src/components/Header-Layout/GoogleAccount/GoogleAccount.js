import React, { useEffect } from 'react';
import { AccountInfo } from '../GoogleApp-Layout/AccountInfo';
import { AccountItem } from '../GoogleApp-Layout/AccountItem';
import { AddAnotherAccount } from '../GoogleApp-Layout/AddAnotherAccount';
import { FooterGoogleAccount } from '../GoogleApp-Layout/FooterGoogleAccount';
import { SignoutAccount } from '../GoogleApp-Layout/SignoutAccount';

import { auth } from "../../../firebase/index";

import "./GoogleAccount.scss";
import { useState } from 'react';

export const GoogleAccount = ({
    outsideClick,
    showSelectProfileInfo,
    setShowSelectProfileInfo,
    setUserInfo
}) => {
    const [heightContainer, setHeightContainer] = useState(467);
    const [currentUser, setCurrentUser] = useState(null);
    const accountList = [
        {
            avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu_U8S72AKG_7fiCZDleieYV8x4oFC8Btt9zKssz=s83-c-mo",
            name: "Phan Cảnh Lộc",
            email: "pcloc101099@gmail.com",
        },
        {
            avatar: "https://lh3.googleusercontent.com/-A1lUXyyCP7Q/XhDIuG5FAHI/AAAAAAAAC20/uNbfoAqTnKYdAY3WF42C5sq3YL6I-2w9gCEwYBhgLKtQDAL1OcqzKVV_kKgBTm3vpxFz1HncCRUz3o9Ou4Ih37qxMVawHhKfWTbFQIbVoEXJK50W0Hp4cYhC0t95I9SvxMCjJMYdbaQAUpNdwC9RO-iA-pP-JvS0dtbFPYG_6Z90XCBh5-yxTObMrzY4M9pMplIgwJPw2eH_09TA2iYOruCcbUrM98auu2vfMvN3UN825cM5BI9RGy-hkKgTr6dVhxbZw_yyaVcWspEZMmw1niR-F2OgmDLG-QSUqHOunGxz_-ZnLMi2MOQXhmNRO0WXHyQp2o1UfCEbYBUnCsHMTs7weJ7_AGY0Vq6y2Z3yr6VKqrdo0RAUjPNe_lKMms-_1pRHOin6kb_KLYE_urK4sbI0sOKS23xLcslJoUBz9rQ04u2n0oDCN0--Ze57stw4q8LP2huVBeXoMrkffn4In3MAwHpYGdJIcRLGRSok5t_u-jowauIH-PoD8Y7VpWugYpjMluq5X_cfCUT7HoCCUrECVl--vSWmKWUe-t0XO0C_QBEoJhrOUBKiJ81pnooSiZDaBAfdJysBIoqt_Pv_38SM0SiLZtx_VMaXECldGkaC9XmXGmqJ774JcXuFLZwstsKOI59awIC1D2yfwbEuORB7A8vKcMI7TiP0F/w139-h140-p/2020-01-04.jpg",
            name: "Cảnh Lộc Phan",
            email: "vuizuizui1010@gmail.com",
        }
    ];
    const [tempList, setTempList] = useState(accountList);
    const [mainUser, setMainUser] = useState({ ...accountList[1] });
    const [subUser, setSubUser] = useState({ ...accountList[0] });

    useEffect(() => {
        if (currentUser !== null) {
            const temp = { avatar: currentUser.photoURL, name: currentUser.displayName, email: currentUser.email };
            const list = tempList;
            if (temp.avatar !== undefined) {
                list.push(temp);
                setTempList(list);
                setMainUser({ ...tempList[tempList.length - 1] });
                setSubUser({ ...tempList[tempList.length - 2] });
                setUserInfo({ ...tempList[tempList.length - 1] });
            }
        }
    }, [setTempList, tempList, currentUser, setUserInfo]);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser({ ...user });
        });
        return () => { unsubscribeFromAuth(); }
    }, []);

    useEffect(() => {
        if (window.innerHeight < 630) {
            setHeightContainer(window.innerHeight - 58 - 20);
        }
        function onResizeWindow() {
            if (window.innerHeight > 630) setHeightContainer(500);
            else setHeightContainer(window.innerHeight - 58 - 20);
        }
        window.onresize = onResizeWindow;
    }, []);

    return (
        <div
            className="container-google-account-container"
            ref={outsideClick}
            style={{ height: heightContainer }}
        >
            <AccountInfo
                showSelectProfileInfo={showSelectProfileInfo}
                setShowSelectProfileInfo={setShowSelectProfileInfo}
                mainUser={mainUser}
            />
            <AccountItem
                avatar={subUser.avatar}
                name={subUser.name}
                email={subUser.email}
            />
            <AddAnotherAccount />
            <SignoutAccount />
            <FooterGoogleAccount />
        </div>
    )
}