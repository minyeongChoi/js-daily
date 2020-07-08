//입력된 문자열에서 공백을 제거하여 출력하는 프로그램을 작성하세요.
// 단, split 사용하지 않고 해결하세요

const str = "This is Sparta !"
let result = '';

for(let i =0;i<str.length;i++) {
    if(str[i] != ' ') {     //공백 찾음
        result += str[i]
    }
}console.log(result)

