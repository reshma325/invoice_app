import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InvoiceGenerator = () => {
    const [items, setItems] = useState([]);

    const handleChange = (itemId, field, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
            )
        );
    };

    const calculateTotalForItem = (item) => {
        const totalWithMargin = (item.price * item.quantity) + ((item.price * item.quantity) * item.margin / 100);
        const totalWithDiscount = totalWithMargin - ((totalWithMargin * item.discount) / 100);
        const totalWithTax = totalWithDiscount + ((totalWithDiscount * item.tax) / 100);

        return totalWithTax;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: uuidv4(),
            quantity: 0,
            price: 0,
            margin: 0,
            discount: 0,
            tax: 0,
        };
        setItems([...items, newItem]);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {/* ... your form inputs for quantity, price, margin, discount, tax */}
                <label>Quantity:</label><br />
                <input
                    type="number"
                    value={formValues.quantity}
                    name='quantity'
                    onChange={handleChange}
                /><br />
                <label>Price:</label><br />
                <input
                    type="number"
                    value={formValues.price}
                    name='price'
                    onChange={handleChange}
                /><br />
                <label>Margin (%):</label><br />
                <input
                    type="number"
                    value={formValues.margin}
                    name='margin'
                    onChange={handleChange}
                /><br />
                <label>Discount (%):</label><br />
                <input
                    type="number"
                    value={formValues.discount}
                    name='discount'
                    onChange={handleChange}
                /><br />
                <label>Tax (%):</label><br />
                <input
                    type="number"
                    name='tax'
                    value={formValues.tax}
                    onChange={handleChange}
                /><br />
                <button type="submit">Add Item</button>
            </form>

            <table>
                {items?.length ? <div>
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Margin (%)</th>
                            <th>Discount (%)</th>
                            <th>Tax (%)</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input type='number'
                                        value={item.quantity}
                                        onChange={(e) => handleTableChange(item.id, 'quantity', parseInt(e.target.value))} />
                                </td>
                                <td>
                                    <input type='number'
                                        value={item.price}
                                        onChange={(e) => handleTableChange(item.id, 'price', parseInt(e.target.value))} />
                                </td>
                                <td>
                                    <input type='number'
                                        value={item.margin}
                                        onChange={(e) => handleTableChange(item.id, 'margin', parseInt(e.target.value))} />
                                </td>
                                <td>  <input type='number'
                                    value={item.discount}
                                    onChange={(e) => handleTableChange(item.id, 'discount', parseInt(e.target.value))} /></td>
                                <td> <input type='number'
                                    value={item.tax}
                                    onChange={(e) => handleTableChange(item.id, 'tax', parseInt(e.target.value))} /></td>
                                <td>
                                    {calculateToalForItem(item)}
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </div> : <div style={{ marginLeft: "575%", width: "100%", height: "auto", marginTop: "50px", textAlign: "center" }}>No Items added</div>}

            </table>
            <div>
                <p>Total: {calculateTotalFinal()}</p>
            </div>
        </div>
    );
};

export default InvoiceGenerator;