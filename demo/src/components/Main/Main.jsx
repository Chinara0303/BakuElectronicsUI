import React from 'react'
import newsimage from '../../assets/img/28may-news.jpg'
import Category from './Category'
import Products from './Products'

function Main() {
  return (
    <>
    
        <section id='intro'>
        <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="image-area">
                    <img className='img-fluid' src={newsimage} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="description">
                    <a href="">Bütün Kampaniyalar</a>
                    <div className="text-area">
                        <p className='first'>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</p>
                        <p>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!&nbsp;</p>
                        <p>Nağd alışda 50 %-dək endirim!
                            <br/>Məişət texnikası, TV və kondisioner 0 0 0 18 AY<br/>Smart-saat və aksesuarlar 0 0 18 AY</p>
                           
                    </div>
                    <div className="text-area-bottom">
                        <div className="period">
                            <p>Kampaniyanın sonuna qalıb</p>
                            <div class="countdown d-flex align-items-center ">
                                <div class="time days flip"><span class="count">08</span><span class="label">gün : </span></div>
                                <div class="time hours flip"><span class="count">05</span><span class="label">saat : </span></div>
                                <div class="time minutes flip"><span class="count">46</span><span class="label">dəq</span></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        </section>
        <section id='blog-inner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-lg-block d-none">
                       <Category/>
                    </div>
                    <div className="col-lg-8">
                    <Products/>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Main