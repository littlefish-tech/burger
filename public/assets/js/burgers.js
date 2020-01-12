$(function() {
    $(".change-devoure").on("click", function(event) {
      //console.log(event)
      var id = $(this).data("id");
      //console.log("$$$$$$$$$$$$$$$$$", id)
      var newDevoure = $(this).data("newdevoure");
      console.log(newDevoure)
  
      var newDevoureState = {
        devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoureState
      }).then(
        function() {
          console.log("changed to", newDevoure);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bur").val().trim(),
        devoured: 0
        //devoured: $("[name=devoured]:checked").val().trim()
      };
  if($("#bur").val() === ""){
    alert("You must type a Burger's name")
  }else{
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      }
    });
  });
  