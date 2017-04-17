
// Расскрытое пари
$('.js--vote-title a').on('click', function(){

	allBet = $( this ).parents('.vote-left').find("a"),
  	index = $.inArray( this, allBet );
  	console.log(index);

  	$('.vote-right').removeClass('active');
  	$('.vote-right:nth-child('+(index + 1)+')').addClass('active');

	$('.vote-left .js--vote-panel').removeClass('active');
	$(this).parents('.js--vote-panel').addClass('active');

});
// END Расскрытое пари
//select2
$(document).ready(function() {
	$(".js-select").select2({
		minimumResultsForSearch: -1
	});
	$(".js-select-modalBet").select2({
		minimumResultsForSearch: -1,
		placeholder: "Выберите вариант"
	});
});
$('.js-select-teg').select2({
	multiple: true,
	allowClear: true,
	placeholder: "",
	maximumSelectionLength: 2,
	theme      : "classic"
}).on('select2:select', function (e) {
	$(this).val([]).trigger('change');
	$(this).val([e.params.data.id]).trigger("change");
});
//END select2
// Календарь
$('#dateProfile').datepicker({
  view: 'years'
});
$('#dateCreateBet').datepicker({
    minDate: new Date()
});
// END Календарь

$("#tel").mask("+7(999) 999-9999");//Маска для телефона

$('input[type=file]').bootstrapFileInput(); //input file

// Скроллбар
(function($){
    $(window).on("load",function(){
        $(".scroll").mCustomScrollbar();

        $(".scroll-x").mCustomScrollbar({
          axis: 'x'
        });
    });
})(jQuery);
// END Скроллбар

// Slick Слайдер
$('.bet-slider').slick({
  lazyLoad: 'ondemand',
  // slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false
});
// END Slick Слайдер

// Тач для bootstrap слайдера
$("#carousel-header").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});
// END Тач для bootstrap слайдера


