$(function(){
    $("#myInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#MyTable tbody tr ").filter(function() {
        $(this).toggle($(this).children('.name').text().toLowerCase().indexOf(value) > -1);       
      });
    });
  });