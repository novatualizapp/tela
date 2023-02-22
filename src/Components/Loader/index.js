import React from 'react'
import imageLoader from '../../Assets/Images/loading_mobile.gif'
import './loader.css'

const Loader = () => {

    return (
        <div>

            <div className="loader-full">
                <img src={imageLoader} />
                <h5 className="carregando">Carregando...</h5>
            </div>
        </div>
    )
}

export default Loader