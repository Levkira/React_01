import React from 'react';

class ProductRow extends React.Component {
    render() {
        const {name, type, price, quantity, id} = this.props.data;
        return (
            <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <button onClick={() => this.props.onProductRemove(id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow;