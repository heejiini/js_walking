function checkAge(age) {
    if(age >= 19) {
        console.log('안녕하세요');
    }
    else{
        console.log('나가세요');
    }
    }
    
    // 함수 실행
    const old = checkAge(27);
    console.log(old);

    const young = checkAge(7);
    console.log(young);