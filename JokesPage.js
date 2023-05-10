let random_num= Math.floor(Math.random()*(20) + 1);
let imageName, answerName;
imageName = 'Jokes/Question' + random_num + 'Bar.jpg';
answerName = 'Jokes/Answer' + random_num + 'Bar.jpg';
//document.getElementById('QuestionBar').innerHTML = `${imageName}`;
document.getElementById('QuestionBar').innerHTML = `<img style="width: 92%; padding: 0%;" src="${imageName}" alt="Sorry, Image Not Found">
<p style="padding-left: 5%; padding-right: 5%; font-size: 1.3vw; text-align: center;"></p>`;
let generate = document.getElementById('AnswerExtraBar');
generate.addEventListener('click', () => {
    document.getElementById('AnswerExtraBar').innerHTML = `<img style="width: 92%; padding-bottom: 4%;" src="${answerName}" alt="Sorry, Image Not Found">`;
})