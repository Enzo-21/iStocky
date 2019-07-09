$(document).ready(function(){//ACCION CUANDO CARGUE LA PAGINA

  var altura_arr = [];//CREAMOS UN ARREGLO VACIO
  $('.card').each(function(){//RECORREMOS TODOS LOS CONTENEDORES DE LAS IMAGENES, DEBEN TENER LA MISMA CLASE
    var altura = $(this).height(); //LES SACAMOS LA ALTURA
    altura_arr.push(altura);//METEMOS LA ALTURA AL ARREGLO
  });
  altura_arr.sort(function(a, b){return b-a}); //ACOMODAMOS EL ARREGLO EN ORDEN DESCENDENTE
  $('.card').each(function(){//RECORREMOS DE NUEVO LOS CONTENEDORES
    $(this).css('height',altura_arr[0]);//LES PONEMOS A TODOS LOS CONTENEDORES EL PRIMERO ELEMENTO DE ALTURA DEL ARREGLO, QUE ES EL MAS GRANDE.
  });
});

mostrarForm = ()=> {
    document.getElementById("formulario-producto").classList.toggle("oculto");
    
  }

  $('#cargar-producto').click(()=> {
    mostrarForm();
  })

/* ---------------------- */

  $('#eliminar-producto').click((e)=> {
    e.preventDefault();
    $('.btn-danger').toggleClass('oculto');
})

/* --------------------- */

 $('#informar-gasto').click((e)=> {
   e.preventDefault();
   document.getElementById("form-gasto").classList.toggle("oculto");
 })

 $('#form-gasto').submit((e)=> {
  const gasto = parseInt(document.getElementById('precio-gasto').value);
  Caja.saldo -= gasto;


   e.preventDefault();
   const ui = new UI;
   ui.resetarFormulario();
   ui.sumarSaldoCaja(0);
   document.getElementById("form-gasto").classList.toggle("oculto");
 })



