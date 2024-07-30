let tutorNames = ['최원장', '김르탄', '윤창식', '박가현', '김병연', '내배캠'];

tutorNames.forEach(function(name) {
    if (name !== tutorNames[1] && name !== tutorNames[5]) {
        console.log(name);
    }
});
