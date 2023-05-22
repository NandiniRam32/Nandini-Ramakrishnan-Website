let num_left_pic = 0;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 7) % 8);
    updateImages();
})
generateNext.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 9) % 8);
    updateImages();
})
function updateImages() {
    leftImageName = 'Drawing' + ((num_left_pic + 7) % 8) + '.jpg';
    mainImageName = 'Drawing' + ((num_left_pic) % 8) + '.jpg';
    rightImageName = 'Drawing' + ((num_left_pic + 1) % 8) + '.jpg';
    //document.getElementById('left-photo').src = leftImageName;
    document.getElementById('left-photo').innerHTML = `<img class="left-photo" src="${leftImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('main-photo').innerHTML = `<img class="main-photo" src="${mainImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('right-photo').innerHTML = `<img class="right-photo" src="${rightImageName}" alt="Sorry, Image Not Found">`;
}