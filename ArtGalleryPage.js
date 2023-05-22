let num_pic = 1;
let num_left = 0;
let num_right = 2;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_pic = ((num_pic + 7) % 8);
    num_left = ((num_left + 7) % 8);
    num_right = ((num_right + 7) % 8);
    mainImageName = 'Drawing' + num_pic + '.jpg';
    leftImageName = 'Drawing' + num_left + '.jpg';
    rightImageName = 'Drawing' + num_right + '.jpg';
    document.getElementById('left-photo').innerHTML = `<img class="left-photo" src="${leftImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('right-photo').innerHTML = `<img class="right-photo" src="${rightImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('main-photo').innerHTML = `<img class="main-photo" src="${mainImageName}" alt="Sorry, Image Not Found">`;
})
generateNext.addEventListener('click', () => {
    num_pic = ((num_pic + 1) % 8);
    num_left = (num_left + 1) % 8;
    num_right = (num_right + 1) % 8;
    mainImageName = 'Drawing' + num_pic + '.jpg';
    leftImageName = 'Drawing' + num_left + '.jpg';
    rightImageName = 'Drawing' + num_right + '.jpg';
    document.getElementById('left-photo').innerHTML = `<img class="left-photo" src="${leftImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('right-photo').innerHTML = `<img class="right-photo" src="${rightImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('main-photo').innerHTML = `<img class="main-photo" src="${mainImageName}" alt="Sorry, Image Not Found">`;
})