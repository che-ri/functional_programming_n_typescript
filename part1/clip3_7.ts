/**
 * 함수형프로그래밍으로 리팩토링
 *
 * 1. 장바구니 그리기
 * 장바구니 순회 -> 화면에 상품 이름, 가격, 수량 표시
 *
 * 2. 전체 가격과 전체 수량도 화면에 그리기
 * 2번의 동작을 수행할 때 totalPrice, totalCount에 값을 누적
 *
 * 3. 재고 없는 상품의 처리
 * 2번과 6번의 동작을 수행할 때 재고 여부에 따라 다르게 동작시킨다.
 */

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

const stockItem = (item: Item): string => {
    return `<li>
    <h2>${item.name}</h2>
    <div>가격: ${item.price}원</div>
   <div>수랑: ${item.quantity}상자</div>
   </li>`;
};

const outOfStockItem = (item: Item): string => {
    return `<li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class="strike">가격: ${item.price}원</div>
   <div class="strike">수랑: ${item.quantity}상자</div>
   </li>`;
};

const item = (item: Item): string => {
    if (item.outOfStock) return outOfStockItem(item);
    else return stockItem(item);
};

const totalCalculator = (
    list: Array<Item>,
    getValue: (item: Item) => number
) => {
    //전체 목록중 재고가 있는 상품만 getValue()를 실행하고 그 값을 모두 더한다.
    return (
        list
            //1. 재고가 있는 상품만 분류하기
            .filter((item) => item.outOfStock === false)
            //2. 분류된 상품들에 대해서 getValue 실행하기
            .map(getValue)
            //3. getValue 실행된 값 모두 더하기
            .reduce((total, value) => total + value, 0)
    );
};

const totalCount = (list: Array<Item>): string => {
    let totalCount = totalCalculator(list, (item) => item.quantity);
    return `<h2>전체 수량: ${totalCount}상자 </h2>`;
};

const totalPrice = (list: Array<Item>): string => {
    let totalPrice = totalCalculator(
        list,
        (item) => item.quantity * item.price
    );
    return `<h2>전체 가격: ${totalPrice}원</h2>`;
};

const list = (list: Array<Item>) => {
    return `<ul>
    ${list
        //1. 목록에 있는 아이템을 태그로 변경
        .map(item)
        //2. 태그의 목록을 모두 하나의 문자열로 연결
        .reduce((tags, tag) => tags + tag, "")}
    </ul>
    `;
};

const $app = $("#app");
if ($app != null) {
    $app.innerHTML = `<h1>장바구니</h1> 
    ${list(cart)} ${totalCount(cart)} ${totalPrice(cart)}}`;
}
