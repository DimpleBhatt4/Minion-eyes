let eye=document.querySelectorAll('.eye');
let win_width,win_height;
// window height and width
win_width=window.innerWidth;
win_height=window.innerHeight;
console.log('window width',win_width);
console.log('window height',win_height);


// white eye height and width
// let eye_width, eye_height;
// eye_width=document.querySelector('.circ-wh-1').innerWidth;
// eye_height=document.querySelector('.circ-wh-1').innerheight;
// let percent_x_white=Math.round((eye_width/win_width)*100).toFixed(0);
// let percent_y_white=Math.round((eye_height/win_width)*100).toFixed(0);
// console.log('percent_x_white',percent_x_white);
// console.log('percent_y_white',percent_y_white);


let coordinates=[];
document.addEventListener('mousemove',(event)=>{
    coordinates[0]=event.clientX;
    coordinates[1]=event.clientY;
    let percent_x_eyeball=Math.round((event.clientX/win_width)*100).toFixed(0);
    let percent_y_eyeball=Math.round((event.clientY/win_height)*100).toFixed(0);
    console.log('X coordinate: ' + event.clientX);
    console.log('Y coordinate: ' + event.clientY);
    console.log('percent_x',percent_x_eyeball);
    console.log('percent_y',percent_y_eyeball);
    eye.forEach((item)=>{
        item.style.top=`${percent_y_eyeball}%`;
        item.style.transform = `translate(-${percent_x_eyeball}%,-${percent_y_eyeball}%)`;


        item.style.left=`${percent_x_eyeball}%`;

    });
});

