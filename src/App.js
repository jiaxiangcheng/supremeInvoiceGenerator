import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Form, Divider } from "semantic-ui-react";
import { useState, useEffect } from "react";

const BillingForm = (props) => {
    const [currentBilling, setCurrentBilling] = useState(props.billingInfo);

    // console.log("props", props);
    // console.log("current billinginfo", currentBilling);

    useEffect(() => {
        props.parentUpdateBillingInfo(currentBilling);
    }, [currentBilling]);

    const inputChanged = (e) => {
        switch (e.target.id) {
            case "nameField":
                setCurrentBilling({
                    ...currentBilling,
                    name: e.target.value,
                });
                break;
            case "orderNumberField":
                setCurrentBilling({
                    ...currentBilling,
                    orderNumer: e.target.value,
                });
                break;
            case "dateField":
                setCurrentBilling({ ...currentBilling, date: e.target.value });
                break;
            case "emailField":
                setCurrentBilling({ ...currentBilling, email: e.target.value });
                break;
            case "address1Field":
                setCurrentBilling({
                    ...currentBilling,
                    address1: e.target.value,
                });
                break;
            case "address2Field":
                setCurrentBilling({
                    ...currentBilling,
                    address2: e.target.value,
                });
                break;
            case "cityField":
                setCurrentBilling({
                    ...currentBilling,
                    city: e.target.value,
                });
                break;
            case "zipCodeField":
                setCurrentBilling({
                    ...currentBilling,
                    zipCode: e.target.value,
                });
                break;
            case "telephoneField":
                setCurrentBilling({
                    ...currentBilling,
                    telephone: e.target.value,
                });
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Header as="h2" icon textAlign="center">
                <Header.Content>Order Information</Header.Content>
            </Header>

            <Divider />

            <Form.Group widths="equal">
                <Form.Input
                    id="orderNumberField"
                    fluid
                    label="Order Number *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.orderNumer}
                />
                <Form.Input
                    id="dateField"
                    fluid
                    label="Date *"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.date}
                />
                <Form.Input
                    id="nameField"
                    fluid
                    label="Name *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.name}
                />
                <Form.Input
                    id="emailField"
                    fluid
                    label="Email *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.email}
                />
                <Form.Input
                    id="telephoneField"
                    fluid
                    label="Telephone *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.telephone}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    id="address1Field"
                    fluid
                    label="Address 1 *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.address1}
                />
                <Form.Input
                    id="address2Field"
                    fluid
                    label="Address 2"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.address2}
                />
                <Form.Input
                    id="zipCodeField"
                    fluid
                    label="Zip Code *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.zipCode}
                />
                <Form.Input
                    id="cityField"
                    fluid
                    label="City *"
                    placeholder=""
                    onChange={(e) => inputChanged(e)}
                    value={currentBilling.city}
                />
            </Form.Group>
        </div>
    );
};

const ItemForm = (props) => {
    const [idToDelete, setIdToDelete] = useState(-1);
    const [currentItem, setCurrentItem] = useState(props.item);

    useEffect(() => {
        if (idToDelete !== -1) {
            props.parentDeleteItem(idToDelete);
            setIdToDelete(-1);
        } else {
            props.parentUpdateItem(currentItem);
        }
    }, [currentItem, idToDelete]);

    const inputChanged = (e) => {
        switch (e.target.id) {
            case "nameField":
                setCurrentItem({ ...currentItem, name: e.target.value });
                break;
            case "priceField":
                setCurrentItem({ ...currentItem, price: e.target.value });
                break;
            case "colorField":
                setCurrentItem({ ...currentItem, color: e.target.value });
                break;
            case "sizeField":
                setCurrentItem({ ...currentItem, size: e.target.value });
                break;
            case "urlField":
                setCurrentItem({ ...currentItem, imgUrl: e.target.value });
                break;
            default:
                break;
        }
    };

    return (
        <Form.Group widths="equal">
            <Form.Input
                id="nameField"
                fluid
                label="Name *"
                placeholder=""
                onChange={(e) => inputChanged(e)}
                value={currentItem.name}
            ></Form.Input>
            <Form.Input
                id="priceField"
                fluid
                label="Price *"
                placeholder=""
                onChange={(e) => inputChanged(e)}
                value={currentItem.price}
            ></Form.Input>
            <Form.Input
                id="colorField"
                fluid
                label="Color *"
                placeholder=""
                onChange={(e) => inputChanged(e)}
                value={currentItem.color}
            ></Form.Input>
            <Form.Input
                id="sizeField"
                fluid
                label="Size *"
                placeholder=""
                onChange={(e) => inputChanged(e)}
                value={currentItem.size}
            ></Form.Input>
            <Form.Input
                id="urlField"
                fluid
                label="Image URL *"
                placeholder=""
                onChange={(e) => inputChanged(e)}
                value={currentItem.imgURLrl}
            ></Form.Input>
            <Button
                compact
                onClick={() => {
                    setIdToDelete(currentItem.id);
                }}
            >
                Delete
            </Button>
        </Form.Group>
    );
};

