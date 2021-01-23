import React, { useContext } from 'react'
import "./FormItem.css"
import { context } from "../Context"

function FormItem({ all }) {

    const {del, importItem} = useContext(context);

    return (
        <div className="formItem_wrapper">
            <p className={ all.imp ? "importP" : "item_title" }>{ all.name } <span style={all.imp ? {color: "red"} : {display : "none"}}>!</span></p>
            <p className="price_title">${ all.price }</p>
            <div className="item_icons">
            <i class="fas fa-exclamation-circle penIcon" onClick={() => importItem(all.id)}></i>
            <i class="fas fa-trash deleteIcon" onClick={() => del(all.id)}></i>
            </div>
        </div>
    )
}

export default FormItem;
