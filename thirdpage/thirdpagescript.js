//Activate disabled next button
$("#1, #2, #test1, #test2, #test3").bind("keyup", function() {
    if (allFilled()) $("#next").removeAttr("disabled");
});

function allFilled() {
    var filled = true;
    $("body input").each(function() {
        if ($(this).val() == "") filled = false;
    });
    return filled;
}

//Show and hide questions which depends on answers

$(document).ready(function() {
    $("#stage").hide();
    $("#stage-no").hide();
    $("#option1").hide();
    $("#option2").hide();
    $("#option3").hide();
    $("input:radio").change(function() {
        console.log(this);
        if (this.value == "yes" && this.name == "radio") {
            $("#stage-no").slideUp();
            $("#option1").slideUp();
            $("#option2").slideUp();
            $("#option3").slideUp();
            $("#stage").slideDown();
        } else if (this.value == "no" && this.name == "radio") {
            $("#stage").slideUp();
            $("#option1").slideUp();
            $("#stage-no").slideDown();
        } else if (this.value == "notplanned" && this.name == "stage") {
            $("#option1").slideDown();
        } else if (this.value == "done" && this.name == "stage") {
            $("#option1").slideUp();
        } else if (this.value == "planned" && this.name == "stage") {
            $("#option1").slideUp();
        } else if (this.value == "not" && this.name == "stage-no") {
            $("#option3").slideUp();
            $("#option2").slideDown();
        } else if (this.value == "willbe" && this.name == "stage-no") {
            $("#option2").slideUp();
            $("#option3").slideDown();
        } else if (this.value == "registered" && this.name == "stage-no") {
            $("#option2").slideUp();
            $("#option3").slideUp();
        }
    });
});