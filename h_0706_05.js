//구구단 9단까지의 결과를 출력하되 한 줄에 입력한 숫자만큼 출력되게 하는 프로그램을 작성하세요.
// (단, 입력은 1에서 9의 숫자입니다.)
let cal = 0;
let num = 5;     //입력한 숫자
let count =0;
let ncalc = "";

for(let i = 2; i<=9; i++) {          //먼저 곱해지는수
    for (let j = 1; j<=9; j++) {        //뒤에 곱해지는 수
        cal =i*j
      ncalc +=  i +'x' + j + '=' + cal + ' '

        count ++;

        if(count%5 == 0){
            ncalc += '\n'
        }
    }


}console.log(ncalc)


//입력한 구구단이 5가 되ㅏㄹ때마다 줄바굼 피료요...