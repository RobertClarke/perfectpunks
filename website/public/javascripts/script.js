$(function(){$('body').on('click','.jsShareBtn',function(e){e.preventDefault()
$(this).closest('.jsShareBlock').toggleClass('active');$('.jsSocialList').slideToggle();});$('.styleguide').on('change load','.jsTriggerTheme',function(){if($(".jsTriggerTheme").is(':checked')){$('body').addClass('inverse')}
else{$('body').removeClass('inverse')}});});