function editApotecer(id){
    document.querySelector('.modal-create').style.display = "block";
    const apotecers = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    inputs[0].value = apotecers[0].textContent;
    inputs[1].value = apotecers[1].textContent;
    inputs[2].value = apotecers[2].textContent;
    inputs[3].value = apotecers[3].textContent;
    inputs[4].value = apotecers[4].textContent;
    inputs[5].value = apotecers[5].textContent;
    inputs[6].value = apotecers[6].textContent;
    inputs[7].value = apotecers[7].textContent;
    inputs[8].value = apotecers[8].textContent;
    document.querySelector("#ubah").style.display = "block";
    document.querySelector("#tambah").style.display = "none";
    document.querySelector("#ubah").classList.add("btn-update-data")
}
document.querySelector(".header-button button").addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector('.modal-create').style.display = "block";
    document.querySelector("#ubah").style.display = "none";
    document.querySelector("#tambah").style.display = "block";
    document.querySelector("#tambah").classList.add("btn-save-data")
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
    inputs[5].value = "";
    inputs[6].value = "";
    inputs[7].value = "";
    inputs[8].value = "";
})
document.querySelector(".modal-create-content-header span").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create').style.display = "none";
})
function DetailApotecer(id){
    document.querySelector('.modal-create').style.display = "block";
    const inputs = document.querySelectorAll('.modal-create-content-body td:nth-child(3) input');
    const details = document.querySelectorAll('.detail')
    const apotecers = document.querySelectorAll('tr[data-id="'+id+'"] td');
    document.querySelector("#ubah").style.display = "none";
    document.querySelector("#tambah").style.display = "none";
   
    inputs.forEach(function(input){
        input.style.display = "none"
    })
    details.forEach(function(detail){
        detail.style.display = "block";
    })
    details[0].innerText = apotecers[0].textContent;
    details[1].innerText = apotecers[1].textContent;
    details[2].innerText = apotecers[2].textContent;
    details[3].innerText = apotecers[3].textContent;
    details[4].innerText = apotecers[4].textContent;
    details[5].innerText = apotecers[5].textContent;
    details[6].innerText = apotecers[6].textContent;
    details[7].innerText = apotecers[7].textContent;
}