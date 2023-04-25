import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/orders.css';



const API_URL = require('../constant').API_URL;

class Order extends Component {

    constructor() {
        super();
        this.state = {
           
           
            totalPrice: 0
            
        }
    }


    addItemHandler = (x) => {
        x=parseInt(40);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +x
        
        })
    }

    addItemHandler1 = (y) => {
        y=parseInt(50);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +y
        
        })
    }

    addItemHandler2 = (z) => {
        z=parseInt(50);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +z
        
        })
    }

    addItemHandler3 = (w) => {
        w=parseInt(60);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +w
        
        })
    }

    addItemHandler4 = (a) => {
        a=parseInt(50);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +a
        
        })
    }

    addItemHandler5 = (b) => {
        b=parseInt(50);
        
        const { totalPrice } = this.state;
       
        this.setState({
          
                totalPrice: totalPrice +b
        
        })
    }

    isDate = (val) => {
        return Object.prototype.toString.call(val) === '[object Date]';
    }

    isObj = (val) => {
        return typeof val === 'object';
    }

    stringifyValue = (value) => {
        if (this.isObj(value) && !this.isDate(value)) {
            return JSON.stringify(value);
        } else {
            return value;
        }
    }

    buildForm = (details) => {
        const { action, params } = details;
        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', action);
        Object.keys(params).forEach(totalPrice => {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', totalPrice);
            input.setAttribute('value', this.stringifyValue(params[totalPrice]));
            form.appendChild(input);
        })  
        return form;
    }

    postTheInformationToPaytm = (info) => {
        // build the form data
        const form = this.buildForm(info);

        // attach in the request body
        document.body.appendChild(form);

        // submit the form
        form.submit();

        // destroy the form
        form.remove();

    }
   
    getChecksum = (data) => {
        return fetch(`${API_URL}/payment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               
            },
            body: JSON.stringify(data)
        })
        .then(resp => {
            return resp.json();
        })
        .catch(err => {
            console.log(err);
        });
    }

    paymentHandler = () => {
        // add the logic to make the payment

        // (1) make API call to the BE and get the payment checksum
        const data = {
            amount: this.state.totalPrice,
            email: 'swaraj@gmail.com',
            mobileNo: '00000000000'
        }

        this.getChecksum(data)
            .then(result => {
                // (2) go to the paytm website, on the paytm website, finish the payment
                let information = {
                    action: 'https://securegw-stage.paytm.in/order/process',
                    params: result
                }
                this.postTheInformationToPaytm(information);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const {  totalPrice } = this.state;
        return (
            <>
            <div className='container mt-4 mb-4 biryaniorders'>
            <Carousel showThumbs={false} className='mt-2 birorderimages'>
       <div>
        <img src="https://www.tastingtable.com/img/gallery/15-indian-breakfasts-you-need-to-try-at-least-once/intro-1671483071.jpg" />
        
    </div>
    <div>
        <img src="https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=pLE9fkx7E502vOhRZ0bwc6R9z2QgJzhRwd0F-6-nGT0=" />
        
    </div>
    <div>
        <img src="https://media.istockphoto.com/id/1024558616/photo/group-of-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina.jpg?s=612x612&w=0&k=20&c=zWTwh12D7DC2eAYNcsQJaPd_xw_Wc3bECZHltL0HoH0=" />
       
    </div>
 </Carousel>

 <div className='biryanirestdetails'>
     <h1 className='biryanirestName mt-2'>Breakfast Section</h1>
 </div>

 <div className="myTabs mt-4">
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab >Order Online</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className='row-12 row-xxl-12 row-lg-12 row-md-12 row-xs-12 aboutbiryanirestplace'>
                                            <h3 className='aboutbiryanirestplaceheading'>About this place</h3>
                                            <h6 className='aboutbiryanirestplacetext text-secondary'>famous in hyderabad</h6>

                                            <h3 className='aboutbiryanirestplaceMenu mt-3'>Menu</h3>
                                            <div className='aboutbiryanirestplaceMenuforrest pt-2 mt-3'>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Idly   :         40.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Vada :           50.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Dosa(omlette)   : 50.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>upma  :           50.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>Bonda  :          50.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>punugulu  :       50.Rs</text><br/>
                                                   <text className='aboutbiryanirestplaceMenuforresttext mt-2 mx-2'>pesarattu :      60.Rs</text><br/>
                                            </div>

                                            <h3 className='aboutbiryanirestcuisine mt-4'>Cuisines</h3>
                                            <text className='cusinetestrest text-secondary'>idly,dosa,.......many more</text>

                                            <h3 className='aboutbiryanirestcost mt-4'>Average Cost</h3>
                                            <text className='aboutbiryanirestprice'>Rs.100 for two people(approx.)</text>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                       <div className='container-fluid addingbiryaniitems mt-5'>
                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src="https://media.istockphoto.com/id/1024549286/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=pLE9fkx7E502vOhRZ0bwc6R9z2QgJzhRwd0F-6-nGT0="  className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Idly(normal)</h5>
                                                     <p>Rs.40</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(x) => this.addItemHandler()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://media.istockphoto.com/id/1362491143/photo/south-indian-dish-of-vada-with-sambhar-and-coconut-chutney.jpg?s=612x612&w=0&k=20&c=81mT-Um6_5xzFr51BmjUMWkkqhBT4AhF4zzu80vePUE= ' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>vada</h5>
                                                     <p>Rs.50</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(y) => this.addItemHandler1()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://lh3.googleusercontent.com/d3D45LI27mv6iSSkl156250-X5tTdDVRMbcj53dZXO71IywSVg6P1ojnoBNi9738hpNlu0W0t6wt0kRMz_dSIy4dZTMkxqtETkwcncwB=w400-rw' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Dosa</h5>
                                                     <p>Rs.50</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(z) => this.addItemHandler2()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://static.toiimg.com/thumb/62296013.cms?imgsize=610059&width=800&height=800' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Pesarattu</h5>
                                                     <p>Rs.60</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(w) => this.addItemHandler3()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://i.ytimg.com/vi/COsIMYtlWTU/maxresdefault.jpg' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>Mysore Bonda</h5>
                                                     <p>Rs.50</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(a) => this.addItemHandler4()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className='row'>
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                               <img src='https://i.ytimg.com/vi/6uWWSo6FeA0/maxresdefault.jpg' className='addingbiryaniitemsimg' />
                                                 <div className='rambabubirtext'>
                                                     <h5 className='textheadingram'>punugulu</h5>
                                                     <p>Rs.50</p>
                                                 </div>
                                               </div>
                                               
                                               <div className='col col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6'>
                                               <button className='btn btn-outline-danger float-end' onClick={(b) => this.addItemHandler5()}>add</button>
                                               </div>
                                               
                                           </div>

                                           <div className="mt-3 biryaniaddingname fs-4">
                                              Subtotal <span className="m-4">&#8377; { totalPrice }</span>
                                              <button className="btn btn-danger float-end" onClick={() => this.paymentHandler()}>Pay Now</button>
                                            </div>
                                           
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
            </div>

           
            </>
        );
    }
}

export default Order;