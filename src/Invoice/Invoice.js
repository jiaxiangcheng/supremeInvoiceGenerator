import React, { useState } from "react";
import "./Invoice.css";

const Item = (props) => {
    const { id, name, price, color, size, imgUrl } = props;
    return (
        <div className="item">
            <div className="itemImage">
                <img src={imgUrl} width="80"></img>
            </div>
            <div className="itemInfo">
                <div id="name">
                    <p>{name}</p>
                </div>
                {() => {
                    if (size !== "any") {
                        return (
                            <div id="size">
                                <p>{"Size: " + size}</p>
                            </div>
                        );
                    }
                }}
                <div id="style">
                    <p>{"Style: " + color}</p>
                </div>
            </div>
            <div className="itemPrice">
                <p>{price}</p>
            </div>
        </div>
    );
};

function Invoice() {
    let billingInfoJson = JSON.parse(localStorage.getItem("billingInfo"));
    let itemsListJson = JSON.parse(localStorage.getItem("itemsList"));

    let billingInfo = {
        name: billingInfoJson["name"],
        orderNumer: billingInfoJson["orderNumer"],
        date: billingInfoJson["date"],
        email: billingInfoJson["email"],
        address1: billingInfoJson["address1"],
        address2: billingInfoJson["address2"],
        telephone: billingInfoJson["telephone"],
        city: billingInfoJson["city"],
        zipCode: billingInfoJson["zipCode"],
    };

    let itemsList = [];
    let total = 0;
    let cartTotal = 0;
    let salesTax = 0;
    let shipHandle = 0;
    for (var i = 0; i < itemsListJson.length; i++) {
        itemsList.push({
            id: itemsListJson[i]["id"],
            name: itemsListJson[i]["name"],
            price: itemsListJson[i]["price"],
            color: itemsListJson[i]["color"],
            size: itemsListJson[i]["size"],
            imgUrl: itemsListJson[i]["imgUrl"],
        });

        let price = itemsListJson[i]["price"];
        price = price.substring(2, price.length);
        price = parseInt(price);
        total = total + price;
    }

    shipHandle = 14.88;
    salesTax = (total * 0.173549107).toFixed(2);
    cartTotal = (total - 14.88 - salesTax).toFixed(2);
    total = total.toFixed(2);

    return (
        <div className="container">
            <div className="header">
                <img
                    src="https://logos-marcas.com/wp-content/uploads/2020/04/Supreme-Logo.png"
                    width="150"
                ></img>
                <p id="date">{billingInfo.date}</p>

                <p id="orderNumber">
                    <b>{"Order #" + billingInfo.orderNumer}</b>
                </p>
            </div>
            <div className="body">
                <hr className="dividerLine" />
                <div className="itemList">
                    {itemsList.map((item) => {
                        return <Item key={item.id} {...item}></Item>;
                    })}
                </div>
                <hr className="dividerLine" />
                <div className="totalPrice">
                    <div className="details">
                        <p>{"cart total " + "€ " + cartTotal}</p>
                        <p>{"ship & handle " + "€ 14.88"}</p>
                        <p>{"sales tax " + "€ " + salesTax}</p>
                        <p>{"order total € " + total}</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="address">
                    <p>
                        <b>Address</b>
                    </p>
                    <p>{billingInfo.name}</p>
                    <p>{billingInfo.address1 + " " + billingInfo.address2}</p>
                    <p>{billingInfo.zipCode + " " + billingInfo.city}</p>
                    <p>{"Phone: " + billingInfo.telephone}</p>
                    <p>{"Email: " + billingInfo.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
