let listItems = document.querySelectorAll('#cross-off-list li');

for (let i = 0; i < listItems.length; i++){
    let item = listItems[i];
    item.addEventListener('click', function(){
        console.log('working');
        if (item.style.textDecoration === 'line-through'){
            item.style.textDecoration = 'none';
        } else {
            item.style.textDecoration = 'line-through'
        }
    })
}


let listItems2 = document.querySelectorAll('#fade-list li');

for (let i = 0; i < listItems2.length; i++){
    let item = listItems2[i];
    
    item.addEventListener('click', function(){

        console.log(item.style.opacity)

        if (item.style.opacity === '0'){
            console.log('if')
            setInterval(function(){
                item.style.opacity = '1'
            }, 20);
        } else if (item.style.obacity === '1'){ 
            console.log('else if')
            setInterval(function(){
                item.style.opacity = '0'
            }, 20);
        } else {
            console.log('else')
            setInterval(function(){
                item.style.opacity += '-0.01'
            }, 20);
            item.style.opacity = '0'
        }
    })
}

// Having a hard time with bubbling
// let fadeList = document.querySelector('#fade-list');
// fadeList.addEventListener('click', function(event){
//     console.log(event.target.style.opacity)

    // event.target.style.transition = 'opacity 2s';

    // setInterval(function(){
    //     event.target.style.opacity += '-0.01'
    // }, 20);
    
    // Why doesn't this work?? -- reset the setInterval function
    // if (event.target.style.opacity > '1'){
    //     setInterval(function(){
    //         event.target.style.opacity = '1'
    //     }, 20);
    //     event.target.style.opacity = '1'
    // } else if (event.target.style.obacity === '1'){ 
    //     console.log('working?')
    //     setInterval(function(){
    //         event.target.style.opacity = '0'
    //     }, 20);
    // } else {
    //     console.log('working?')
    //     setInterval(function(){
    //         event.target.style.opacity += '-0.01'
    //     }, 20);
    //     event.target.style.opacity = '0'
    // }   
// });

// now having a hard time with query select all
// let row = document.querySelectorAll('#row img');

// for (let i = 0; i < row.length; i++){
//     img = row[i];
//     img.style.border = 'solid red'
//     img.addEventListener('click', function(){
//         console.log(img)
//         console.log('inside event listener')
//     })
// }

//trying bubbling
let row = document.querySelector('#row');

row.addEventListener('click', function(event){
    console.log(event.target)
    event.target.style.width = '0px';
})

// meteor button
let meteorButton = document.querySelector('#destroy-all');

meteorButton.addEventListener('click', function(){
    for (img of row.children){
        img.style.width = '0px'
    }
    for (let i = 0; i < listItems2.length; i++){
        let item = listItems2[i];
        item.style.opacity = '0'
    }
    for (let i = 0; i < listItems.length; i++){
        let item = listItems[i];
        item.style.textDecoration = 'line-through'
    }
})

