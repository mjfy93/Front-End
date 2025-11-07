import { useLoaderData, Link, useNavigate } from "react-router";
import { API_BASE_URL } from "../utils/api";

export async function loader({ params }) {
    const { authorId } = params;

    const response = await fetch(
        `${API_BASE_URL}/api/authors/${authorId}/profile`
    );

    if (!response.ok) {
        throw new Response("Autor no encontrado", { status: 404 });
    }

    return response.json();
}

export default function AutorPerfil() {
    const { author, stats, books } = useLoaderData();
    const navigate = useNavigate();

    console.log(books)
    return (
        <div className="container my-5">
            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/autores">Autores</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {author.nombre_completo}
                    </li>
                </ol>
            </nav>

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="btn btn-outline-light mb-4"
            >
                ← Volver
            </button>

            {/* Author Header Section */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h1 className="display-4 mb-3">{author.nombre_completo}</h1>

                            {/* Author Stats */}
                            <div className="d-flex gap-3 flex-wrap">
                                <span className="badge bg-primary fs-6 px-3 py-2">
                                    <i className="bi bi-book"></i> {stats.total_libros} {stats.total_libros === 1 ? 'Libro' : 'Libros'}
                                </span>
                                <span className="badge bg-secondary fs-6 px-3 py-2">
                                    <i className="bi bi-tags"></i> {stats.total_generos} {stats.total_generos === 1 ? 'Género' : 'Géneros'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Biography Section */}
                    {author.biografia_autor && (
                        <div className="card mt-4">
                            <div className="card-body">
                                <h3 className="card-title">Biografía</h3>
                                <p className="card-text lead">{author.biografia_autor}</p>
                            </div>
                        </div>
                    )}

                    {/* Genres Section */}
                    {stats.generos && stats.generos.length > 0 && (
                        <div className="mt-4">
                            <h4>Géneros literarios:</h4>
                            <div className="d-flex gap-2 flex-wrap">
                                {stats.generos.map((genero, index) => {
                                    const genreSlug = genero
                                        .toLowerCase()
                                        .normalize("NFD")
                                        .replace(/[\u0300-\u036f]/g, "")
                                        .replace(/\s+/g, '-');

                                    return (
                                        <Link
                                            key={index}
                                            to={`/genero/${genreSlug}`}
                                            className="badge bg-info text-dark fs-6 text-decoration-none px-3 py-2"
                                        >
                                            {genero}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className="my-5" />

            {/* Books Section */}
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4">
                        Obras de {author.nombre_autor} {author.apellido_autor} en nuestro catálogo
                    </h2>

                    {books && books.length > 0 ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                            {books.map((libro) => (
                                <div className="col" key={libro.id_libros}>
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={libro.enlace_portada_libro || "https://placehold.co/300x450"}
                                            className="card-img-top"
                                            alt={libro.titulo_libro}
                                            style={{
                                                height: '500px',
                                                objectFit: 'cover',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => navigate(`/detalle/${libro.id_libros}`)}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{libro.titulo_libro}</h5>

                                            <span className="badge bg-info text-dark mb-2 align-self-start">
                                                {libro.genero_libro}
                                            </span>

                                            {/* {libro.descripcion_libros && (
                                                <p className="card-text small text-muted flex-grow-1">
                                                    {libro.descripcion_libros.length > 120
                                                        ? `${libro.descripcion_libros.substring(0, 120)}...`
                                                        : libro.descripcion_libros}
                                                </p>
                                            )} */}

                                            <div className="d-flex gap-2 mt-auto">
                                                <Link
                                                    to={`/detalle/${libro.id_libros}`}
                                                    className="btn btn-light btn-sm flex-grow-1"
                                                >
                                                    Ver detalles
                                                </Link>
                                                {/* 
                                                {libro.enlace_asin_libro && (
                                                    <a
                                                        href={`https://www.amazon.com/dp/${libro.enlace_asin_libro}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-warning btn-sm"
                                                        title="Ver en Amazon"
                                                    >
                                                        <i className="bi bi-cart"></i>
                                                    </a>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="alert alert-info" role="alert">
                            <i className="bi bi-info-circle"></i> Este autor aún no tiene libros registrados en nuestro catálogo.
                        </div>
                    )}
                </div>
            </div>

            {/* Additional Info Section
            {author.created_at && (
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card bg-light">
                            <div className="card-body">
                                <small className="text-muted">
                                    Autor agregado al catálogo el: {new Date(author.created_at).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
}

// Error boundary for 404 and other errors
export function ErrorBoundary({ error }) {
    return (
        <div className="container my-5">
            <div className="alert alert-danger">
                <h2>Error</h2>
                <p>{error?.message || error?.data || 'Autor no encontrado'}</p>
                <Link to="/autores" className="btn btn-light mt-3">
                    ← Volver a Autores
                </Link>
            </div>
        </div>
    );
}