import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice;
  return (  
    <aside className="block col-1">
      <h3>Carrinho</h3>
      <div>
        {cartItems.length === 0 && <div>Seu carrinho está vazio. :(</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <h3> Quantos adesivos de cada?</h3>
            
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>


            <div className="row">
              <div className="col-2">
                <h3>Preço Total</h3>
              </div>
              <div className="col-1 text-right">
                <h3>R${totalPrice.toFixed(2)}</h3>
              </div>
            </div>
            <hr />
            <div className="row">
              <button >
                Comprar Adesivos
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
