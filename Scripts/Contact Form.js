let isUpdate=false;
let newContact=new Array();
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
    if(record){
        let dataToUpdate = record.find(bookObj=>bookObj._id ==newContact._id);
        
        if(!dataToUpdate){
            contact._id=getID();
            record.push(contact);
        } else {
            console.log("rem");
            const index = record.map(bookObj => bookObj._id)
                                .indexOf(dataToUpdate._id);
            contact._id=getID();
            record.splice(index, 1, contact);
        }
    }else{
        contact._id=getID();
        record=[contact];
    }

    console.log(record);
    localStorage.setItem("Record",JSON.stringify(record));
    window.location.replace(site_properties.home_page);
}
function resetForm(){
    document.getElementById("ContactForm").reset();
    resetErr('.text-error');
    resetErr('.phone-error');
    resetErr('.address-error');
}

function resetErr(type){
    document.querySelector(type).textContent="";
}
function getID(){
    let contID = localStorage.getItem("ID");
    contID = !contID?1:(parseInt(contID)+1).toString();
    localStorage.setItem("ID",contID);
    return contID;
}

function checkForUpdates(){
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson?true:false;
    if(!isUpdate) return;
    newContact = JSON.parse(contactJson);
    console.log(newContact)
    setForm();
}

function setForm(){
    setValue('#name',newContact._name);
    setValue('#phone',newContact._phone);
    setValue('#address',newContact._address);
    setValue('#city',newContact._city);
    setValue('#state',newContact._state);
    setValue('#zip',newContact._zip);
}

function setValue(property,value){
    const element = document.querySelector(property);
    element.value = value;
}