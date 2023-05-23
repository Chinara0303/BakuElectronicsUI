import React from 'react'
import kondisioner  from "../../assets/img/products/1_330x220_d01.jpg";
import kombi  from "../../assets/img/products/kombi.jpg";
import kombi2  from "../../assets/img/products/kombi2.jpg";
import kombi3  from "../../assets/img/products/kombi3.jpg";
import kondisioner2  from "../../assets/img/products/kondisioner2.jpg";
import soyuducu  from "../../assets/img/products/soyuducu.jpg";
import soyuducu2  from "../../assets/img/products/soyuducu2.jpg";
import soyuducu3  from "../../assets/img/products/soyuducu3.jpg";
import soyuducu4  from "../../assets/img/products/soyuducu4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Paginate from './Paginate';
function Products() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">300 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kondisioner} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1899.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">106 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">300 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kombi} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kombi DemirDöküm Atron 24 SM-KIT</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1499.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">84 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">350 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kombi2} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kombi DemirDöküm Atron 28 SM-KIT</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1699.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">95 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">450 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kondisioner2} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1749.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">98 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">400 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kondisioner2} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kondisioner LG I12CGH.NGGF-KIT, 12000 BTU</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1649.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">92 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">550 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kondisioner2} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kondisioner LG I24CGH.NGGF-KIT, 24000 BTU, Invertor</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>2399.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">134 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">300 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kombi3} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kombi DemirDöküm Nitron Plus 24 SM-KIT</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1599.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">89 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">400 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={kombi3} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Kombi DemirDöküm Nitron Plus 30 SM-KIT, 30 kW</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1999.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">112 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">270 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={soyuducu} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Soyuducu HAIER C2F636CWRG</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1519.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">85 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">600 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={soyuducu2} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>0 rey</a>
                            </div>
                            <a className='product-name' href="#">Soyuducu LG GR-X257CSAV Side by Side Refrigerator</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>5999.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">334 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">250 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={soyuducu3} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>1 rey</a>
                            </div>
                            <a className='product-name' href="#">Soyuducu LG GR-X257CSAV Side by Side Refrigerator</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1499.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">84 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-card">
                        <div className="product-image">
                            <div class="product-price-discount-holder">
                                <div class="product-price-discount">
                                    <div class="product-price-discount-wrap">
                                        <span class="product-price-discount-price">250 ₼<i class="icon-manat"></i></span>
                                        <p class="product-price-discount-info">Nağd alışa ENDİRİM</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#"><img className='img-fluid' src={soyuducu4} alt="" /></a>
                        </div>
                        <div className="product-desc">
                            <div className="product-rate">
                                <ul>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                    <li><FontAwesomeIcon icon={faStar} size="xs" style={{color: "#ffb600",}} /></li>
                                </ul>
                                <a href='#'>1 rey</a>
                            </div>
                            <a className='product-name' href="#">Soyuducu BOSCH KGN33NW21U</a>
                        </div>
                        <div className="product-value">
                            <div className="product-price">
                                <span>Qiymət</span>
                                <div className="price">
                                <span>1599.99 </span>
                                <span>₼</span>
                                </div>
                              
                            </div>
                            <div class="product-credit">
                                Hissə-hissə ödəniş                    
                                <div class="product-credit-note">18 ay <span class="product-credit-price">89 </span><span> ₼</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Paginate/>
        </div>
    )
}

export default Products