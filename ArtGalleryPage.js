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

    const leftPhoto = document.getElementById('left-photo');
    const mainPhoto = document.getElementById('main-photo');
    const rightPhoto = document.getElementById('right-photo');

    leftPhoto.addEventListener('load', () => {
        leftPhoto.src = leftImageName;
    });
    mainPhoto.addEventListener('load', () => {
        mainPhoto.src = mainImageName;
    });
    rightPhoto.addEventListener('load', () => {
        rightPhoto.src = rightImageName;
    });

    leftPhoto.src = leftImageName;
    mainPhoto.src = mainImageName;
    rightPhoto.src = rightImageName;
}