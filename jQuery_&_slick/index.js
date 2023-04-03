// 1.1. Al situar el ratón encima de #setGreenColor, 
// establezca el color de fuente de #divTarget a verde. 
$(document).ready(
    function() {
        $("#setGreenColor").hover(
            function() {
                $("#divTarget").css("color","green");
            },
            function() {
                $("#divTarget").css("color","black");
            },
            
        )
    }
)

// 1.2. Al hacer doble click sobre #setRedColor, establezca su color de fondo a rojo. 
$(document).ready(
    function() {
        $("#setRedColor").dblclick(
            function() {
                $(this).css(
                    {"background-color": "red"}
                );
            }
        )
    }
    
);

// 1.3. Al salir el ratón de encima de #toggleVisible se alterne entre visible/invisible el div #divTarget.
 $(document).ready(
    function() {
        $("#toggleVisible").mouseleave(
            function() {
                $("#divTarget").toggle()
            }
        );
        $("#toggleVisible").mouseover(
            function() {
                $("#divTarget").toggle()
            }
        );
    }
 )


// 1.4.Al clicar sobre #movContinuo la primera vez mueva el elemento #divTarget hacia la derecha y al volver a 
// hacer clic, lo pare y lo mueva hacia la izquierda y viceversa. 

$(document).ready(function() {
    var moveRight = true;
    var pixelsToMove = 1000;
    var intervalTime = 2000;
    var divTarget = $("#divTarget");
    var movContinuo = $("#movContinuo");
    var currentLeft = parseInt(divTarget.css("left"));
  
    movContinuo.click(function() {
      if (moveRight) {
        var newLeft = currentLeft + pixelsToMove;
        divTarget.stop().animate({left: newLeft}, intervalTime);
        currentLeft = newLeft;
      } else {
        var newLeft = currentLeft - pixelsToMove;
        divTarget.stop().animate({left: newLeft}, intervalTime);
        currentLeft = newLeft;
      }
  
      if (currentLeft >= 200) {
        moveRight = false;
      } else if (currentLeft <= 0) {
        moveRight = true;
      }
    });
  });

  // 2.1. Al clicar en #addDiv, se crea un DIV con la clase .addDiv dentro de #domNodes que contendrá el 
  // texto que haya escrito en #text. 
  $(document).ready(
    function() {
        $("#addDiv").click(
            function() {
                let texto=$("#text").val();
                let nuevoDiv=$('<div class="addDiv">'+texto+'</div>');
                $("#domNodes").append(nuevoDiv);
            }
        )
    }
  )

// 2.2. Al clicar en #addSetContent, se crea un DIV con la clase .setContent dentro de #domNodes con el texto
// "SET CONTENT". Al clicar encima del div que acabamos de crear, se cambia el texto del nodo anterior 
// por el que haya escrito en #text. 
$(document).ready(
    function() {
        $("#addSetContent").click(
            function() {
                let textoSetContent="SET CONTENT";
                let nuevoDiv2=$('<div class="setContent">'+textoSetContent+'</div>');
                $("#domNodes").append(nuevoDiv2);
                nuevoDiv2.click(
                    function() {
                        $('#domNodes').on('click','.setContent', function() {
                            let newText=$('#text').val();
                            $(this).prev().text(newText);
                        })
                    }
                )
            }
        )
    }
)

// 2.3. Al clicar en #addDelNodePrev, se crea un DIV con la clase .delNode dentro de #domNodes con el texto 
// "DEL NODE PREV". Al clicar encima del div que acabamos de crear, se elimina el nodo anterior. 
$(document).ready(
    function() {
        $("#addDelNodePrev").click(
            function() {
                let textoNodePrev="DEL NODE PREV";
                let nuevoDivNode=$('<div class="delNode">'+textoNodePrev+'</div>');
                $("#domNodes").append(nuevoDivNode);
                nuevoDivNode.click(
                    function() {
                        $(this).prev().remove();
                    }
                );
            }
        )
    }
)

// 3. Importa el plugin slick https://kenwheeler.github.io/slick/ y utilízalo para convertir #slider en  un slider con las siguientes características: 
// El slider solo mostrará tres imágenes cada vez, con una transicion de 3 en 3, y se moverá automaticamente cada dos segundos. 
// Se mostrarán dos botones personalizados para pasar las distintas diapositivas con el texto NEXT y PREV. 
// Cuando la pantalla sea menor a 800px: 
// Se mostrarán solo dos imágenes,  
// Se ocultarán los botones personalizados  
// Se mostrarán los puntos (los dots). 
// La transicion será de 1 en 1 
// No se moverá automáticamente 

$(document).ready(
    function() {
        $("#slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow:"<button> NEXT </button>",
            prevArrow:"<button> PREV </button>",
            responsive: [{
                breakpoint: 800, 
                settings: {
                    slidesToScroll: 1, 
                    slidesToShow: 2, 
                    arrows: false, 
                    dots: true, 
                    autoplay: false, 
                },
            }]
        });
    }
)
