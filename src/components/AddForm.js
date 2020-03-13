import React from 'react';


class AddForm extends React.Component {

    state = {
        id: '',
        name: '',
        type: '',
        price: '',
        quantity: '',
    };


    onInputChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <div className="addForm">
                <p>Добавить новый товар</p>
                <span>Название</span>
                <input name="name" value={this.state.name} onChange={this.onInputChange} type="text"/><br/>
                <span>Категория</span>
                <input name="type" value={this.state.type} onChange={this.onInputChange} type="text"/><br/>
                <span>Цена</span>
                <input name="price" value={this.state.price} onChange={this.onInputChange} type="text"/><br/>
                <span>Остаток</span>
                <input name="quantity" value={this.state.quantity} onChange={this.onInputChange} type="text"/><br/>
                <button onClick={() => {
                    this.props.addProduct(this.state)
                }}>Добавить товар
                </button>
            </div>
        )
    }
}

export default AddForm;