import React from 'react';

import { Link } from "react-router-dom";

function Single() {
function added() {
    alert("Thank you for shopping with us. The product has been added to your cart")
};
  return (
    <div class="single">
        <h3 style={{textAlign: "center"}}>iPhone SE 2</h3>
        <hr/>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                    </div>
                    <div class="col-9 p-3">
                        <div class="row p-3">
                            <div class="col-12">
                                <p>This is information about the iPhone SE 2. It was released in April, 2020. A cheap and affora=dable iPhone to gift your teenage child. 
                                                        Why don't you get one now?</p>
                            </div>
                            <div class="col-12 p-3">
                                <a href="#" class="btn btn-success link-buttons" onClick={added} ><i class="fa fa-cart-plus" aria-hidden="true" ></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <h3 style={{textAlign: "center"}}>Our Other Products</h3>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                            </div>
                            <div class="col-6 p-3">
                                <div class="row">
                                    <div class="col-12">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi reiciendis cumque hic...
                                        </p>
                                    </div>
                                    <div class="col-12 p-3">
                                        <Link to="/products" class="btn btn-success link-buttons"> <i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                            </div>
                            <div class="col-6 p-3">
                                <div class="row">
                                    <div class="col-12">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi reiciendis cumque hic...
                                        </p>
                                    </div>
                                    <div class="col-12 p-3">
                                        <Link to="/products" class="btn btn-success link-buttons"> <i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Single;
