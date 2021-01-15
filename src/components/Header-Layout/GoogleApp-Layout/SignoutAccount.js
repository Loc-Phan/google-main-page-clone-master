import React from 'react'

import { auth } from '../../../firebase/index';

import "../../../css/SignoutAccount.scss";

export const SignoutAccount = () => {
    return (
        <div className="signout-account-container" onClick={() => auth.signOut()}>
            <a
                className="signout-account"
                href="https://accounts.google.com/signin/v2/identifier?hl=vi&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAAQ&flowName=GlifWebSignIn&flowEntry=AddSession"
            >
                Sign out of all accounts
            </a>
        </div>
    )
}