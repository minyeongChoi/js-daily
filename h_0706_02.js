// 짝수가 먼저 오는 함수 만들기

const str = "Helloworld";
let str1 = "";
let str2 = "";
let result = new Array(str.length);         // 새로운 배열 생성
for(let i = 0; i<str.length; i++) {
    result[i] = i           // 배열에 숫자 넣기 (H<-0, e<-1...)

    if( result[i]%2 == 1 ) {        //홀수
        str1 += str[i]
    } else if (result[i]%2 == 0) {      //짝수
        str2 += str[i]
    }
} console.log(str2+str1);