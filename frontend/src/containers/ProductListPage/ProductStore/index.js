import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import {Link} from 'react-router-dom';

/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {

    
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under100: 100, 
        under250: 250, 
        under400: 400, 
        under500: 500, 
        under1000: 1000

    });
    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.match.params.slug} under {priceRange[key]}</div>
                                <button>view all</button>
                            </div>

                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link
                                        to={`/${product.slug}/${product._id}/p`} 
                                        style = {{
                                            display: 'block'
                                        }} className="productContainer">
                                            <div className="ProductImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo" >
                                                <div style={{ margin: '5px 0' }}>
                                                    {product.name}
                                                </div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                        <span>3353</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>


                                        </Link>)
                                }
                            </div>
                        </div>
                    );
                })
            }

        </>
    )

}

export default ProductStore