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
        let rows ='';
        for(let j=2; j<=9; j++) {  //2~9
            rows += `${j} * ${i} = ${j*i}\t`; //2*1=2  3*1=3...
        }
        console.log(rows);   
    }
    
    