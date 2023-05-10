/**let generate = document.getElementById('btn');
generate.addEventListener('click', () => {
    let random_num= Math.floor(Math.random()*(21) + 1);
    document.getElementById('output').innerHTML = ` =  ${random_num}`;
})*/

let random_num= Math.floor(Math.random()*(20) + 1);
let imageName, answerName;
if (random_num == 1) {
    imageName = 'Jokes/Question1Bar.jpg';
    answerName = 'Jokes/Answer1Bar.jpg';
} else if (random_num == 2) {
    imageName = 'Jokes/Question2Bar.jpg';
    answerName = 'Jokes/Answer2Bar.jpg';
} else if (random_num == 3) {
    imageName = 'Jokes/Question3Bar.jpg';
    answerName = 'Jokes/Answer3Bar.jpg';
} else if (random_num == 4) {
    imageName = 'Jokes/Question4Bar.jpg';
    answerName = 'Jokes/Answer4Bar.jpg';
} else if (random_num == 5) {
    imageName = 'Jokes/Question5Bar.jpg';
    answerName = 'Jokes/Answer5Bar.jpg';
} else if (random_num == 6) {
    imageName = 'Jokes/Question6Bar.jpg';
    answerName = 'Jokes/Answer6Bar.jpg';
} else if (random_num == 7) {
    imageName = 'Jokes/Question7Bar.jpg';
    answerName = 'Jokes/Answer7Bar.jpg';
} else if (random_num == 8) {
    imageName = 'Jokes/Question8Bar.jpg';
    answerName = 'Jokes/Answer8Bar.jpg';
} else if (random_num == 9) {
    imageName = 'Jokes/Question9Bar.jpg';
    answerName = 'Jokes/Answer9Bar.jpg';
} else if (random_num == 10) {
    imageName = 'Jokes/Question10Bar.jpg';
    answerName = 'Jokes/Answer10Bar.jpg';
} else if (random_num == 11) {
    imageName = 'Jokes/Question11Bar.jpg';
    answerName = 'Jokes/Answer11Bar.jpg';
} else if (random_num == 12) {
    imageName = 'Jokes/Question12Bar.jpg';
    answerName = 'Jokes/Answer12Bar.jpg';
} else if (random_num == 13) {
    imageName = 'Jokes/Question13Bar.jpg';
    answerName = 'Jokes/Answer13Bar.jpg';
} else if (random_num == 14) {
    imageName = 'Jokes/Question14Bar.jpg';
    answerName = 'Jokes/Answer14Bar.jpg';
} else if (random_num == 15) {
    imageName = 'Jokes/Question15Bar.jpg';
    answerName = 'Jokes/Answer15Bar.jpg';
} else if (random_num == 16) {
    imageName = 'Jokes/Question16Bar.jpg';
    answerName = 'Jokes/Answer16Bar.jpg';
} else if (random_num == 17) {
    imageName = 'Jokes/Question17Bar.jpg';
    answerName = 'Jokes/Answer17Bar.jpg';
} else if (random_num == 18) {
    imageName = 'Jokes/Question18Bar.jpg';
    answerName = 'Jokes/Answer18Bar.jpg';
} else if (random_num == 19) {
    imageName = 'Jokes/Question19Bar.jpg';
    answerName = 'Jokes/Answer19Bar.jpg';
} else if (random_num == 20) {
    imageName = 'Jokes/Question20Bar.jpg';
    answerName = 'Jokes/Answer20Bar.jpg';
}
//document.getElementById('QuestionBar').innerHTML = `${imageName}`;
document.getElementById('QuestionBar').innerHTML = `<img style="width: 92%; padding: 0%;" src="${imageName}" alt="Sorry, Image Not Found">
<p style="padding-left: 5%; padding-right: 5%; font-size: 1.3vw; text-align: center;"></p>`;
let generate = document.getElementById('AnswerExtraBar');
generate.addEventListener('click', () => {
    document.getElementById('AnswerExtraBar').innerHTML = `<img style="width: 92%; padding-bottom: 4%;" src="${answerName}" alt="Sorry, Image Not Found">`;
})