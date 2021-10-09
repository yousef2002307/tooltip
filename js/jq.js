$(document).ready(function(){
$("ul li").hover(function(){
  $(this).find("span").animate({
    opacity : 1
});
  $(this).find("span").animate({
      top : -60
  },200)
 
},
function(){
  $(this).find("span").animate({
    top : -85
},200)
$(this).find("span").animate({
opacity : 0
})
});
});









