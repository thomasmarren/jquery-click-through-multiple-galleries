var categories = $(".category")
var $image = $("<img>").appendTo(".mainPhoto");

function remove(){
  $("#description1").hide();
  $("#description2").hide();
  $("#description3").hide();
};

//Remove all descriptions except Description 1 on initial page load
remove();
$("#description1").show();


//Load image into mainPhoto when thumbnail is clicked
$(".thumbnails a").click(function (event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src",imageLocation);
  $(".mainPhoto img").css("border","15px black solid");
});


//Change galleries
$("#galleryNav a")
  .click(function(){
  var which = $(this).data("val");
  categories.hide();
  $('#' + which)
    .show()
    .find(".thumbnails a:first")
    .click();
})
.eq(0)
  .click();


//Gallery Descriptions
$("#galleryOne").click(function(){
  remove();
  $("#description1").show();
});
$("#galleryTwo").click(function(){
  remove();
  $("#description2").show();
});
$("#galleryThree").click(function(){
  remove();
  $("#description3").show();
});


if ($(window).width() > 1000 ) {   
      $('.thumbnails a').mouseover(function(){
      $(this).css("opacity",".8")
      });
      $('.thumbnails a').mouseout(function(){
      $(this).css("opacity","1")
      });
}