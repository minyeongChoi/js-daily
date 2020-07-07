//n이 양수일 때 n의 팩토리얼을 구하는 프로그램을 작성하세요.

let num = 1;
let fac = function fac(n) {
    for (let i = 1; i <= n ; i++) {
        num *= i;

    }console.log(num)
}
fac(5)