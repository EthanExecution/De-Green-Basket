function Validation() {
    //----DECLARING LOCAL VARIABLES
    var FirstName = document.getElementById("FirstName");
    var LastName = document.getElementById("LastName");
    var cboTitle = document.getElementById("cboTitle");
    var cboGender = document.getElementById("cboGender");
    var IDNumber = document.getElementById("IDNumber");
    var EmailAddress = document.getElementById("EmailAddress");
    var PhoneNumber = document.getElementById("PhoneNumber");
    var Password = document.getElementById("Password");
    var Confirm_Password = document.getElementById("ConfirmPassword");

    //--- VALITATING THE FIRST NAME TEXTBOX
    if (FirstName.value == "") {
        alert("Please enter your First Name.");
        FirstName.focus();
        return false;
    }
    if (!isNaN(FirstName.value) || /\d/.test(FirstName.value)) {
        alert("Your First Name must not contain Numeric values.");
        FirstName.focus();
        return false;
    }

    //--- VALITATING THE LAST NAME TEXTBOX
    if (LastName.value == "") {
        alert("Please enter your Last Name.");
        LastName.focus();
        return false;
    }
    if (!isNaN(LastName.value) || /\d/.test(LastName.value)) {
        alert("Your Last Name must not contain Numeric values.");
        LastName.focus();
        return false;
    }
    var valid = true;
    switch (true) {
        //--- VALITATING THE TITLE COMBOBOX
        case cboTitle.value == "" || cboTitle == "Select an option":
            cboTitle.focus();
            alert("Please select your Title.");
            valid = false;
            break;
    }
    //--- VALITATING THE ID NUMBER TEXTBOX
    if (IDNumber.value == "") {
        alert("Please enter your ID Number");
        IDNumber.focus();
        return false;
    }

    //--- VALITATING THE EMAIL ADDRESS TEXTBOX
    if (EmailAddress.value == "") {
        alert("Please enter your Email Address.");
        EmailAddress.focus();
        return false;
    }
    //--- VALITATING THE PHONE NUMBER TEXTBOX
    if (PhoneNumber.value == "") {
        alert("Please enter your Email Address.");
        PhoneNumber.focus();
        return false;
    }
    //--- VALITATING THE PASSWORD TEXTBOX
    if (Password.value == "") {
        alert("Please create a new Password.");
        Password.focus();
        return false;
    }
    if (Confirm_Password.value == "") {
        alert("Please confirm your Password.");
        Confirm_Password.focus();
        return false;
    }

    //--- CONFIRMING THE ENTERDER PASSWORD 
    if (Confirm_Password.value != Password.value) {
        alert("Password does not match.");
        Confirm_Password.focus();
        return false;
    }
    //SUCCESSFULL REGISTERD MESSAGE
    alert(LastName + " " + FirstName + " you are now a customer of De Green Basket.");
    return true;
}