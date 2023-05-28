let num_left_pic = 0;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 19) % 20);
    updateImages();
})
generateNext.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 21) % 20);
    updateImages();
})
function updateImages() {
    leftImageName = 'Photo' + ((num_left_pic + 19) % 20) + '.jpg';
    mainImageName = 'Photo' + ((num_left_pic) % 20) + '.jpg';
    rightImageName = 'Photo' + ((num_left_pic + 1) % 20) + '.jpg';
    document.getElementById('left-photo').src = leftImageName;
    document.getElementById('main-photo').src = mainImageName;
    document.getElementById('right-photo').src = rightImageName;
}