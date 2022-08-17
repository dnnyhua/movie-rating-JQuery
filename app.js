/*
Using JQuery Build an application that uses jQuery to do the following:

1. Contains a form with two inputs for a title and rating along with a button to submit the form.

2. When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

3. When the button to remove is clicked, remove each title and rating from the DOM.

*/

$(document).ready(function () {
  $("#movie-form").on("submit", function (evt) {
    evt.preventDefault();
    var title = $("#title").val();
    var rating = $("#rating").val();

    $("#table-body").append(
      "<tr> <td>" +
        title +
        "</td> <td>" +
        rating +
        "</td> <td> <button> Delete </button>  </td></tr>"
    );
  });

  // When you click the delete button
  $("tbody").on("click", function (evt) {
    $(evt.target).closest("tr").remove();
  });
});
