function validateForm() {
    const form = document.forms[0];
    let text = '';
    console.log(form.length);
    for (let i = 0; i < form.length-1; i++) {
        var elId = form[i].id;
        var x = document.getElementById(elId).value;
        if (x == "") {
            alert("Not filled out correctly");
            return false;
        }
        text += x;
    }
    //document.getElementById("output").innerHTML = text;

    $.ajax({
        type: "POST",
        url: "action_page.php",
        data: text,
        cache: false,
        success: function(html) {
            alert(html);
        }
    })
}

