const lion = {
    name: "simba",
    age: 3,
    주인공: true,
    대사: "하쿠나마타타"
}

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    // const ans = lion.age +1;
    // console.log(ans);

    return lion.age=lion.age+1;
    
}

// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));