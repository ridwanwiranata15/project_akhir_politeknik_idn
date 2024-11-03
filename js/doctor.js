function editDoctor(id){
    document.querySelector('.modal-create').style.display = "block";
    const doctors = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    inputs[0].value = doctors[0].textContent;
    inputs[1].value = doctors[1].textContent;
    inputs[2].value = doctors[2].textContent;
    inputs[3].value = doctors[3].textContent;
    inputs[4].value = doctors[4].textContent;
    inputs[5].value = doctors[5].textContent;
    inputs[6].value = doctors[6].textContent;
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
})
document.querySelector(".modal-create-content-header span").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create').style.display = "none";
})
function DetailDoctor(id){
    document.querySelector('.modal-create').style.display = "block";
    const inputs = document.querySelectorAll('.modal-create-content-body td:nth-child(3) input');
    const details = document.querySelectorAll('.detail')
    const doctors = document.querySelectorAll('tr[data-id="'+id+'"] td');
    document.querySelector("#ubah").style.display = "none";
    document.querySelector("#tambah").style.display = "none";
   
    inputs.forEach(function(input){
        input.style.display = "none"
    })
    details.forEach(function(detail){
        detail.style.display = "block";
    })
    details[0].innerText = doctors[0].textContent;
    details[1].innerText = doctors[1].textContent;
    details[2].innerText = doctors[2].textContent;
    details[3].innerText = doctors[3].textContent;
    details[4].innerText = doctors[4].textContent;
    details[5].innerText = doctors[5].textContent;
    details[6].innerText = doctors[6].textContent;
}