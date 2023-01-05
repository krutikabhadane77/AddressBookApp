let record=new Array();

window.addEventListener("DOMContentLoaded", (event) => {
    record = getRecordFromLocalStorage();
    createInnerHTML();
    localStorage.removeItem("editContact");
});

function getRecordFromLocalStorage(){
    return localStorage.getItem("Record") ?
        JSON.parse(localStorage.getItem("Record")) : [];
};

function createInnerHTML(){
    const headerHTML=
        "<th>Fullname</th>"+
        "<th>Address</th>"+
        "<th>City</th>"+
        "<th>State</th>"+
        "<th>Zip Code</th>"+
        "<th>Phone No</th>";

    if (record.length==0){
        console.log("No data found in Local Storage")
        return;
    }
    let innerHTML=`${headerHTML}`;
    for(const contact of record){
        innerHTML=`${innerHTML}
        <tr>
            <td>${contact._name}</td>
            <td>${contact._address}</td>
            <td>${contact._city}</td>
            <td>${contact._state}</td>
            <td>${contact._zip}</td>
            <td>${contact._phone}</td>
            <td>
                <img id="${contact._id}" src="../Assets/icons/delete-black-18dp.svg" id="${contact._id}" alt="delete" onclick="remove(this)"><br>
                <img id="${contact._id}" src="../Assets/icons/create-black-18dp.svg" id="${contact._id}" alt="edit" onclick="update(this)">
            </td>
        </tr>
    `;
    }
    document.querySelector('#table').innerHTML = innerHTML;
}

function remove(node){
    let contact = record.find(bookObj=>bookObj._id == node.id);
    if(!contact){
        console.log("No entry found!!");
        return;
    }
    const index = record.map(bookObj=>bookObj._id)
                        .indexOf(contact._id);
    record.splice(index,1);
    localStorage.setItem("Record",JSON.stringify(record));
    createInnerHTML();
}
function update(node){
    let contact = record.find(bookObj=>bookObj._id == node.id);
    if(!contact){
        console.log("No entry found!!");
        return;
    }
    localStorage.setItem('editContact', JSON.stringify(contact,'\t', 2));
    window.location.replace(site_properties.contact_form);
    checkForUpdate();
}

