function editApotekerResepObat(id){
    document.querySelector("#ubah").style.display = "block";
    document.querySelector("#ubah").style.backgroundColor = "yellow";
    document.querySelector("#tambah").style.display = "none";
    document.querySelector('.modal-create').style.display = "block";
    const ApotekerResepObats = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    inputs[0].value = ApotekerResepObats[0].textContent;
    inputs[1].value = ApotekerResepObats[1].textContent;
    inputs[2].value = ApotekerResepObats[2].textContent;
    inputs[3].value = ApotekerResepObats[3].textContent;
    inputs[4].value = ApotekerResepObats[4].textContent;
    inputs[5].value = ApotekerResepObats[5].textContent;
    inputs[6].value = ApotekerResepObats[6].textContent;
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
function DetailApotekerResepObat(id){
    document.querySelector('.modal-create').style.display = "block";
    const inputs = document.querySelectorAll('.modal-create-content-body td:nth-child(3) input');
    const details = document.querySelectorAll('.detail')
    const ApotekerResepObats = document.querySelectorAll('tr[data-id="'+id+'"] td');
    document.querySelector("#ubah").style.display = "none";
    document.querySelector("#tambah").style.display = "none";
   
    inputs.forEach(function(input){
        input.style.display = "none"
    })
    details.forEach(function(detail){
        detail.style.display = "block";
    })
    details[0].innerText = ApotekerResepObats[0].textContent;
    details[1].innerText = ApotekerResepObats[1].textContent;
    details[2].innerText = ApotekerResepObats[2].textContent;
    details[3].innerText = ApotekerResepObats[3].textContent;
    details[4].innerText = ApotekerResepObats[4].textContent;
    details[5].innerText = ApotekerResepObats[5].textContent;
    details[6].innerText = ApotekerResepObats[6].textContent;
}