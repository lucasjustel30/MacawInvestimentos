




$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var top = $(this).offset().top - 200;
            if(top >= offset && top  < height + offset){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + ' "]').addClass('active');
            }

        });

    });

    $('#abrirContaBtn').click(function() {
        window.location.href = 'https://digital.necton.com.br/cadastro/?assessor=592951';
    });

});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Interrompe o envio padrão do formulário
    event.preventDefault();

    // Envia o formulário
    this.submit();

    // Redireciona para a página de obrigado após um curto intervalo de tempo (1000ms = 1 segundo)
    setTimeout(function() {
        window.location.href = "obrigado.html";
    }, 1000);
});