//
(function($) {
  $.fn.formToWizard = function( options, cmdParam1 ) {
      if (this.length == 0) return this;

      if( typeof options !== 'string' ) {
          options = $.extend({
              submitButton:       '',
              showProgress:       true,
              showStepNo:         true,
              validateBeforeNext: null,
              select:             null,
              progress:           null,
              nextBtnName:        'Далее',
              prevBtnName:        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
              buttonTag:          'a',
              nextBtnClass:       'btn next',
              prevBtnClass:       'btn prev'
          }, options);
      }

      var element = this
          , steps = $( element ).find( "fieldset" )
          , count = steps.length
          , submmitButtonName = "#" + options.submitButton
          , commands = null;


      if( typeof options !== 'string' ) {
          //assign options to current/selected form (element)
          $( element ).data( 'options', options );

          /**************** Validate Options ********************/
          if( typeof( options.validateBeforeNext ) !== "function" )
              options.validateBeforeNext = function() { return true; };

          if( options.showProgress && typeof(options.progress) !== "function") {
              if( options.showStepNo )
                  $(element).before("<ul id='steps' class='steps'></ul>");
              else
                  $(element).before("<ul id='steps' class='steps breadcrumb'></ul>");
          }
          /************** End Validate Options ******************/


          steps.each(function(i) {
              $(this).wrap('<div id="step' + i + '" class="stepDetails"></div>');
              $(this).append('<p id="step' + i + 'commands" class="commands"></p>');

              // if( options.showProgress && typeof(options.progress) !== "function") {
              //     if( options.showStepNo )
              //         $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + $(this).find("legend").html() + "</span></li>");
              //     else
              //         $("#steps").append("<li id='stepDesc" + i + "'>" + $(this).find("legend").html() + "</li>");
              // }

              if (i == 0) {
                  createNextButton(i);
                  selectStep(i);
              }
              else if (i == count - 1) {
                  $("#step" + i).hide();
                  createPrevButton(i);
                  // move submit button to the last step
                  $(submmitButtonName).addClass('next').detach().appendTo("#step" + i + "commands");
              }
              else {
                  $("#step" + i).hide();
                  createPrevButton(i);
                  createNextButton(i);
              }
          });

      } else if( typeof options === 'string' ) {
          var cmd = options;

          initCommands();

          if( typeof commands[ cmd ] === 'function' ) {
              commands[ cmd ]( cmdParam1 );
          } else {
              throw cmd + ' is invalid command!';
          }
      }

      function initCommands() {
          options = $( element ).data( 'options' );

          commands = {
              GotoStep: function( stepNo ) {
                  var stepName = "step" + (--stepNo);

                  if( $( '#' + stepName )[ 0 ] === undefined ) {
                      throw 'Step No ' + stepNo + ' not found!';
                  }

                  if( $( '#' + stepName ).css( 'display' ) === 'none' ) {
                      $( element ).find( '.stepDetails' ).hide();
                      $( '#' + stepName ).show();
                      selectStep( stepNo );
                  }
              },
              NextStep: function() {
                  $( '.stepDetails:visible' ).find( 'a.next' ).click();
              },
              PreviousStep: function() {
                  $( '.stepDetails:visible' ).find( 'a.prev' ).click();
              }
          };
      }

      function createPrevButton(i) {
          var stepName = 'step' + i;
          $('#' + stepName + 'commands').append(
              '<' + options.buttonTag + ' href="#" id="' + stepName + 'Prev" class="' + options.prevBtnClass + '">' +
              options.prevBtnName +
              '</' + options.buttonTag + '>'
          );

          $("#" + stepName + "Prev").bind("click", function(e) {
              $("#" + stepName).hide();
              $("#step" + (i - 1)).show();
              selectStep(i - 1);
              return false;
          });
      }

      function createNextButton(i) {
          var stepName = 'step' + i;
          $('#' + stepName + 'commands').append(
              '<' + options.buttonTag + ' href="#" id="' + stepName + 'Next" class="' + options.nextBtnClass + ', btn-next">' +
              options.nextBtnName +
              '</' + options.buttonTag + '>');

          $("#" + stepName + "Next").bind( "click", function(e) {
              if( options.validateBeforeNext(element, $("#" + stepName)) === true ) {
                  $("#" + stepName).hide();
                  $("#step" + (i + 1)).show();
                  //if (i + 2 == count)
                  selectStep(i + 1);
              }

              return false;
          });
      }

      function selectStep(i) {
          if ( typeof(options.progress) === "function" ) {
              options.progress(i, count);
          // } else if( options.showProgress ) {
          //     $("#steps li").removeClass("current");
          //     // $("#stepDesc" + i).addClass("current");
          }

          if( options.select ) {
              options.select(element, $('#step'+i));
          }
      }
      return this;
  }
})(jQuery); 
//
//stikySidebar
function stikySidebar(){
    var a = document.querySelector('#aside-stiky'), 
        b = null, 
        K = null, 
        Z = 0, 
        P = 20, 
        N = 20;
    
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    
    function Ascroll() {
      var Ra        = a.getBoundingClientRect(),
          R1bottom  = document
                    .querySelector('#article-stiky')
                    .getBoundingClientRect()
                    .bottom;
      if (Ra.bottom < R1bottom) {
        if (b == null) {
          var Sa = getComputedStyle(a, ''), s = '';
          b = document.createElement('div');
          b.className = "stop";
          b.style.cssText = s   + ' box-sizing: border-box; width: ' 
                                + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          var l = a.childNodes.length;
          for (var i = 1; i < l; i++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        var Rb = b.getBoundingClientRect(),
            Rh = Ra.top + Rb.height,
            W = document.documentElement.clientHeight,
            R1 = Math.round(Rh - R1bottom),
            R2 = Math.round(Rh - W);
        if (Rb.height > W) {
          if (Ra.top < K) {
            if (R2 + N > R1) {
              if (Rb.bottom - W + N <= 0) {
                b.className = 'sticky';
                b.style.top = W - Rb.height - N + 'px';
                Z = N + Ra.top + Rb.height - W;
              } else {
                b.className = 'stop';
                b.style.top = - Z + 'px';
              }
            } else {
              b.className = 'stop';
              b.style.top = - R1 +'px';
              Z = R1;
            }
          } else {
            if (Ra.top - P < 0) {
              if (Rb.top - P >= 0) {
                b.className = 'sticky';
                b.style.top = P + 'px';
                Z = Ra.top - P;
              } else {
                b.className = 'stop';
                b.style.top = - Z + 'px';
              }
            } else {
              b.className = '';
              b.style.top = '';
              Z = 0;
            }
          }
          K = Ra.top;
        } else {
          if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R1) {
              b.className = 'stop';
              b.style.top = - R1 +'px';
            } else {
              b.className = 'sticky';
              b.style.top = P + 'px';
            }
          } else {
            b.className = '';
            b.style.top = '';
          }
        }
        window.addEventListener('resize', function() {
          a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
      }
    }
};
//END stikySidebar
// Фиксирует категории
var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.sticky-anchor'),
      content = node.find('.sticky-content');
  
  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        fixed = false;
      }
    }
  };
  
  $(window).on('scroll', onScroll);
};
//END Фиксирует категории

