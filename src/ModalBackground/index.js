import React from "react";
import ReactDom from "react-dom";
import './ModalBackground.css'
function ModalBackground({children}){
    return ReactDom.createPortal(
    <div className="ModalBackground">
        {children}
    </div>,
    document.getElementById('modal')
    )
}

export {ModalBackground}