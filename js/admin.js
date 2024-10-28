const ButtonOpenModalCreate = document.querySelector('.header-button button');
ButtonOpenModalCreate.addEventListener('click', function(){
    document.querySelector('.modal-create').style.display = "block";
    document.querySelector('.modal-create-content-footer button').classList.remove('btn-update-data')
    document.querySelector('.modal-create-content-footer button').classList.add('btn-save-data')
    document.querySelector('.modal-create-content-footer button').innerText = "Tambah"
    document.querySelector('.modal-create-content-header h1').innerText = "Tambah data dokter"
})
document.querySelector('.modal-create-content-header span').addEventListener('click', function(){
    document.querySelector('.modal-create').style.display = "none";
});
function edit(id){
    document.querySelector('.modal-create').style.display = "block";
    document.querySelector('.modal-create-content-footer button').classList.add('btn-update-data')
    document.querySelector('.modal-create-content-header h1').innerText = "Ubah data dokter"
    document.querySelector('.modal-create-content-footer button').innerText = "Ubah"
}