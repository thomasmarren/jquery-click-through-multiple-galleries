function removeDescriptions(){
  $("#description-one").hide();
  $("#description-two").hide();
  $("#description-three").hide();
};

removeDescriptions();
$("#description-one").show();

var $image = $("<img>").appendTo(".mainPhoto");
$(".thumbnails a").click(function (event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src",imageLocation);
  $(".mainPhoto img").css("border","15px black solid");
});

$("#galleryNav a")
  .click(function(){
  var which = $(this).data("val");
  $(".category").hide();
  removeDescriptions()
  $("#description-" + which).show()
  $('#' + which)
    .show()
    .find(".thumbnails a:first")
    .click();
})
.eq(0)
  .click();

if ($(window).width() > 1000 ) {
      $('.thumbnails a').mouseover(function(){
      $(this).css("opacity",".8")
      });
      $('.thumbnails a').mouseout(function(){
      $(this).css("opacity","1")
      });
}
