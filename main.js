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
                item.style.opacity = '1'
        } else {
            console.log('else')
            item.style.opacity = '0'
        }
    })
}

// // Having a hard time with bubbling
// let fadeList = document.querySelector('#fade-list');
// fadeList.addEventListener('click', function(event){
//     setInterval(function(){
    
//         if (event.target.style.opacity === '0'){
//             event.target.style.opacity = '1'
//         } else {
//             event.target.style.opacity += '-0.01'
//         }   
// });

// Now Working   :)
// let row = document.querySelectorAll('#row img');
// console.log(row);
// for (let i = 0; i < row.length; i++){
//     let img = row[i];
//     img.addEventListener('click', function(){
//         img.style.width = '0px'
//     })
// }

// trying bubbling
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

