import React from 'react'
import visaLogo from "../../../assets/img/visa-pay-logo.svg";
import mastercard from "../../../assets/img/mastercard.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="left">
                            <div className="top-area">
                                <div className="list-area">
                                    <h3>Məlumat</h3>
                                    <ul>
                                        <li><a href="">Kampaniyalar</a></li>
                                        <li><a href="">Müştəri kartı</a></li>
                                        <li><a href="">Brendlər</a></li>
                                        <li><a href="">Bloq</a></li>
                                    </ul>
                                </div>
                                <div className="list-area">
                                    <h3>Şirkət</h3>
                                    <ul>
                                        <li><a href="">Şirkət haqqında</a></li>
                                        <li><a href="">Mağazalar</a></li>
                                        <li><a href="">Vakansiyalar</a></li>
                                        <li><a href="">Korporativ satışlar</a></li>
                                    </ul>
                                </div>
                                <div className="list-area">
                                    <h3>Alıcılara</h3>
                                    <ul>
                                        <li><a href="">Çatdırılma və ödəniş</a></li>
                                        <li><a href="">Zәmanәt</a></li>
                                        <li><a href="">Servis mərkəzləri</a></li>
                                        <li><a href="">Nisyə alış</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="bottom">
                                <div className="list-area">
                                    <h3>Ödəniş:</h3>
                                    <ul className='payment'>
                                        <li><img src={visaLogo} alt="" /></li>
                                        <li><img src={mastercard} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="list-area">
                                    <h3>Bizə qoşulun:</h3>
                                    <ul className='social'>
                                        <li><a href=""><FontAwesomeIcon icon={faFacebookF} size="xl" style={{ color: "#3b5998", }} /></a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#bc2a8d", }} /></a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faSquareYoutube} size="xl" style={{ color: "#d90000", }} /></a></li>

                                    </ul>
                                </div>
                                <div className="list-area">
                                    <div class="copyright">
                                        <p>© 2018 - 2023 bakuelectronics.az</p>
                                        <p>Məxfilik siyasəti</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="right">
                            <div className="right-area">
                                <h2>Məlumat mərkəzi</h2>
                                <time >9:00 - 20:00 (hər gün)</time>
                                <div className="callback">
                                    <a href="tel:143" className="header-call-number"><FontAwesomeIcon icon={faPhoneVolume} style={{ color: "#fff", }} /> 143 </a>
                                </div>
                                <a href="mailto:info@bakuelectronics.az" class="mail-link">info@bakuelectronics.az</a>
                                <div class="developing-info">
                                    <p>Saytın hazırlanması</p>
                                    <p>Chinara Ibadova</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer