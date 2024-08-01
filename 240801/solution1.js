const grade = {
  국어: 90,
  영어: 80,
  수학: 100,
};

// 출력: true

// 국어, 영어, 수학 점수가 모두 80점 이상이면 true, 아니면 false를 반환해주세요.
function checkGrade(grade) {
  if (grade.국어 >= 80 && grade.영어 >= 80 && grade.수학) {
    return true;
  } else {
    return false;
  }
}

console.log(checkGrade(grade));
