import React from 'react';
import PropTypes from 'prop-types';

const Evento = (props) => {
    const {name} = props.info;
    if (!name) return null; //para que el programa no corra

    let desc = props.info.description.text;

    if (desc !== null) {
        if (desc.length > 250) {
            desc = desc.substr(0, 250); //creando un sub-string de 250 caracteres para acortar la descripción de evento si ésta fuera muy larga
        }
    } else {desc = "Descripción del evento no encontrada."}
    


    return (  
        <div>
            <div className = "uk-card uk-card-default">
                <div className = "uk-card-media-top">
                    {props.info.logo !== null ?
                        <img src={props.info.logo.url} alt={props.info.name.text} /> :
                        <img src='https://raw.githubusercontent.com/marielexoteria/AppNoticias/master/src/img/fallback_no_image.png' alt={props.info.name.text} />
                    }

                    
                </div>

                <div className = "uk-card-body">
                    <h3 className = "uk-card-title">{props.info.name.text}</h3>
                    <p>{desc}</p>
                </div>

                <div className = "uk-card-footer">
                    <a className = "uk-button uk-button-secondary" href={props.info.url} target="_blank" rel="noopener noreferrer">Más información</a>
                </div>
                
            </div>
        </div>
    );
}

Evento.propTypes = {
    info: PropTypes.object.isRequired //sólo se valida el nombre, el cual se extrayó haciendo deconstructing del prop info porque es un campo obligatorio en el API de Eventbrite. La foto y la descripción son opcionales y yo puse una foto y un texto alternativo.
}
 
export default Evento;