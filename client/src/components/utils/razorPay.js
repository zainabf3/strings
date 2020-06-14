import React ,{ Component} from "react";
import UserCart from "../User/cart";


 const loadScript =(src)=>{
    return new Promise((reslove)=>{
        const script= document.createElement("script")
        script.src= src
        script.onload= ()=>{
            reslove(true)
        }
        script.onerror=()=>{
            reslove(false)
        }
        document.body.appendChild(script)
    })
    }
  
   const _DEV_ = document.domain==="localhost"
  
  export class RazorPay extends  Component {
      render (){
  
      


        const displayRazorPay = async () => {
            const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
               
            if(!res){
                alert("Razorpay SDK failed to load. Are you online?")
                   return
               }
           const data = await fetch("http://localhost:3002/razorpay",
                {method : "POST"})
                             .then((res)=> res.json()
                             )    
                             console.log(data);
                        
    
             const options = {
                    key: _DEV_ ? process.env.RAZORPAY_KEY_ID : "PRODUCTION_KEY", 
                    currency : data.currency,
                    amount : data.amount,
                     name: "WAVES Checkout",
                     description: "please proceed with the payment",
                                // "image": "https://example.com/your_logo",
                    order_id: data.id, 
                     handler: function (response){
                     alert(response.razorpay_payment_id);
                     alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                        },  
                         prefill: {
                         name:"zainab",
                         email:"Fathima@gmail.com"
                         }
                         }
                         const paymentObject = new window.Razorpay(options);
                            paymentObject.open();
                         }
          return (
              <button
                  className="link_default"
                  onClick={displayRazorPay}>
                  Razor Pay checkout
              </button>
          )
        }

      }


//    constructor(props){
//        super(props);
//        this.state = {checked:false,
//                payment_amount : 0,
//                      amount:0
//                      };
//        this.handleChange= this.handleChange.bind(this);
//        this.paymentHandler = this.paymentHandler.bind(this);
//        this.changeAmount = this.changeAmount.bind(this);            
//      } 
     
//      componentDidMount() {
//       const script= document.createElement("script")
//         script.src= "https://checkout.razorpay.com/v1/checkout.js";
//          script.async= true
       
//         document.body.appendChild(script)
//     }
// handleChange(){
//     this.setState({
//         checked: !this.state.checked
//     })
// }
// changeAmount(e){
//     this.setState({
//         amount: e.target.value
//     })
// }

// paymentHandler(e){
//     e.preventDefault();
    


  
 

    //   const  componentDidMount=()=>{
    //         let total = 0;
    //         this.setState({
    //            total
    //         })
    //      }
        



//  testing 

// const onSuccess = (payment) =>{ 
//     //console.log(JSON.stringify(payment));
//     this.props.onSuccess(payment);
// }
// const onCancel = (data) =>{
//     console.log(JSON.stringify(data))
// }

// const onError = (err) => {
//     console.log(JSON.stringify(err))
// }
//  test // 

  
export default RazorPay ;