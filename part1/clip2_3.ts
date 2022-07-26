/**
 * 토마토 : 7000원
 * 오렌지 : 15000원
 * 사과 : 10000원
 */

export let totalPrice = 0;

// 아래와 같은 코드는 실수를 유발하기 쉽다.
// totalPrice += 7000;
// totalPrice += 15000;
// totalPrice += 10000;
// totalPrice += 30000; //사과가 3개인 가격인가? 오렌지가 2개인 가격인가?

//아래의 addTomato, addOrange, addApple은 전역상태를 변경하기에 순수함수가 아니고, 부수효과를 일으키는 서브루틴 or 프로시저에 해당한다.
export function addTomato() {
    totalPrice += 7000;
}

export function addOrange() {
    totalPrice += 15000;
}

export function addApple() {
    totalPrice += 10000;
}

export function list1() {
    //토마토, 오렌지, 사과 한 상자
    addTomato();
    addOrange();
    addApple();
}

export function list2() {
    //토마토 2상자
    addTomato();
    addTomato();
}

export function list3() {
    //오렌지 100상자
    for (let i = 0; i < 100; i++) {
        addOrange();
    }
}

export function main() {
    list3();
}

main();

const $app = document.getElementById("app");
if ($app !== null) {
    $app.innerHTML = `
<h1>
  total price : ${Math.round(totalPrice)}
</h1>`;
}
