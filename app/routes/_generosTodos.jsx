
export default function Genero() {

    return (
        <div className="container text-start">

            <h1 className="m-1">Todos los Géneros</h1>
            <h3>Descubre todos los géneros literarios en nuestro catalogo</h3>
            <div>
                <div className="container">
                    <h2>Clásicos</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <a href="/detalle" type="button" className="btn btn-light">Más información</a>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <a href="/genero" type="button" className="btn btn-light ">Más libros de #este género </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Ficción</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <button type="button" className="btn btn-light">Más información</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <button type="button" className="btn btn-light ">Más libros de #este género </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Ciencia Ficción</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <button type="button" className="btn btn-light">Más información</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <button type="button" className="btn btn-light ">Más libros de #este género </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>historia</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <button type="button" className="btn btn-light">Más información</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <button type="button" className="btn btn-light ">Más libros de #este género </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Clásicos Latinoamericanos</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <button type="button" className="btn btn-light">Más información</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <button type="button" className="btn btn-light ">Más libros de #este género </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>No-ficción</h2>
                    <div className="bookstand">
                        <div className="overflow-auto h-25">
                            <div className="d-flex flex-nowrap gap-4 pb-3 ">
                                <div className="flex-shrink-1" >
                                    <img src="https://placehold.co/150" className="img-fluid img-thumbnail" alt="Book" />
                                    <h5>Titulo</h5>
                                    <h6 className="text-wrap">Autor</h6>
                                    <button type="button" className="btn btn-light">Más información</button>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">

                                    <button type="button" className="btn btn-light ">Más libros de #este género </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}