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
                    <button className="nav-link" id="clasicos-tab" data-bs-toggle="tab" data-bs-target="#clasicos-pane" type="button" role="tab" aria-controls="clasicos-pane" aria-selected="false">Clásicos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="cienciaFiccion-tab" data-bs-toggle="tab" data-bs-target="#cienciaFiccion-pane" type="button" role="tab" aria-controls="cienciaFiccion-pane" aria-selected="false">Ciencia Ficción</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="ficcion-tab" data-bs-toggle="tab" data-bs-target="#ficcion-pane" type="button" role="tab" aria-controls="ficcion-pane" aria-selected="false">Ficción</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="historia-tab" data-bs-toggle="tab" data-bs-target="#historia-pane" type="button" role="tab" aria-controls="historia-pane" aria-selected="false">Historia</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="litLatina-tab" data-bs-toggle="tab" data-bs-target="#litLatina-pane" type="button" role="tab" aria-controls="litLatina-pane" aria-selected="false">Literatura Latinoamericana</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="noFiccion-tab" data-bs-toggle="tab" data-bs-target="#noFiccion-pane" type="button" role="tab" aria-controls="noFiccion-pane" aria-selected="false">No-Ficción</button>
                </li>
            </ul>


            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="todosLibros-pane" role="tabpanel" aria-labelledby="librosTodos-tab">
                    No tienes libros en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="autores-pane" role="tabpanel" aria-labelledby="autores-tab">
                    No tienes autores en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="clasicos-pane" role="tabpanel" aria-labelledby="clasicos-tab">
                    No tienes libros del género Clásicos en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="cienciaFiccion-pane" role="tabpanel" aria-labelledby="cienciaFiccion-tab">
                    No tienes libros del género Ciencia Ficción en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="ficcion-pane" role="tabpanel" aria-labelledby="ficcion-tab">
                    No tienes libros del género Ficción en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="historia-pane" role="tabpanel" aria-labelledby="historia-tab">
                    No tienes libros del género Historia en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="litLatina-pane" role="tabpanel" aria-labelledby="litLatina-tab">
                    No tienes libros del género Literatura Latinoamericana en tu biblioteca.
                </div>
                <div className="tab-pane fade" id="noFiccion-pane" role="tabpanel" aria-labelledby="noFiccion-tab">
                    No tienes libros del género No-Ficción en tu biblioteca.
                </div>
            </div>
        </div>
    )
}