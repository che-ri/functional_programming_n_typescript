function getPrice(name: string): number | undefined {
    if (name === "tomato") return 7000;
    else if (name === "orange") return 15000;
    else if (name === "apple") return 10000;
    return undefined;
}

function isExpensive(price: number) {
    return price > 10000;
}

function main() {
    //아래는 함수합성을 할 수 없는 예시입니다.
    const price = getPrice("apple");
    return isExpensive(price); //error 💩 isExpensive함수는 number형식만 인자로 쓸 수 있는데, getPrice함수는 undefined도 return하기 때문!
}
