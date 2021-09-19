//Activates disabled next button

$("#1, #2, #3, #test1, #period, #date1").bind("keyup", function() {
    if (allFilled()) $("#next").removeAttr("disabled");
});

function allFilled() {
    var filled = true;
    $("body input").each(function() {
        if ($(this).val() == "") filled = false;
    });
    return filled;
}

//Show and hide some input fields which depends on answers

$(document).ready(function() {
    $("#test").hide();
    $("#option1").hide();
    $("#option2").hide();
    $("input:radio").change(function() {
        console.log(this);
        if (this.value == "yes" && this.name == "radio") {
            $("#test").slideDown();
        } else if (this.value == "no" && this.name == "radio") {
            $("#test").slideUp();
            $("#option1").slideUp();
            $("#option2").slideUp();
        } else if (this.value == "now" && this.name == "radio") {
            $("#test").slideUp();
            $("#option1").slideUp();
            $("#option2").slideUp();
        } else if (this.value == "yes" && this.name == "done") {
            $("#option2").slideUp();
            $("#option1").slideDown();
        } else if (this.value == "no" && this.name == "done") {
            $("#option1").slideUp();
            $("#option2").slideDown();
        }
    });
});