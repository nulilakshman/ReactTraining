function alertMessage() {
    alert('Welcome to javascript !!!')
}

function validate() {
    var isFormValid = true;

    console.log('Validate Method Triggered !!!')
    //    console.info('Validate Method Triggered !!!')
    // console.error('Validate Method Triggered !!!')
    // console.warn('Validate Method Triggered !!!')
    var element = document.getElementById('firstname');
    console.log(element)

    element = document.getElementsByTagName('input');
    console.log(element)

    var firstname = document.getElementById('firstname').value;
    if (firstname == "") {
        isFormValid = false;
        //alert('Please enter firstname')
        document.getElementById('spnFirstName').innerHTML = "Please enter first name."
    }
    else{
        document.getElementById('spnFirstName').innerHTML = ""
    }


    return isFormValid;
}

// let, const