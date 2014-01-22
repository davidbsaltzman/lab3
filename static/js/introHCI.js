'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    var faded = 0;
    var clicks=0;
	$("#testjs").click(function(e) {
        clicks=clicks+1;

        switch(clicks)
        {
            case 1:
                $('#testjs').text("Experience Chan! It's not a lot of questions.");
                break;
            case 2:
                $('#testjs').text("Too many questions is the Chan disease.");
                 break;
            case 3:
                $('#testjs').text("The best way is just to observe the noise of the world.");
                 break;
            case 4:
                $('#testjs').text("The answer to your questions?");
                 break;
            case 5:
                $('#testjs').text("Ask your own heart.");
                clicks = 0;
                break;
        }
        $(".jumbotron p").toggleClass("active");
		
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);

    $("#submitBtn").click(submitClick);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    // var faded = $(containingProject).find(".project-faded");
    if (description.length == 0) { 
     $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else {
        description.fadeToggle();
    }
}

function submitClick(e) {
     // console.log("Form clicked");

     $($("#project").val()).animate( {
        width: $("#width").val()
     })
     
     var description = $($("#project").val()).find(".project-description");
     description.html($("#description").val());
}