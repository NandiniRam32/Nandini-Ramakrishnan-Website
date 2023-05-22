let num_left_pic = 0;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 15) % 16);
    updateImages();
})
generateNext.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 17) % 16);
    updateImages();
})
function updateImages() {
    leftImageName = 'Photo' + ((num_left_pic + 15) % 16) + '.jpg';
    mainImageName = 'Photo' + ((num_left_pic) % 16) + '.jpg';
    rightImageName = 'Photo' + ((num_left_pic + 1) % 16) + '.jpg';
    //document.getElementById('left-photo').src = leftImageName;
    document.getElementById('left-photo').innerHTML = `<img class="left-photo" src="${leftImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('main-photo').innerHTML = `<img class="main-photo" src="${mainImageName}" alt="Sorry, Image Not Found">`;
    document.getElementById('right-photo').innerHTML = `<img class="right-photo" src="${rightImageName}" alt="Sorry, Image Not Found">`;
}