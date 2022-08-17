/** Using JQuery
 create a list that takes in two inputs (title of movie, rating (1-10))
 when you click submit the values will be apended a list and a delete button will also be created and when clicked it will delete the entire row (deletes both title and rating)
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
