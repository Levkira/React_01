import React from 'react';
import './App.css';
import ProductRow from "./components/ProductRow";
import AddForm from "./components/AddForm";

const shortid = require('shortid');


class App extends React.Component {
    state = {
        products: [
            {
                id: shortid.generate(),
                name: 'смартфон',
                type: 'мобильные телефоны',
                price: 5000,
                quantity: 20,
            },
            {
                id: shortid.generate(),
                name: 'холодильник',
                type: 'бытовая техника',
                price: 100,
                quantity: 10,
            },
        ]
    };

    onProductRemove = id => {
        const updatedProducts = this.state.products.filter(
            product => product.id !== id);
        this.setState({products: updatedProducts})
    };

    renderProduct() {
        return this.state.products.map(product =>
            <ProductRow
                key={product.id}
                data={product}
                onProductRemove={this.onProductRemove}
            />
        )
    }

    addProduct = obj => {
        const newProduct = [
            ...this.state.products,
            obj
        ];
        this.setState({products: newProduct});
    };

    render() {
        return (
            <div className="productTable">
                <table>
                    <caption>Товары</caption>
                    <thead>
                    <tr>
                        <td>название</td>
                        <td>категория</td>
                        <td>цена</td>
                        <td>остаток</td>
                        <td>действие</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderProduct()}
                    </tbody>
                </table>
                <AddForm addProduct={this.addProduct}/>
            </div>
        )
    }
}

export default App;
