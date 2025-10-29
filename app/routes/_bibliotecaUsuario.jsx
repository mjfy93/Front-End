import { Link } from 'react-router'

export default function BibliotecaUsuario() {
    return (
        <div className="bibliotecaUsuarioContainer">

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="librosTodos-tab" data-bs-toggle="tab" data-bs-target="#todosLibros-pane" type="button" role="tab" aria-controls="todosLibros-pane" aria-selected="true">Biblioteca</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="autores-tab" data-bs-toggle="tab" data-bs-target="#autores-pane" type="button" role="tab" aria-controls="autores-pane" aria-selected="false">Autores</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="leyendo-tab" data-bs-toggle="tab" data-bs-target="#leyendo-pane" type="button" role="tab" aria-controls="leyendo-pane" aria-selected="false">Leyendo</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="leido-tab" data-bs-toggle="tab" data-bs-target="#leido-pane" type="button" role="tab" aria-controls="leido-pane" aria-selected="false">Leidos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="porLeer-tab" data-bs-toggle="tab" data-bs-target="#porLeer-pane" type="button" role="tab" aria-controls="porLeer-pane" aria-selected="false">Por Leer</button>
                </li>

            </ul>


            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="todosLibros-pane" role="tabpanel" aria-labelledby="librosTodos-tab">
                    No tienes libros en tu biblioteca. ¡Agrega un libro! <Link to='/libros'>Explora nuestra biblioteca</Link>
                </div>
                <div className="tab-pane fade" id="autores-pane" role="tabpanel" aria-labelledby="autores-tab">
                    No tienes autores en tu biblioteca. ¡Agrega un libro! <Link to='/libros'>Explora nuestra biblioteca</Link>
                </div>
                <div className="tab-pane fade" id="leyendo-pane" role="tabpanel" aria-labelledby="leyendo-tab">
                    No estás leyendo ningún libro en este momento. ¡Agrega un libro! <Link to='/libros'>Explora nuestra biblioteca</Link>
                </div>
                <div className="tab-pane fade" id="leido-pane" role="tabpanel" aria-labelledby="leido-tab">
                    No tienes libros leídos en tu biblioteca. ¡Agrega un libro! <Link to='/libros'>Explora nuestra biblioteca</Link>
                </div>
                <div className="tab-pane fade" id="porLeer-pane" role="tabpanel" aria-labelledby="porLeer-tab">
                    No tienes libros por leer en tu biblioteca. ¡Agrega un libro! <Link to='/libros'>Explora nuestra biblioteca</Link>
                </div>

            </div>
        </div>
    )
}