const InvoiceForm = () => {
    const [billingInfo, setBillingInfo] = useState(() => {
        let billingInfoJson = JSON.parse(localStorage.getItem("billingInfo"));
        if (billingInfoJson) {
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
            return billingInfo;
        } else {
            return {
                name: "",
                orderNumer: "",
                date: "",
                email: "",
                address1: "",
                address2: "",
                telephone: "",
                city: "",
                zipCode: "",
            };
        }
    });
    const [itemsList, setItemsList] = useState(() => {
        let itemsListJson = JSON.parse(localStorage.getItem("itemsList"));
        if (itemsListJson) {
            let itemsList = [];
            for (var i = 0; i < itemsListJson.length; i++) {
                itemsList.push({
                    id: itemsListJson[i]["id"],
                    name: itemsListJson[i]["name"],
                    price: itemsListJson[i]["price"],
                    color: itemsListJson[i]["color"],
                    size: itemsListJson[i]["size"],
                    imgUrl: itemsListJson[i]["imgUrl"],
                });
            }
            return itemsList;
        } else {
            return [];
        }
    });

    const addHandler = () => {
        setItemsList([
            ...itemsList,
            {
                id: Math.floor(Math.random() * 999),
                name: "",
                price: "",
                color: "",
                size: "",
                imgUrl: "",
            },
        ]);
    };

    const deleteHandler = (id) => {
        let newItems = itemsList.filter((item) => item.id !== id);
        setItemsList(newItems);
    };

    const updateItem = (item) => {
        const elementIndex = itemsList.findIndex(
            (element) => element.id === item.id
        );

        let newItems = itemsList;
        newItems[elementIndex] = item;
        setItemsList(newItems);
    };

    const updateBillingInfo = (billing) => {
        setBillingInfo(billing);
    };

    const itemsListIsEmpty = () => {
        let isSomeFieldEmpty = false;
        for (var i = 0; i < itemsList.length; i++) {
            if (
                itemsList[i].name === "" ||
                itemsList[i].price === "" ||
                itemsList[i].color === "" ||
                itemsList[i].size === "" ||
                itemsList[i].imgURLrl === ""
            ) {
                isSomeFieldEmpty = true;
            }
        }
        return isSomeFieldEmpty;
    };

    const generateClicked = () => {
        if (
            billingInfo.name !== "" &&
            billingInfo.orderNumer !== "" &&
            billingInfo.date !== "" &&
            billingInfo.email !== "" &&
            billingInfo.address1 !== "" &&
            billingInfo.telephone !== "" &&
            billingInfo.city !== "" &&
            billingInfo.zipCode !== "" &&
            !itemsListIsEmpty()
        ) {
            if (itemsList.length <= 0) {
                alert("Add at least one item!");
            } else {
                // redirect to print page
                localStorage.setItem(
                    "billingInfo",
                    JSON.stringify(billingInfo)
                );
                localStorage.setItem("itemsList", JSON.stringify(itemsList));
                window.location.href = "/invoice";
            }
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <div>
            <div>
                <BillingForm
                    parentUpdateBillingInfo={updateBillingInfo}
                    billingInfo={billingInfo}
                ></BillingForm>

                <Header as="h2" icon textAlign="center">
                    <Header.Content>Items Information</Header.Content>
                </Header>
                <Divider />
                <Button fluid primary onClick={addHandler}>
                    +
                </Button>
                <div className="itemList">
                    {itemsList.map((item) => {
                        return (
                            <ItemForm
                                key={item.id}
                                item={item}
                                parentDeleteItem={deleteHandler}
                                parentUpdateItem={updateItem}
                            ></ItemForm>
                        );
                    })}
                </div>
            </div>

            <div className="controls">
                <Button secondary fluid onClick={generateClicked}>
                    Generate
                </Button>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Form className="invoiceForm">
                <div className="itemsForm">
                    <InvoiceForm></InvoiceForm>
                </div>
            </Form>
        </div>
    );
}

export default App;
