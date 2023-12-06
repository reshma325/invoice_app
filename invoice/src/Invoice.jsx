import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Invoice = () => {

    const [value, setValues] = useState([])
    const [datas, setDatas] = useState({id:uuidv4(), quantity: "", price: "", margin: "", discount: "", tax: "" })

    const change = (event) => {
        setDatas({ ...datas, [event.target.name]: event.target.value })
    }

    const submit = async (event) => {
        event.preventsetDefault();
  setValues([...value, {...datas}]);
  console.log('hi')
//   setDatas("");

           var priceF = value.price*value.quantity;
           var total=priceF+ ((value.margin/priceF)*100) - ((value.discount/priceF)*100) + ((value.tax/priceF)*10)
console.log(total)

      


    }


    return (
        <div>Invoice
            <form onSubmit={submit}   >
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

           




        </div>
    )
}

export default Invoice