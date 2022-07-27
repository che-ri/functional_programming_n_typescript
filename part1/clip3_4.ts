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

/**
 * 기존 상품의 이름,가격,수량,전체수량,전체가격을 보여주는 기능에서 품절하는 기능을 더했다.
 * 명령적 코드로 작성할 시, 추가기능이 생기면 대응해야되는 코드가 반복되고 많아진다.
 */

const list = () => {
    let html = "<ul>";
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].outOfStock === false) {
            html += "<li>";
            html += `<h2>${cart[i].name}</h2>`;
            html += `<div>가격: ${cart[i].price}원</div>`;
            html += `<div>수량: ${cart[i].quantity}상자</div>`;
            html += "</li>";
        } else {
            html += "<li class='gray'>";
            html += `<h2>${cart[i].name} (품절)</h2>`;
            html += `<div class='strike'>가격: ${cart[i].price}원</div>`;
            html += `<div class='strike'>수량: ${cart[i].quantity}상자</div>`;
            html += "</li>";
        }
    }
    html += "</ul>";

    let totalCount = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].outOfStock === false) {
            totalCount += cart[i].quantity;
        }
    }
    html += `<h2>전체 수량: ${totalCount}상자 </h2>`;

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].outOfStock === false) {
            totalPrice += cart[i].quantity * cart[i].price;
        }
    }
    html += `<h2>전체 가격: ${totalPrice}원</h2>`;

    return `
    ${html}
    `;
};

const $app = $("#app");
if ($app != null) {
    $app.innerHTML = `<h1>장바구니</h1> ${list()}`;
}
