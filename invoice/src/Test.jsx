// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const InvoiceGenerator = () => {
//     const [items, setItems] = useState([
//         { id: uuidv4(),  quantity: "", price: "" ,margin:"",discount:"",tax:""},
//     ]);

//     const handleChange = (id, field, value) => {
//         setItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, [field]: value } : item
//             )
//         );
//     };
//     /*var priceF = value.price*value.quantity;
// console.log(priceF+ ((value.margin/priceF)*100) - ((value.discount/priceF)*100) + ((value.tax/priceF)*10))*/

//     const calculateTotal = () => {
//         var priceF = items.price*items.quantity;
//         return items.reduce((item) =>priceF+ ((item.margin/priceF)*100) - ((item.discount/priceF)*100) + ((item.tax/priceF)*10),  0);
//     };

//     return (
//         <div>

//             <table>
//                 <thead>
//                     <tr>

//                         <th>Quantity</th>
//                         <th>margin</th>
//                         <th>Price</th>
//                         <th>discount</th>
//                         <th>tax</th>
//                         <th>Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {items.map((item) => (
//                         <tr key={item.id}>

//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.quantity}
//                                     onChange={(e) => handleChange(item.id, 'quantity', parseInt(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.price}
//                                     onChange={(e) => handleChange(item.id, 'price', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.discount}
//                                     onChange={(e) => handleChange(item.id, 'discount', parseFloat(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.margin}
//                                     onChange={(e) => handleChange(item.id, 'margin', e.target.value)}
//                                 />
//                             </td> 
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.tax}
//                                     onChange={(e) => handleChange(item.id, 'total', e.target.value)}
//                                 />
//                             </td>
//                             <td>{item.quantity * item.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div>
//                 <p>Total: {calculateTotal()}</p>
//             </div>
//         </div>
//     );
// };

// export default InvoiceGenerator;



// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const InvoiceGenerator = () => {
//     const [items, setItems] = useState([
//         { id: uuidv4(), quantity: 1, price: 10, margin: 0, discount: 0, tax: 0 },
//         { id: uuidv4(), quantity: 2, price: 20, margin: 0, discount: 0, tax: 0 },
//     ]);

//     const handleChange = (id, field, value) => {
//         setItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, [field]: value } : item
//             )
//         );
//     };

//     const calculateTotal = () => {
//         return items.reduce((total, item) => {
//             const totalPrice = item.quantity * item.price;
//             const totalWithMargin = totalPrice + totalPrice * (item.margin / 100);
//             const totalWithDiscount = totalWithMargin - totalWithMargin * (item.discount / 100);
//             const totalWithTax = totalWithDiscount + totalWithDiscount * (item.tax / 100);

//             return total + totalWithTax;
//         }, 0);
//     };

//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Margin (%)</th>
//                         <th>Discount (%)</th>
//                         <th>Tax (%)</th>
//                         <th>Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {items.map((item) => (
//                         <tr key={item.id}>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.quantity}
//                                     onChange={(e) => handleChange(item.id, 'quantity', parseInt(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.price}
//                                     onChange={(e) => handleChange(item.id, 'price', parseFloat(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.margin}
//                                     onChange={(e) => handleChange(item.id, 'margin', parseFloat(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.discount}
//                                     onChange={(e) => handleChange(item.id, 'discount', parseFloat(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="number"
//                                     value={item.tax}
//                                     onChange={(e) => handleChange(item.id, 'tax', parseFloat(e.target.value))}
//                                 />
//                             </td>
//                             <td>
//                                 {item.quantity * item.price +
//                                     (item.quantity * item.price * (item.margin / 100)) -
//                                     (item.quantity * item.price * (item.margin / 100) * (item.discount / 100)) +
//                                     (item.quantity * item.price * (item.margin / 100) * (item.discount / 100) * (item.tax / 100))}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div>

//             </div>
//         </div>
//     );
// };

// export default InvoiceGenerator;


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InvoiceGenerator = () => {
    const [items, setItems] = useState([]);
    const [formValues, setFormValues] = useState({
        quantity: "",
        price: "",
        margin: "",
        discount: "",
        tax: "",
    });

    const handleChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: uuidv4(),
            ...formValues,
        };
        setItems([...items, newItem]);
        setFormValues({
            quantity: "",
            price: "",
            margin: "",
            discount: "",
            tax: "",
        });
    };
    const handleTableChange = (itemId, field, value) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
            )
        );
    };

    const calculateTotal = () => {
        return items.reduce((total,item) => {
        
            var totalWithMargin = ((item.price*item.quantity)/item.margin) * 100;
            var totalWithDiscount = ( (item.price*item.quantity)/item.discount ) * 100;
            var totalWithTax = ((item.price*item.quantity)/item.tax  ) * 100;
            var finalPrice = (item.price*item.quantity) + totalWithMargin - totalWithDiscount + totalWithTax
            console.log(finalPrice,"total",item.price,"price",item.quantity,"quantity ",totalWithDiscount,"discount",totalWithMargin,"margin",totalWithTax,"tax","hi")
            return finalPrice;
        }, 0);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
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
                                    {calculateTotal()}
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </div> : <div style={{ marginLeft: "575%", width: "100%", height: "auto", marginTop: "50px", textAlign: "center" }}>No Items added</div>}

            </table>
            <div>
                {/* <p>Total: {calculateTotal()}</p> */}
            </div>
        </div>
    );
};

export default InvoiceGenerator;