const ItemDetail = ({ product }) => {
    return (
        <div className="item">
            <img src={product.img} className="item_img" />
            <div className="item_title">{product.producto}</div>
            <p className="item_price">Precio: ${product.price}</p>
        </div>
    )
}

export default ItemDetail