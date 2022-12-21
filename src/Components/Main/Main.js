import React from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useState, createRef } from 'react';

export default function AddProduct() {
    // state
    let initialValue = [];
    const [products, setProducts] = useState(initialValue);
    // ref
    const formData = createRef();
    // add product handler method
    const add = (event) => {
        event.preventDefault();
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: Number(formData.current.price.value),
            qty: Number(formData.current.qty.value),
            total: formData.current.price.value * formData.current.qty.value
        }
        // add a new product inside product array
        setProducts([...products, newProduct]);
    }
    // increment qty value by 1
    const increQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        // const total = formData.current.price.value * formData.current.qty.value;
        products[indexOfArray].total = products[indexOfArray].price * products[indexOfArray].qty;
        setProducts([...products]);
    }
    // decrement qty value by 1
    const decreQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        products[indexOfArray].total = products[indexOfArray].total - products[indexOfArray].price;
        setProducts([...products]);
    }
    return (
        <>
            <section className='mainBgImg'>
                <div className='mainDiv'>
                    <h1>BILLING SYSTEM</h1>
                    <Form onSubmit={add} ref={formData}>
                        <Form.Group className="mb-3" controlId="formBasicProductName">
                            <Form.Label>Product Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price in Rupees" name="price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicQty">
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control type="number" placeholder="How many: Quantity" name="qty" />
                        </Form.Group>
                        <Button className='addBtn' variant="primary" type="submit">
                            Add to Inventory
                        </Button>
                    </Form>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.total}</td>
                                        <td>
                                            <Button variant='success' onClick={event => increQty(event)} value={index}>+</Button>
                                            <Button variant='danger' onClick={event => decreQty(event)} value={index}>-</Button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                    <Button className='floataRight' variant='secondary' onClick={() => { window.open("/invoice", "_self") }}>Generate Invoice</Button>
                </div>
            </section>
        </>
    );
}
