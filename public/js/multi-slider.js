/*$(document).ready(function(){
    $('.carousel[data-type="multi"] .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<4;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
          }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });
    });*/
    $('#partners_carousel').carousel(
      {
        interval: 2500
      });
      
      $('.carousel .partner-item').each(function()
      {
        var next = $(this).next();
        if (!next.length)
        {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      
        if (next.next().length>0)
        {
          next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');  
        }
        else
        {
          $(this).siblings(':first').children(':first-child').clone().appendTo($(this));  
        }
      });