//숫자를 그대로 돌려주는 함수 (타입 추론)
const returnNumber = (n: number) => n;

//문자열을 그대로 돌려주는 함수
const returnString = (s: string) => s;

//불리언을 그대로 돌려주는 함수
const returnBoolean = (b: boolean) => b;

/**
 * 위 함수들이 타입별로 필요하다면, 모든 타입별로 전부 만들어야할까? 🙅🏼‍♀️
 * 위 함수는 타입은 다르지만, 모두 동작이 같다.
 * 이러한 경우에는 제네릭을 사용하는 것이 좋다.
 */

//어떤 타입의 값이라도 그대로 돌려주는 함수
const returnAnyType = <T>(x: T) => x;

function plus<T>(x: T) {
    //Error💩 제네릭을 사용할 때에는 값을 사용하여 다른 결과물로 만들 수 없고 그저 받은 값을 return 시켜줘야한다.
    return x + x;
}

//array에 type정하기
type T1 = Array<string>;

/**
 * 제네릭으로 함수 일반화시키기
 */

function getPrice3(name: string): number | undefined {
    if (name === "tomato") return 7000;
    else if (name === "orange") return 15000;
    else if (name === "apple") return 10000;
    return undefined;
}

function isExpensive3(price: number | undefined) {
    //😭 인자에 undefined도 들어올 수 있도록 하고, undefined값이 들어올때 분기처리를 해주면 오류를 없앨 수는 있다.
    if (price === undefined) return false;
    return price > 10000;
}

function isExpensivePrice(name: string): boolean {
    return isExpensive3(getPrice3(name));
}

/**
 * isExpensivePrice함수를 제네릭을 통하여 일반화시켜보자
 * compose함수의 타입들을 일반화시키면, <A, B, C>((B) => C, (A) => B) => (A) => C 와 같다.
 */
const compose =
    <A, B, C>(g: (y: B) => C, f: (s: A) => B) =>
    (x: A) => {
        return g(f(x));
    };
