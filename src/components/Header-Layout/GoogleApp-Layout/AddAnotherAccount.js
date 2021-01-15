import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { signInWithGoogle } from "../../../firebase/index";

import "../../../css/AddAnotherAccount.scss";

export const AddAnotherAccount = () => {
    return (
        <div
            className="add-another-account-container"
        >
            <div
                className="add-another-account"
                onClick={signInWithGoogle}
            // href="https://accounts.google.com/AddSession?hl=en&continue=https://www.google.com%3Fhl%3Den-US"
            >
                <AiOutlineUserAdd className="add-another-account-buffer" />
                <div className="add-another-account-text">Add another account</div>
            </div>
        </div>
    )
}