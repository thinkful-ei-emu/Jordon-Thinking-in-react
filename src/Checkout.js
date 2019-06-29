
import React from 'react'
import Subtotal from './Subtotal'
import CheckoutFeature from './CheckoutFeature'



function Checkout(props) {
    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <CheckoutFeature selected={props.selected} />
            <Subtotal selected={props.selected} />
        </section>
    )
}
export default Checkout;