import React, { Component } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import product1 from "../../assets/images/Product_1.jpeg";
import product2 from "../../assets/images/Product_2.jpeg";
import product3 from "../../assets/images/Product_3.jpeg";
import product4 from "../../assets/images/Product_4.jpeg";
import product5 from "../../assets/images/Product_5.jpeg";
import product6 from "../../assets/images/Product_6.jpeg";
import product7 from "../../assets/images/Product_7.jpeg";
import product8 from "../../assets/images/Product_8.jpeg";
import ProductJson from "../../Constants/products.json";
import "./index.css";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: this.getProductTypeist(),
            products: ProductJson,
            selectedType: "All"
        }
    }
    getProductTypeist() {
        let producttype = [];
        producttype.push("All")
        ProductJson.map((product, index) => {
            if (producttype.indexOf(product.type) === -1)
                producttype.push(product.type);
            return ProductJson;
        });
        return producttype;
    }
    handleSearchFilter(productType) {
        let producttype = this.getProductTypeist();
        this.setState({
            productType: producttype.filter(
                (child) =>
                    !productType || child.toLowerCase().startsWith(productType)
            )
        })
    }
    handleFilter(productType) {
        this.setState({ selectedType: productType });
        if (productType !== "All") {
            let prods = ProductJson.filter(product => product.type === productType);
            this.setState({ products: prods });
        }
        else {
            this.setState({ products: ProductJson });
        }
    }

    render() {
        const images = [product1, product2, product3, product4, product5, product6, product7, product8];
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-right bglight sticky-top">
                    <div className="container">
                        <span></span>
                        <Dropdown><span className="mr10">Filter By product type</span>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                {this.state.selectedType}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <FormControl
                                    autoFocus
                                    className="mx-3 my-2 w-auto"
                                    placeholder="Type to filter..."
                                    onChange={(e) => this.handleSearchFilter(e.target.value)}
                                />
                                {

                                    this.state.productType.map((type, index) => (
                                        <Dropdown.Item key={index} onSelect={(event) => this.handleFilter(type)} href="#/">{type}</Dropdown.Item>
                                    ))
                                }

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
                <div className="container mt10">
                    <div className="row">
                        <div className="col-lg-10 ml10">

                            <div className="row">
                                {this.state.products?.map((product, index) => (

                                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <div className="card h-100">
                                            {product.isSale ? <div className="top-left-corner">Sale</div> : <></>}
                                            <a href="/#"><img className="card-img-top" src={images[product.index]} alt=""></img></a>
                                            <div className="card-body">
                                                <h6 className="card-title">
                                                    <a href="/#">{product.productName}</a>
                                                    <span>      {product.price}</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductView;