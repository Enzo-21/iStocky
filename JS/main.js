class Producto {
    constructor(nombre, imagen, descripcion, precio, stock) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const productos = [];

let Caja = {
    saldo: 0
}

class UI {

    /* Funcion que va a permitir instanciar los diferentes productos que hagamos con la clase Producto */
    agregarProducto(producto) {
        const listaProductos = document.getElementById('productos');
        const div = document.createElement('div');
        

        div.innerHTML = `
        <div class="card col-md-3 m-3">
            <img class="card-img-top" src=${producto.imagen} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                    <div class="card-text">
                        <ul>
                            <li><a href="">Ver descripción</a></li>
                            <li>Precio: $${producto.precio} </li>
                            <li id='stock${productos.length}'>Stock: ${producto.stock}</li>
                            <li>SKU: ${productos.length}</li>
                        </ul>
                    </div>
                <a name='comprar' class="btn btn-primary text-white" id='${productos.length}' >Registrar compra</a>
                <a href="#" class="btn btn-danger oculto" name="borrar">Eliminar</a>
            </div>
        </div>
       `;
        productos.push(producto);
        listaProductos.appendChild(div);
        $('.btn-danger').addClass('oculto');
    }

    

    

    resetarFormulario(){
        document.getElementById('formulario').reset();
        

        document.getElementById('form-gasto').reset();
    }


    eliminarProducto(elemento) {
        if (elemento.name === 'borrar') {
            elemento.parentElement.parentElement.parentElement.remove();
        }
     }


        /* Una vez concretada la venta */
    sumarSaldoCaja(valorProducto) {
        if (!isNaN(valorProducto)) {
            let saldo = Caja.saldo + valorProducto;
            document.getElementById('caja').textContent = ` $${saldo}`;
            Caja.saldo = saldo;
        }
    }

    restarStock(producto) {
        producto.stock = producto.stock -1;
    }

}

document.getElementById('formulario').addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre-producto').value;
    const precio = parseInt(document.getElementById('precio-producto').value);
    const descripcion = document.getElementById('descripcion-producto').value;
    const stock = parseInt(document.getElementById('stock-producto').value);
    const imagen = document.getElementById('imagen-producto').value;

    const productoCargado = new Producto(nombre, imagen, descripcion, precio, stock);

   
    const ui = new UI;
    ui.agregarProducto(productoCargado);
    ui.resetarFormulario();
    e.preventDefault();
    const compra = new Compra;
    compra.comprar();
})


//Productos Creados Manualmente


const producto1 = new Producto(
    /* Nombre */
    'DAY-DATE 40',
    /* Imagen */
    'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m228238-0042.png',
    /* Descripción */'Rolex cuenta con su propia fundición, lo que le ha permitido crear aleaciones de oro de 18 quilates de la más alta calidad. Según la proporción de plata, cobre, platino o paladio, se obtienen diferentes tipos de oro de 18 quilates: amarillo, rosa o blanco. Son elaborados exclusivamente con los metales más puros y sometidos a las más meticulosas inspecciones en un laboratorio interno con tecnología puntera, antes de formar el oro y con la misma atención que se presta a la calidad. El compromiso de Rolex con la calidad empieza desde el origen',
    /* Precio */
    2500,
    /* Stock */
    5);


    const producto2 = new Producto(
    /* Nombre */
    'SKY-DWELLER',
    /* Imagen */
    'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m326934-0003.png?impolicy=upright-majesty',
     /* Descripción */'Para preservar la belleza de sus relojes de oro rosa, Rolex creó y patentó una exclusiva aleación de oro rosa de 18 quilates en su propia fundición: el oro Everose. Presentado en 2005, el oro Everose de 18 quilates se emplea en todos los modelos Rolex de oro rosa',
    /* Precio */
    4000,
    /* Stock */
    5);

    const producto3 = new Producto(
    /* Nombre */
    'DATEJUST 41',
    /* Imagen */
    'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m126334-0014.png?impolicy=upright-majesty',
         /* Descripción */'El oro es codiciado por su lustre y su nobleza. El acero afianza la fuerza y la fiabilidad. Juntos, combinan armoniosamente lo mejor de sus propiedades. Verdadera firma de Rolex, el Rolesor ha sido parte de los modelos Rolex desde principios de los años treinta y fue patentado como nombre en 1933. Es uno de los prominentes pilares de la colección Oyster.',
    /* Precio */
    2700,
    /* Stock */
    5);

const producto4 = new Producto(
    /* Nombre */
    'OYSTER PERPETUAL 39',
    /* Imagen */
    'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m116000-0010.png?impolicy=upright-majesty',
             /* Descripción */'Rolex utiliza acero Oystersteel para las cajas de acero de sus relojes. Especialmente desarrollado por Rolex, el acero Oystersteel pertenece a la familia del acero 904L, las aleaciones más utilizadas en la alta tecnología y en las industrias química y aeroespacial, en las que la resistencia a la corrosión es esencial. El acero Oystersteel es extremadamente resistente, ofrece un acabado excepcional al ser pulido y conserva su belleza incluso en las condiciones más extremas.',
    /* Precio */
    3400,
    /* Stock */
    5);



const ui = new UI;
ui.agregarProducto(producto1);
ui.agregarProducto(producto2);
ui.agregarProducto(producto3);
ui.agregarProducto(producto4);



/* Hacer un bucle for= cada uno de los productos instanciados tendrá un valor */


//Elimina producto cuando se clickea el boton 
document.getElementById('productos').addEventListener('click', function(e){
    const ui = new UI();
    ui.eliminarProducto(e.target);
})

