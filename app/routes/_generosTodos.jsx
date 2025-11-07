import { useLoaderData, Link } from "react-router";
import { API_BASE_URL } from "../utils/api";

export async function loader() {

    const genresResponse = await fetch(`${API_BASE_URL}/api/books/genres`);
    const genresData = await genresResponse.json();


    const genresWithBooks = await Promise.all(
        genresData.genres.map(async (genre) => {

            const genreSlug = genre.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, '-');

            const booksResponse = await fetch(
                `${API_BASE_URL}/api/books/genre/${genreSlug}`
            );
            const books = await booksResponse.json();

            return {
                name: genre,
                slug: genreSlug,
                books: books.slice(0, 10)
            };
        })
    );

    return { genres: genresWithBooks };
}

export default function Genero() {
    const { genres } = useLoaderData();

    return (
        <div className="container text-start">
            <h1 className="m-1">Todos los Géneros</h1>
            <h3>Descubre todos los géneros literarios en nuestro catálogo</h3>

            <div>
                {genres.map((genre, index) => (
                    <div className="container my-4" key={index} style={{ width: '1000px' }}>
                        <h2>{genre.name}</h2>
                        <div className="bookstand">
                            <div className="overflow-auto h-25">
                                <div className="d-flex flex-nowrap gap-4 pb-3">
                                    {genre.books.map((book) => (
                                        <div className="flex-shrink-0" key={book.id}>
                                            <img
                                                src={book.cover_url || "https://placehold.co/150"}
                                                className="img-fluid img-thumbnail"
                                                alt={book.title}
                                                style={{ width: '200px', height: '250px', objectFit: 'cover' }}
                                            />
                                            <h5 className="text-truncate" style={{ maxWidth: '200px' }}>
                                                {book.title}
                                            </h5>
                                            <h6 className="text-truncate" style={{ maxWidth: '200px' }}>{book.author}</h6>
                                            <Link
                                                to={`/detalle/${book.id}`}
                                                className="btn btn-light btn-sm"
                                            >
                                                Más información
                                            </Link>
                                        </div>
                                    ))}

                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link
                                            to={`/generosTodos/${genre.slug}`}
                                            className="btn btn-light"
                                        >
                                            Más {genre.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}