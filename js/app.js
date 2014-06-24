(function($){
  
  $('.timing .button').on('click',function(e){
    e.preventDefault();
    var $this = $(this).parent();
    $this.find('.demo').addClass('hover');

    setTimeout(function(){
      $this.find('.demo').removeClass('hover');
    },3000);
  });

  


})(jQuery);


// transition generator
(function($){

  var easing = 'linear';
  var duration = 2000;
  var properties = [];
  var $style;

  function generateCss(){
    $style.html('');
    var css = '#demo{';
    css += makeProperty('-webkit-transition-property','all');
    css += makeProperty('transition-property','all');
    css += makeProperty('-webkit-transition-timing-function',easing);
    css += makeProperty('transition-timing-function',easing);
    css += makeProperty('-webkit-transition-duration',duration+'ms');
    css += makeProperty('transition-duration',duration+'ms');
    css += '}';

    css += ' #demo.hover{';

    $('input[name="property"]:checked').each(function(i,e){
      console.log('hi');
      switch($(this).val()){
        case 'background-color':
          css += makeProperty('background-color','#FFDC00');
        break;
        case 'left':
          css += makeProperty('left','300px');
        break;
        case 'scale':
          css += makeProperty('-webkit-transform','scale(0.5,0.5)');
          css += makeProperty('transform','scale(0.5,0.5)');
        break;
      }
    });
    
    css += '}';

    console.log(css);
    $style.html(css);
  }

  function makeProperty(property,value){
    return property + ':' + value +'; ';
  }

  $(document).ready(function(e){

    $style = $('#style');
    $demo = $('#demo');

    $('select[name="easing"]').on('change',function(e){
      easing = $(this).val();
    });

    $('[name="duration"').on('input',function(e){
      duration = $(this).val();
    });

    $('.generate,#demo').on('click',function(e){

      generateCss();
      $demo.addClass('hover');
      
      setTimeout(function(){
        console.log('remove');
        $demo.removeClass('hover');
      },duration);
      
    })


  });
  

})(jQuery);