//waits to start function until DOM is loaded
$(function() {
    //button to add burger
  $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
          burger_name: $("#newburger").val().trim(),
          devoured: 0
      };
      //send POST 
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function() {
          console.log("Added new burger");
          location.reload();
      });
  });
  //button to eat burger
  $(".eatburger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var devouredState = {
          devoured: 1
      };
      //PUT request
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          location.reload();
      });
  });
  //button to delete burger
  $(".trashburger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      //DELETE request
      $.ajax({
          type: "DELETE",
          url: "/api/burgers/" + id
      }).then(location.reload());
  });
})