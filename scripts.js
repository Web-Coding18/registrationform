$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); 

        $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#successMessage").show();
                $("#submittedData").html(response);
            },
            error: function () {
                alert("Error in submission. Please try again.");
            },
        });
    });
});
