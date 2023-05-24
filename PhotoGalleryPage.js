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
    document.getElementById('left-photo').src = leftImageName;
    document.getElementById('main-photo').src = mainImageName;
    document.getElementById('right-photo').src = rightImageName;
}