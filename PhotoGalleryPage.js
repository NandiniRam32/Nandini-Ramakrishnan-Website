let num_left_pic = 0;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 23) % 24);
    updateImages();
})
generateNext.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 25) % 24);
    updateImages();
})
function updateImages() {
    leftImageName = 'Photo' + ((num_left_pic + 23) % 24) + '.jpg';
    mainImageName = 'Photo' + ((num_left_pic) % 24) + '.jpg';
    rightImageName = 'Photo' + ((num_left_pic + 1) % 24) + '.jpg';
    document.getElementById('left-photo').src = leftImageName;
    document.getElementById('main-photo').src = mainImageName;
    document.getElementById('right-photo').src = rightImageName;
}