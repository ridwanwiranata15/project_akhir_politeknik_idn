function pemeriksaan(id){
    document.querySelector('.modal-create').style.display = "block";
    const details = document.querySelectorAll('.detail')
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const patiens = document.querySelectorAll('tr[data-id="'+id+'"] td');
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    inputs[0].value = patiens[0].textContent;
}
document.querySelector('.modal-create-content-header span').addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector('.modal-create').style.display = "none";
})