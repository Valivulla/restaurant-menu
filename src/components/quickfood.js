import React, { Component } from 'react';
import '../styles/quick.css';


class Quickfood extends Component {

    render() {
       
        return (
            <>
            <div class="container">
            <div className="row mt-3">
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-5 text-center" onClick={this.goToDetailsPage}>
                    <div className="row">
                        <div className="col-6 px-0 mx-0">
                          <a href="/details"> <img src="https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg" className="ard-img" alt='img' /></a>
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Breakfast</div>
                            <div className="card-description">Start your day with 
                                exclusive breakfast 
                                options</div>
                        </div>
                    </div>
                </div>
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-auto text-center" onClick={this.goToDetails1Page}>
                  <a href="/details1"><div className="row">
                        <div className="col-6 px-0 mx-0">
                            <img src="https://media.istockphoto.com/id/1318560330/photo/close-up-of-flower-cake-in-the-cafe.jpg?s=612x612&w=0&k=20&c=5BhYqAgfZ8iwMnIuyow8D4QdNI0IrFWOjrTspCTL73A=" className="ard-img" />
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Cakes</div>
                            <div className="card-description">Start your day with 
                                exclusive Cakes
                                options</div>
                        </div>
                    </div></a>
                </div>
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-5 text-center" onClick={this.goToDetails2Page}>
                   <a href="/details2"> <div className="row">
                        <div className="col-6 px-0 mx-0">
                            <img src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" className="ard-img" />
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Biryani</div>
                            <div className="card-description">Start your day with 
                                exclusive Biryani
                                options</div>
                        </div>
                    </div></a>
                </div>
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-auto text-center" onClick={this.goToDetails3Page}>
                   <a href="/details3"> <div className="row">
                        <div className="col-6 px-0 mx-0">
                            <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/snacks-recipes-fb.jpg" className="ard-img" />
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Snacks</div>
                            <div className="card-description">Start your day with 
                                exclusive snacks
                                options</div>
                        </div>
                    </div></a>
                </div>
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-5 text-center" >
                   <a href="/details4"> <div className="row">
                        <div className="col-6 px-0 mx-0">
                            <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/drinks.jpg?quality=82&strip=all" className="ard-img" />
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Drinks</div>
                            <div className="card-description">Start your day with 
                                exclusive drinks
                                options</div>
                        </div>
                    </div></a>
                </div>
                <div className="card col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-5 mx-auto text-center" onClick={this.goToDetails1Page}>
                   <a href="/details5"> <div className="row">
                        <div className="col-6 px-0 mx-0">
                            <img src="https://5.imimg.com/data5/XV/JL/MY-49967943/indian-mithais-premium-quality-assorted-500x500.jpg" className="ard-img" />
                        </div>
                        <div className="col-6 px-3 py-3">
                            <div className="card-title">Sweets</div>
                            <div className="card-description">Start your day with 
                                exclusive sweet
                                options</div>
                        </div>
                    </div></a>
                </div>
            </div>
            </div>
             
            </>
        );
    }
}

export default Quickfood;