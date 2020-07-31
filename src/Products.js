import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    // <Router>
    <div class="products">
        <h3 style={{textAlign: "center"}}>Our Products</h3>
        <hr/>
        <div class="products-list">
            <div class="outerlayer" >
                <div class="row">
                    <div class="3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                    </div>
                    <div class="row p-3">
                        <div class="col-12 p-3">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum corrupti fuga nam neque nesciunt impedit! </p>
                        </div>
                        <div class="col-12 p-3">
                            <Link to="/single-product" class="btn btn-success link-buttons"> <i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outerlayer">
                <div class="row">
                    <div class="3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                    </div>
                    <div class="row p-3">
                        <div class="col-12 p-3">
                            <h3>Product 2</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum corrupti fuga nam neque nesciunt impedit! </p>
                        </div>
                        <div class="col-12 p-3">
                            <Link to="/single-product" class="btn btn-success link-buttons"> <i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="outerlayer">
                <div class="row">
                    <div class="3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg/330px-2010-10-30_Wikipedia_Bodensee_Treffen_%C3%9Cbersicht.jpg" alt=""/>
                    </div>
                    <div class="row p-3">
                        <div class="col-12 p-3">
                            <h3>Product 3</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eum corrupti fuga nam neque nesciunt impedit! </p>
                        </div>
                        <div class="col-12 p-3">
                            <Link to="/single-product" class="btn btn-success link-buttons"> <i class="fa fa-eye" aria-hidden="true"></i> View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // </Router>
  );
}

export default Products;
