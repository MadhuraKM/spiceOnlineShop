import React from 'react';

class Product extends React.Component{

    constructor(props) {
        super(props);

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct(e) {
        this.props.addToCartProp(e);
    }

    removeProduct(e) {        
        this.props.removeOneFromCartProp(e);
    }
  
    render(){
        var itemsAdded = 0;
        this.props.cartItems.map((item, i) => {
            if(item.name === this.props.productDetails.name){
                itemsAdded = item.quantity;
            }
        });

        return(
            <div className='product'>
                <img src={this.props.productDetails.image} />
                <div>{this.props.productDetails.brand}</div>
                <div>{this.props.productDetails.name}</div>
                <div className='weight'>{this.props.productDetails.weight}</div>
                <div className='price'>Rs. {this.props.productDetails.price}</div>

                <button value={this.props.productDetails.id} className='productBtn' 
                onClick={this.addProduct} hidden={itemsAdded}>Add To Cart</button>
                <div hidden={!itemsAdded}>
                    <button value={this.props.productDetails.id} onClick={this.removeProduct}>-</button>
                    <button> {itemsAdded} in Cart</button>
                    <button value={this.props.productDetails.id} onClick={this.addProduct}>+</button>
                </div>
            </div>
        );
    }
}

export default Product;