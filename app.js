window.onload = function () {
    //Definition of booleans for adv. email check and submit-button check
    var emailFulfilled = false;
    var firstNameFulfilled = false;
    var lastNameFulfilled = false;
    var emailFieldEmpty = true;
    var newsletter = $("#newsletter").is(':checked');
    //Call these methods for initialization of the form (mandatory-fields)
    setEmailMandatory();
    setFirstNameMandatory();
    setLastNameMandatory();
    otherChosen();
    checkSubmit();
    //Events for input fields
    $('#firstName').on('input', function () {
        setFirstNameMandatory();
    });
    $('#lastName').on('input', function () {
        setLastNameMandatory();
    });
    $('#email').on('input', function () {
        if (!$('#email').val()) {
            emailFieldEmpty = true;
        }
        else {
            emailFieldEmpty = false;
        }
        setEmailMandatory();
    });
    //Events for checkbox
    $('#newsletter').click(function () {
        if ($("#newsletter").is(':checked')) {
            newsletter = true;
        }
        else {
            newsletter = false;
        }
        setEmailMandatory();
    });
    //Event for select
    $('#mediaChannelSelect').on('change', function () {
        otherChosen();
    });
    //function for getting if option fulfilled or mandatory shown for email
    function setEmailMandatory() {
        if (emailFieldEmpty && newsletter) {
            emailFulfilled = false;
            $('#emailMandatory').show();
        }
        else {
            emailFulfilled = true;
            $('#emailMandatory').hide();
        }
        checkSubmit();
    }
    //function for getting if option fulfilled or mandatory shown for firstName
    function setFirstNameMandatory() {
        if (!$('#firstName').val()) {
            firstNameFulfilled = false;
            $('#firstNameMandatory').show();
        }
        else {
            firstNameFulfilled = true;
            $('#firstNameMandatory').hide();
        }
        checkSubmit();
    }
    //function for getting if option fulfilled or mandatory shown for lastName
    function setLastNameMandatory() {
        if (!$('#lastName').val()) {
            lastNameFulfilled = false;
            $('#lastNameMandatory').show();
        }
        else {
            lastNameFulfilled = true;
            $('#lastNameMandatory').hide();
        }
        checkSubmit();
    }
    //function for getting if other set and show textarea
    function otherChosen() {
        if ($('#mediaChannelSelect').find(":selected").text() === "Other") {
            $('#otherMediaChannel').show();
        }
        else {
            $('#otherMediaChannel').hide();
        }
    }
    //function for getting if you're able to submit
    function checkSubmit() {
        if (emailFulfilled && firstNameFulfilled && lastNameFulfilled) {
            $(":submit").prop("disabled", false);
        }
        else {
            $(":submit").prop("disabled", true);
        }
    }
};
