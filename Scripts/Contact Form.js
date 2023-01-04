window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
        if (name.value.length == 0) {
            textError.textContent = "*Name field is empty!!";
            return;
        }
        try {
            (new Contacts()).name = name.value;
            textError.textContent = "";
        } catch (exception) {
            textError.textContent = exception;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input',function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "*No Number Found!!";
            return;
        }
        try {
            (new Contacts()).phone = phone.value;
            phoneError.textContent = "";
        } catch (exception) {
            phoneError.textContent = exception;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input',function () {
        if (address.value.length == 0) {
            addressError.textContent = "*No Entry Found!!";
            return;
        }
        try {
            (new Contacts()).address = address.value;
            addressError.textContent = "";
        } catch (exception) {
            addressError.textContent = exception;
        }
    });
});

function save(){
    try{
        contact._id=0;
        contact._name=document.getElementById('name').value;
        contact._phone=document.getElementById('phone').value;
        contact._address=document.getElementById('address').value;
        contact._city=document.getElementById('city').value;
        contact._state=document.getElementById('state').value;
        contact._zip=document.getElementById('zip').value;
        console.log(contact);
    }catch (exception) {
        console.error(exception);
    }
    updateToLocalStorage();
}

function updateToLocalStorage(){
    let record = JSON.parse(localStorage.getItem("Record"));
    if(record!=undefined){
        record.push(contact);
    }else{
        record=[contact];
    }
    console.log(record);
    localStorage.setItem("Record",JSON.stringify(record));
}