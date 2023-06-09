let num_left_pic = 0;
let mainImageName, leftImageName, rightImageName;
let generatePrevious = document.getElementById('previous-button');
let generateNext =  document.getElementById('next-button');
generatePrevious.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 35) % 36);
    updateImages();
})
generateNext.addEventListener('click', () => {
    num_left_pic = ((num_left_pic + 37) % 36);
    updateImages();
})
function updateImages() {
    leftImageName = 'Photos/Photo' + ((num_left_pic + 35) % 36) + '.jpg';
    mainImageName = 'Photos/Photo' + ((num_left_pic) % 36) + '.jpg';
    rightImageName = 'Photos/Photo' + ((num_left_pic + 1) % 36) + '.jpg';

    const leftPhoto = document.getElementById('left-photo');
    const mainPhoto = document.getElementById('main-photo');
    const rightPhoto = document.getElementById('right-photo');

    document.getElementById('left-photo').src = leftImageName;
    document.getElementById('main-photo').src = mainImageName;
    document.getElementById('right-photo').src = rightImageName;

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