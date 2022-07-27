/**
 * 토마토 : 7000원
 * 오렌지 : 15000원
 * 사과 : 10000원
 */

function priceOfTomato() {
    return 7000;
}

function priceOfOrange() {
    return 15000;
}
function priceOfApple() {
    return 10000;
}

export function list1() {
    //토마토, 오렌지, 사과 한 상자
    return priceOfTomato() + priceOfOrange() + priceOfApple();
}

export function list2() {
    //토마토 2상자
    return priceOfTomato() + priceOfTomato();
}

export function list3() {
    //오렌지 100상자
    return priceOfOrange() * 100;
}

function getTotalPrice() {
    return list3();
}

const $app = document.getElementById("app");
if ($app !== null) {
    $app.innerHTML = `
<h1>
  total price : ${Math.round(getTotalPrice())}
</h1>`;
}
