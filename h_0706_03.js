//입력한 수가 피라미드의 층수가 될 때 ‘*’로 이루어진 피라미드 모양을 출력하는 프로그램을 작성하세요.
// (단, 입력은 자연수이다.)
let n = 3;

for (let i=0; i<n ; i++) {
    let string = "";        // n

    for(let l=n-1; l>i; l--) {
        string  += ' ';    //공백 추가
    }

    for(let j = 0; j<2*i+1; j++) {
        string = string + '*';       //별 추가
    }
    console.log(string)
};
