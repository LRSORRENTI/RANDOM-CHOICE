// const tags = document.getElementById('tags');
// const textarea = document.getElementById('textarea');

// textarea.focus()

// function createTags(input){
//     // console.log(input)
//     // the below function will initially split the 
//     // values passed into text area, then trim the white 
//     //space with .trim()
//     const newTags = input.split(',').filter(tag => 
//         tag.trim() !== '').map(tag => tag.trim())
//     // console.log(newTags)
//     tags.innerHTML = ''

//     tags.forEach(tag => {
//         const newTag = document.createElement('span');
//         tag.classList.add('tag');
//         tag.innerText = tag;
//         newTags.appendChild(newTag)
//     })
// }

// textarea.addEventListener('keyup', (event) => {
//     createTags(event.target.value)
// })

const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
// this .focus will auto set the cursor to blinking
//inside the textarea
textarea.addEventListener('keyup', () => {
    createTags(e.target.value)
    //this is listening for the keyup event

})

function createtags(input){
    //console.log(input)
    
}