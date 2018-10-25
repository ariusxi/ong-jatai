$(function(){

    $(".contact-form").submit(function(e){
        e.preventDefault();

        let title = $("#title").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if(title == "" || email == "" || message == ""){
            $("#feedback").html("<p class='red-text'>Você deve preencher todos os campos</p>");
            return false;
        }

        $.ajax({
            type: "POST",
            url: "https://notamaisapi.herokuapp.com/contact",
            dataType: "json",
            data: {
                title: title,
                email: email,
                message
            },success: function(data){
                $("#feedback").html("<p class='green-text'>"+data.message+"</p>");
            },error: function(e){
                var response = JSON.parse(e.responseText);
                $("#feedback").html("<p class='red-text'>"+response.message+"</p>");
            }
        });

        return false;
    });

});