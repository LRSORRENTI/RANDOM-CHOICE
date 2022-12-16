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
textarea.addEventListener('keyup', (e) => {
    createtags(e.target.value)
    //this is listening for the keyup event
if(e.key === 'Enter'){
    setTimeout(() => {
e.target.value = ''
    }, 10)
    randomSelect()
}
})

function createtags(input){
    //console.log(input)
    const tags = input.split(',').filter(tag =>
        tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''
    //console.log(tags)
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30
    const times100 = times * 100;
    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() =>{
            unHighlightTag(randomTag)
        }, 100)
    }, 100) 

    setTimeout(() =>{
            clearInterval(interval)
            setTimeout(() => {

            }, 100)
    }, times100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}

