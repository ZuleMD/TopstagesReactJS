import React, { useEffect, useState } from 'react'
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import "./css/Homestyle.css"

export default function Home() {




    return (


        <div id="home">


            <header id="header" className="fixed-top">

                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><Link to="index.html">
                        <img src="../assets/img/logos/logo-topstages.png" className="navbarHome-brand-img h-100" style={{ maxHeight: '90px' }} alt="main_logo" />
                    </Link></h1>
                    <Link to="index.html" className="logo me-auto me-lg-0">
                        <img src="assetsHomePage/img/logo.png" alt="" className="img-fluid" /></Link>

                    <nav id="navbarHome" className="navbarHome order-last order-lg-0">
                        <ul>
                            <li><Link to="" onClick={() => window.location.replace("/#hero")} className="active">Accueil</Link></li>
                            <li><Link to="" onClick={() => window.location.replace("/#apropos")}>À propos</Link></li>

                            <li><Link to="" onClick={() => window.location.replace("/#services")}>Services</Link></li>

                            <li><Link to="" onClick={() => window.location.replace("/#contact")}>Contact</Link></li>
                            <li><Link to="" onClick={() => window.location.replace("/offresdestage")}>Offres de stage</Link></li>


                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <div className="header-social-links d-flex">
                        <Link to="#" className="twitter"><i className="bu bi-twitter"></i></Link>
                        <Link to="#" className="facebook"><i className="bu bi-facebook"></i></Link>
                        <Link to="#" className="instagram"><i className="bu bi-instagram"></i></Link>
                        <Link to="#" className="linkedin"><i className="bu bi-linkedin"></i></Link>
                    </div>

                </div>
            </header>

            <div id="section"> <section id="hero">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp text-center">
                                    <h2 >Bienvenue sur<span> TOPSTAGES!</span></h2>
                                    <p>Recherchez parmi nos offres et décrochez le stage fait pour vous!</p>
                                    <Link to="/auth" className="btn-get-started">Connexion</Link>
                                </div>
                            </div>
                            <img src="../assetsHomePage/img/slide/slide-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp text-center">
                                    <h2>Bienvenue sur <span>TOPSTAGES!</span></h2>
                                    <p>Recherchez parmi nos offres et décrochez le stage fait pour vous!</p>
                                    <div className="text-center"><Link to="/auth" className="btn-get-started">Connexion</Link></div>
                                </div>
                            </div>
                            <img src="../assetsHomePage/img/slide/slide-2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp text-center">
                                    <h2>Bienvenue sur <span>TOPSTAGES!</span></h2>
                                    <p>Recherchez parmi nos offres et décrochez le stage fait pour vous!</p>
                                    <div className="text-center"><Link to="/auth" className="btn-get-started">Connexion</Link></div>
                                </div>
                            </div>
                            <img src="../assetsHomePage/img/slide/slide-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section></div>

            <main id="main">
                <div id="section">
                    <section id="apropos" className="about-us">
                        <div className="container" data-aos="fade-up">

                            <div className="row content">
                                <div className="col-lg-6" data-aos="fade-right">
                                    <h2>La plateforme efficace et dynamique pour les étudiants</h2>
                                    <h3>Nous recrutons régulièrement des stagiaires et les candidatures sont acceptées tout au long de l'année. Vous pouvez postuler à tout moment sur notre plateforme en ligne.</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                                    <p>
                                        TOPSTAGES est une plateforme spécialisée dans la gestion de stage. elle permet nottament:
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line"></i> Le recrutement de candidats.</li>
                                        <li><i className="ri-check-double-line"></i>L'enregistrement des offres de stage.</li>
                                        <li><i className="ri-check-double-line"></i> L'attribution des stages.</li>
                                        <li><i className="ri-check-double-line"></i> Le suivi des stagiaires et plus encore.</li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="services" className="services section-bg">
                        <div className="container" data-aos="fade-up" >

                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-blue">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                            </svg>
                                            <i className="bx bxl-dribbble"></i>
                                        </div>
                                        <h4><Link to="">Lorem Ipsum</Link></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box iconbox-orange ">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                            </svg>
                                            <i className="bx bx-file"></i>
                                        </div>
                                        <h4><Link to="">Sed Perspiciatis</Link></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="icon-box iconbox-pink">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                            </svg>
                                            <i className="bx bx-tachometer"></i>
                                        </div>
                                        <h4><Link to="">Magni Dolores</Link></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-yellow">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                            </svg>
                                            <i className="bx bx-layer"></i>
                                        </div>
                                        <h4><Link to="">Nemo Enim</Link></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box iconbox-red">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                                            </svg>
                                            <i className="bx bx-slideshow"></i>
                                        </div>
                                        <h4><Link to="">Dele Cardo</Link></h4>
                                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="icon-box iconbox-teal">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                                            </svg>
                                            <i className="bx bx-arch"></i>
                                        </div>
                                        <h4><Link to="">Divera Don</Link></h4>
                                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="clients" className="clients mt-5">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Clients</h2>
                            </div>

                            <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-1.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-4.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-5.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-6.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-7.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assetsHomePage/img/clients/client-8.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>


                <div className="map-section">
                    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://maps.google.com/maps?q=Immeuble%20Topnet%20Centre%20Urbain%20Nord,%201080%20Tunis&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen></iframe>
                </div>

                <section id="contact" className="contact mb-4">
                    <div className="container">

                        <div className="row justify-content-center" data-aos="fade-up">

                            <div className="col-lg-10">

                                <div className="info-wrap">
                                    <div className="row">
                                        <div className="col-lg-4 info">
                                            <i className="bi bi-geo-alt"></i>
                                            <h4>Lieu:</h4>
                                            <p>Immeuble Topnet Centre Urbain Nord,<br />1080 Tunis</p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="bi bi-envelope"></i>
                                            <h4>Adresse e-mail:</h4>
                                            <p>topstages@gmail.com</p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="bi bi-phone"></i>
                                            <h4>Téléphone:</h4>
                                            <p>+216 71 185 000</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row mt-5 justify-content-center" data-aos="fade-up">
                            <div className="col-lg-10">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Votre adresse e-mail" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>

                                    <div className="text-center"><button type="submit">Envoyer</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>TOPSTAGES</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; <strong><span>TOPSTAGES</span></strong>. Tous les droits sont réservés
                        </div>

                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            </footer>

            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i></Link>


        </div>


    )
}
