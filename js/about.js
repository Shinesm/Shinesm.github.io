$(".showcase-title").click(
  function()
  {
    var detail = $($(this).next());
    detail.slideToggle("slow")
    $(detail.find(".memo")).fadeToggle("slow");
  } 
);
