class Compra {
    comprar() {
    
        $('a[name=comprar]').click((e)=> {
            const nombre = productos[e.target.id].nombre;
            const precio = productos[e.target.id].precio;
            const stock = productos[e.target.id].stock;
    
           /*  console.log(`Nombre: ${nombre}`)
            console.log(`Precio: $${precio}`)
            console.log(`Stock: ${stock}`) */
    
            if (stock > 0) {
                const ui = new UI;
                ui.sumarSaldoCaja(precio);
        
                ui.restarStock(productos[e.target.id]);
                document.getElementById(`stock${e.target.id}`).textContent = `Stock: ${stock-1}`;
            } else {
                alert('No hay stock de este producto');
            }
    
        })
        
    };
}
let compra = new Compra;
compra.comprar();