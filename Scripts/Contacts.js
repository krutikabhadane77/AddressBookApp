class Contacts{

    get name(){ return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name)) this._name = name;
        else throw "*Name is Invalid!";
    }

    get phone() {return this._phone;}
    set phone(phone){
        let phoneRegex=RegExp('^[0-9]{10}$');
        if (phoneRegex.test(phone)) this._phone = phone;
        else throw '*Phone Number is Invalid';
    }

    get address() {return this._address;}
    set address(address){
        if (checkAddressValid(address)) this._address = address;
        else throw '*Address is Invalid';
    }

    get city() {return this._city;}
    set city(city){
        this._city = city;
    }

    get state() {return this._state;}
    set state(state){
        this._states = state;
    }

    get zip() {return this._zip;}
    set zip(zip){
        this._zip = zip;
    }
}

function checkAddressValid(address){
    if (!address.includes(" ")) return false;
    let addressArr=address.split(" ");
    for(var i=0;i<addressArr.length;i++){
        if (addressArr[i].length<3) return false;
    }
    return true;
}