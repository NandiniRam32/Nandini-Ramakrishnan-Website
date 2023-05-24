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
    document.getElementById('left-photo').src = leftImageName;
    document.getElementById('main-photo').src = mainImageName;
    document.getElementById('right-photo').src = rightImageName;
}