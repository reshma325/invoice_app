import React, { useState } from 'react'

const Invoice = () => {

    const [value, setValues] = useState({ quantity: "", price: "", margin: "", discount: "", tax: "" })
    const [datas, setDatas] = useState({})

    const change = (event) => {
        setValues({ ...value, [event.target.name]: event.target.value })
    }

    const submit = async (event) => {
        event.preventDefault();
        try {
           


        } catch (error) {
            console.log(error)
        }


    }


    return (
        <div>Invoice
            <form onChange={submit}   >
                <label>Quantity</label><br />
                <input type='number' name='quantity' onChange={change} /><br />
                <label> Cost Price</label><br />
                <input type='number' name='price' onChange={change} /><br />
                <label> Margin %</label><br />
                <input type='number' name='margin' onChange={change} /><br />
                <label> Discount %</label><br />
                <input type='number' name='discount' onChange={change} /><br />
                <label> Tax %</label><br />
                <input type='number' name='tax' onChange={change} /><br />
                <input type='submit' /><br />
            </form>

            <table>
                <tr>
                    <th>Quantity</th>
                    <th>Cost Price</th>
                    <th>Margin %</th>
                    <th>Discount %</th>
                    <th>Tax %</th>
                    <th>Total</th>
                </tr>
                <td><input type='number' name='quantity' onChange={change} /><br /></td>
                <td><input type='number' name='price' onChange={change} /><br /></td>
                <td><input type='number' name='margin' onChange={change} /><br /></td>
                <td><input type='number' name='discount' onChange={change} /><br /></td>
                <td><input type='number' name='tax' onChange={change} /><br /></td>
                <td><input disabled type='number' name='total' onChange={change} /><br /></td>
            </table>




        </div>
    )
}

export default Invoice