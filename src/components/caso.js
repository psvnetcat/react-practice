import Producto from "./producto";

const Caso = ({nombre, productos, comentarios}) =>
    <section className="detalle-caso">
        <h2>{nombre}</h2>
        <ul className={"lista-productos"}>
            {productos.map((producto, i) =>
                <Producto key={i} {...producto}/>)}
        </ul>
    </section>

export default Caso