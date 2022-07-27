function getPrice2(name: string): number | undefined {
    if (name === "tomato") return 7000;
    else if (name === "orange") return 15000;
    else if (name === "apple") return 10000;
    return undefined;
}

function isExpensive2(price: number | undefined) {
    //😭 인자에 undefined도 들어올 수 있도록 하고, undefined값이 들어올때 분기처리를 해주면 오류를 없앨 수는 있다.
    if (price === undefined) return false;
    return price > 10000;
}

function main2() {
    //아래는 함수합성을 할 수 없는 예시입니다.
    return isExpensive2(getPrice2("apple"));
}
