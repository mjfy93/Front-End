import { faStar } from '../utils/faIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Detalle() {

    return (

        <div className="containerDetalle">
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="https://placehold.co/300" alt="" />
                            {/* <h3 className='rating mt-3 border p-1 mx-5'>
                                <FontAwesomeIcon icon={faStar} className='starIcon px-1 icon-hover' />
                                <FontAwesomeIcon icon={faStar} className='starIcon px-1' />
                                <FontAwesomeIcon icon={faStar} className='starIcon px-1' />
                                <FontAwesomeIcon icon={faStar} className='starIcon px-1' />
                                <FontAwesomeIcon icon={faStar} className='starIcon px-1' />
                            </h3> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Título</h5>
                            <h6 className="cart-title">Autor</h6>
                            <p className="card-text">Descripción. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam autem repellat tempora obcaecati ab fugiat ducimus officia. Adipisci possimus est quasi ratione reiciendis quia accusamus neque, ad voluptatibus voluptatem?</p>
                            <div className='botonesDetalle d-flex'>
                                <div className="dropdown mx-1 p-1">
                                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Estado de Lectura
                                    </button>
                                    <ul className="dropdown-menu mx-1 p-1">
                                        <li><a className="dropdown-item" href="#">Leído</a></li>
                                        <li><a className="dropdown-item" href="#">Leyendo</a></li>
                                        <li><a className="dropdown-item" href="#">Quiero Leerlo</a></li>
                                    </ul>
                                </div>
                                <a href='/resena' className='btn btn-light mx-1 p-2 '>Agregar una reseña</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}