import React from 'react';

const Header = () => {
    return (
        <header className = "uk-margin" uk-margin="true"> 
            <h1 className = "uk-text-center">Eventos</h1>
        </header>
    ); //uk-margin = "true" porque el framework UIKit se declara solamente como "uk-margin", pero esa declaración en React no es válida y por eso se le asigna el valor de true
};

export default Header;