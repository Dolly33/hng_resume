const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)
})

function createTags (input){
    let tags = input.split(',')
        tags = tags.map(tag => tag.trim())
        tags = tags.filter(tag => tag!=='')

   tagsEl.innerHTML = ''

   tags.forEach(tag =>{
       const tagEl = document.createElement('span')
       tagEl.classList.add('tag')
       tagEl.innerText = tag
       tagsEl.appendChild(tagEl)
   })
    
}