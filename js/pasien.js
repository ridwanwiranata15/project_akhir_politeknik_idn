function editPasien(id){
    document.querySelector('.modal-create').style.display = "block";
    const patiens = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "block";
    })
    inputs.forEach(function(input){
        input.style.display = "none";
    })
    details[0].innerText = patiens[0].textContent;
    details[1].innerText = patiens[1].textContent;
    details[2].innerText = patiens[2].textContent;
    details[3].innerText = patiens[3].textContent;
    details[4].innerText = patiens[4].textContent;
    details[5].innerText = patiens[5].textContent;
    details[6].innerText = patiens[6].textContent;
    details[7].innerText = patiens[7].textContent;
}
document.querySelector('.modal-create-content-header span').addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector('.modal-create').style.display = "none";
})