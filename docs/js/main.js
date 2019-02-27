$(document).ready(function() {

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[href='#resume'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	
	// MixItUp - фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

	var filter_ramka = $('.filter-block__button--active');
    $('.filter-block__button').on('click', function(e) {        
        if (filter_ramka) filter_ramka.removeClass('filter-block__button--active');
        $(this).addClass('filter-block__button--active');
        filter_ramka = $(this);
    });

	

	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			// phone:  { required: true },
			message: { required: true }
		},

		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
			},
			message: "Пожалуйста, введите текст сообщения"
		},
		    submitHandler: function(form) {
            ajaxFormSubmit();
        }
	
  })

	    function ajaxFormSubmit() {
        var string = $("#contact-form").serialize();
        
        $.ajax( {
            type: "POST",
            url: "php/mail.php",
            data: string,
            success: function(html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });
        
        return false;
    }

    }); 