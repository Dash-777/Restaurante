$(document).ready(function() {
    $(window).scroll(function() {
        $('.animate-on-scroll').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });

    $('#formReserva').submit(function(e) {
        e.preventDefault();

        let isValid = true;
        $(this).find('[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
  
            $('#modalConfirmacion').modal('show');
            
            $(this).trigger('reset');
        }
    });

    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 500);
    });

    $('.carousel-caption').addClass('animate__animated animate__fadeInUp');
    $('.btn-reserva').addClass('animate__animated animate__pulse animate__infinite');
});

