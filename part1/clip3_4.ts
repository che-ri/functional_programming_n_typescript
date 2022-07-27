import { $ } from "../util/querySelector";

interface Item {
    code: string;
    outOfStock: boolean;
    name: string;
    price: number;
    quantity: number;
}

const cart: Array<Item> = [
    {
        code: "tomato",
        outOfStock: false,
        name: "토마토",
        price: 7000,
        quantity: 2,
    },
    {
        code: "orange",
        outOfStock: true,
        name: "오렌지",
        price: 15000,
        quantity: 3,
    },
    {
        code: "apple",
        outOfStock: false,
        name: "사과",
        price: 10000,
        quantity: 1,
    },
];

const list = () => {
    let html = "<ul>";
    let totalCount = 0;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        html += "<li>";
        html += `<h2>${cart[i].name}</h2>`;
        html += `<div>가격: ${cart[i].price}원</div>`;
        html += `<div>수량: ${cart[i].quantity}상자</div>`;
        html += "</li>";
        totalCount += cart[i].quantity;
        totalPrice += cart[i].quantity * cart[i].price;
    }
    html += "</ul>";
    html += `<h2>전체 수량: ${totalCount}상자 </h2>`;
    html += `<h2>전체 가격: ${totalPrice}원</h2>`;

    return `
    ${html}
    `;
};

const $app = $("#app");
if ($app != null) {
    $app.innerHTML = `<h1>장바구니</h1> ${list()}`;
}
