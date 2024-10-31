function editDoctor(id){
    document.querySelector('.modal-create').style.display = "block";
    document.querySelector('.modal-create-content-footer button').classList.add('btn-update-data')
    document.querySelector('.modal-create-content-header h1').innerText = "Ubah data dokter"
    document.querySelector('.modal-create-content-footer button').innerText = "Ubah"

    const doctors = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const inputs = document.querySelectorAll('.modal-create-content-body input');
    console.log(inputs);
}