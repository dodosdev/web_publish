//구구단 2단을 출력
/*
    2 * 1 =2
    2 * 9 =18
 */

    for(let i=1; i<10 ; i++){
        console.log(`2 * ${i} = ${i*2}`);
        
    }

    console.clear();

    //2단~9단 출력
    for(let i=1; i<=9; i++){  //1~9
        let rows ='';   ///중간결과를 찍고.....가로로 한줄씩 출력....
        for(let j=2; j<=9; j++) {  //2~9
            rows += `${j} * ${i} = ${j*i}  `; //2*1=2  3*1=3...
        }
        console.log(rows);   //한줄로 찍는다...
    }
    
    

// 별찍기
    for(let i=1; i<6; i++) {//6보다작게
        let rows = '';
        for(let j=1; j<=i; j++){ // j<=i; i가작거나 클때까지 실행 //i만큼 길어짐
            rows += `🍈`;
        }
        console.log(rows);
        
    }


    for(let i=6; i>=1; i--){  //초기값1 부터시작하고 i는 1보다큼(i>=1)
        console.log('🌸'.repeat(i-1))
        }



        

    for(let i=5; i>=1; i--) {//6보다작게
        let rows = '';
        for(let j=i; j>=1; j--){ // j<=i; i가작거나 클때까지 실행 //i만큼 길어짐
            rows += `🍈`;
        }
        console.log(rows);
        
    }