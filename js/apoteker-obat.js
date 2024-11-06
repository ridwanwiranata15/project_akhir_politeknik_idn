function editApotekerObat(id){
    document.querySelector("#ubah").style.display = "block";
    document.querySelector("#ubah").style.backgroundColor = "yellow";
    document.querySelector("#tambah").style.display = "none";
    document.querySelector('.modal-create').style.display = "block";
    const ApotekerObats = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    const details = document.querySelectorAll('.detail')
    details.forEach(function(detail){
        detail.style.display = "none";
    })
    inputs.forEach(function(input){
        input.style.display = "block";
    })
    inputs[0].value = ApotekerObats[0].textContent;
    inputs[1].value = ApotekerObats[1].textContent;
    inputs[2].value = ApotekerObats[2].textContent;
    inputs[3].value = ApotekerObats[3].textContent;
    inputs[4].value = ApotekerObats[4].textContent;
    inputs[5].value = ApotekerObats[5].textContent;
    inputs[6].value = ApotekerObats[6].textContent;
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
function DetailApotekerObat(id){
    document.querySelector('.modal-create').style.display = "block";
    const inputs = document.querySelectorAll('.modal-create-content-body td:nth-child(3) input');
    const details = document.querySelectorAll('.detail')
    const ApotekerObats = document.querySelectorAll('tr[data-id="'+id+'"] td');
    document.querySelector("#ubah").style.display = "none";
    document.querySelector("#tambah").style.display = "none";
   
    inputs.forEach(function(input){
        input.style.display = "none"
    })
    details.forEach(function(detail){
        detail.style.display = "block";
    })
    details[0].innerText = ApotekerObats[0].textContent;
    details[1].innerText = ApotekerObats[1].textContent;
    details[2].innerText = ApotekerObats[2].textContent;
    details[3].innerText = ApotekerObats[3].textContent;
    details[4].innerText = ApotekerObats[4].textContent;
    details[5].innerText = ApotekerObats[5].textContent;
    details[6].innerText = ApotekerObats[6].textContent;
}