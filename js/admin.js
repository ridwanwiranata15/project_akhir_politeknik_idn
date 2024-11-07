const list_sections = document.querySelectorAll('.list-section');
const pages = [''];
list_sections.forEach(function(list){
    list.addEventListener("click", (e)=>{
        e.preventDefault()
        alert("bisa")
    })
})