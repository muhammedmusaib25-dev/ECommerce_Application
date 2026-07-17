import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
const PayPalButton=({amount, onSuccess, onError})=>{

    return <PayPalScriptProvider 
    options={{"client-id":"BAAY-Zn6gY6FqMNc_vngxx6T3yNO3Tfha97L1_x3NeSQymEiwKrTyH9D0zFTLB1Eeu1MO7gUpHO7LM2uDE"}}>

        <PayPalButtons
         style={{layout:"vertical"}}
         createOrder={(data, actions)=>{
            return actions.order.create({
                purchase_units:[{amount :{value:amount}}]
            })
         }}
         onApprove={(data,actions)=>{
            return actions.order.capture().then(onSuccess);
         }}
         onError={onError}
         ></PayPalButtons>

    </PayPalScriptProvider>
}

export default PayPalButton
