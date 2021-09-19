function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

const nameErr = true;
const emailErr = true;
const lastnameErr = true;

function nameValidation() {
    var name = document.contactForm.name.value;

    if (name == "") {
        printError("nameErr", "სახელის ველი სავალდებულოა");
        return false;
    } else if (name.length < 3) {
        printError("nameErr", "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან");
        return false;
    } else if (name.length > 255) {
        printError(
            "nameErr",
            "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
        );
        return false;
    } else {
        var regex1 = /^[a-zA-Z\s]*$/;
        if (regex1.test(name) === false) {
            printError(
                "nameErr",
                "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს"
            );
            return false;
        } else {
            printError("nameErr", "");
            return true;
        }
    }
}

function lastnameValidation() {
    var lastname = document.contactForm.lastname.value;

    if (lastname == "") {
        printError("lastnameErr", "სახელის ველი სავალდებულოა");
        return false;
    } else if (lastname.length < 3) {
        printError(
            "lastnameErr",
            "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან"
        );
        return false;
    } else if (lastname.length > 255) {
        printError(
            "lastnameErr",
            "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"
        );
        return false;
    } else {
        var regex1 = /^[a-zA-Z\s]*$/;
        if (regex1.test(lastname) === false) {
            printError(
                "lastnameErr",
                "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს"
            );
            return false;
        } else {
            printError("lastnameErr", "");
            return true;
        }
    }
}

function emailValidation() {
    var email = document.contactForm.email.value;

    if (email == "") {
        printError("emailErr", "მეილის ველი სავალდებულოა");
        return false;
    } else {
        var regex = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@redberry([\.])ge/g;
        if (regex.test(email) === false) {
            printError(
                "emailErr",
                "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)"
            );
            return false;
        } else {
            printError("emailErr", "");
            return true;
        }
    }
}

function formValidation() {
    nameValidation();
    lastnameValidation();
    emailValidation();
}

//$("#name, #lastname, #email").bind("keyup", function() {
//if (allFilled()) $("#next").removeAttr("disabled");
//});

//function allFilled() {
//var filled = true;
//$("body input").each(function() {
//if ($(this).val() == "") filled = false;
//});
//return filled;
//}