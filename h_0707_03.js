//3과목의 시험 성적이 주어질 때 평균과 등급을 구하세요. <switch 사용>
// 평균은 소수점 2번째 자리까지(3번째 자리에서 반올림) 출력
//A : 90점 이상 B: 90점 미만 80점 이상 C: 80점 미만 70점 이상 D: 70점 미만 60점 이상 F: 60점 미만

 let num = function (k, m, e) {
    return (k+m+e)/3;
        }
console.log(num(100,100,98).toFixed(2));  // 평균 소수 둘째 자리 까지 반올림

let n = Math.floor(num(100,100,98)/10);  // 10으로 나누고 소수점 버리기

switch (n) {
    case 10 :
    case 9 : console.log("A");
        break;

    case 8 : console.log("B");
        break;

    case 7 : console.log("C");
        break;

    case 6 : console.log("D");
        break;

    default :
        console.log("F");
}