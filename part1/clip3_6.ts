/**
 * 값이 반환되지 않는 예외 던지기
 */

function stringToNumber(s: string) {
    const result = Number(s);
    if (isNaN(result)) {
        //부수효과
        throw Error(s + ": 숫자가아닙니다.");
    }
    return result;
}

/**
 * 예외를 표현하는 데이터 타입 - 예외를 명시적인 타입으로 반환하기
 */

type Try<T> = T | Error;

/**
 * array.map() 만들어보기
 */

//(Array<A>,A=>B)=>Array<B>
type MapType<A, B> = (xs: Array<A>, f: (x: A) => B) => Array<B>;

//(Array<number>, number => string => Array<string>)
type MapType1 = MapType<number, string>;

//(B=>C, A=>B)=>A=>C
type Compose<A, B, C> = (g: (y: B) => C, f: (x: A) => B) => (a: A) => C;

// (number => boolean, string => number) => string => boolean
type Compose1 = Compose<string, number, boolean>;
