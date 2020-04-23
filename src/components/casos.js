import Caso from "./caso";

const Casos = ({casos}) =>
    <article>
        <header>
            <h1>Lista de casos</h1>
        </header>
        <div className="lista-casos">
            {casos.map((caso, i) =>
                <Caso key={i} {...caso} />)
            }
        </div>
    </article>

export default Casos