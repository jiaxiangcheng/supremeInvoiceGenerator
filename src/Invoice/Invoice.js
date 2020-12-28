import React from "react";
import "./Invoice.css";

const Item = (props) => {
    const { id, name, price, color, size, imgUrl } = props;
    return (
        <div className="item">
            <div className="itemImage">
                <img
                    src="https://stockx.imgix.net/images/Supreme-Cross-Box-Logo-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1608222061&w=1000"
                    width="80"
                ></img>
            </div>
            <div className="itemInfo">
                <div id="name">
                    <p>{name}</p>
                </div>
                <div id="size">
                    <p>{"Size: " + size}</p>
                </div>
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
    for (var i = 0; i < itemsListJson.length; i++) {
        console.log(itemsListJson[i]);
        itemsList.push({
            id: itemsListJson[i]["id"],
            name: itemsListJson[i]["name"],
            price: itemsListJson[i]["price"],
            color: itemsListJson[i]["color"],
            size: itemsListJson[i]["size"],
            imgUrl: itemsListJson[i]["imgUrl"],
        });
    }

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
                        <p>{"Subtotal " + "$ 10.00"}</p>
                        <p>{"Shipping " + "$ 10.00"}</p>
                        <p>TOTAL $ 64.00</p>
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
