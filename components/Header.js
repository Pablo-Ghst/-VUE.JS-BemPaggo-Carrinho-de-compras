import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Formulário para compra de</h1>
          <h2>Pacote de adesivos</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrinho{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
     
      </div>
    </header>
  );
}
