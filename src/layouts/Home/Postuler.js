import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import "./css/Homestyle.css"
import swal from 'sweetalert';


export default function Postuler() {

    const history = useHistory();


    const [offre, setOffre] = useState([

    ]);

    const { post_id } = useParams();
    useEffect(() => {

        axios.get(`/api/monpost/${post_id}`).then(res => {
            if (res.data.status === 200) {
                setOffre(res.data.post);
            }
        });


    }, []);

    const [picture1, setPicture1] = useState([]);
    const [picture2, setPicture2] = useState([]);


    const handleImage1 = (e) => {
        setPicture1({ ficherep: e.target.files[0] });

    }
    const handleImage2 = (e) => {
        setPicture2({ cv: e.target.files[0] });

    }



    const updatePost = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('ficherep', picture1.ficherep);
        formData.append('cv', picture2.cv);

        axios.post(`/api/postuler/${post_id}`, formData).then(res => {

            if (res.data.status === 200) {
                swal("", res.data.message, "success");
                history.push('/');
            }
            else {
                console.log(res.data.message);
            }
        });
    }
    return (
        <div>
            <form className="row" onSubmit={updatePost}>

                <div className="container d-flex align-items-center mb-3 mt-3" style={{ marginLeft: "20px" }}>

                    <h1 className="logo me-auto"><Link to="/">
                        <img src="../assets/img/logos/logo-topstages.png" className="navbarHome-brand-img h-100" style={{ maxHeight: '90px' }} alt="main_logo" />
                    </Link></h1>

                </div>


                <div className="container h-100" style={{ width: '80%' }}>
                    <div className="row justify-content-center h-100">
                        <div className="col-md-6  "   >
                            <div data-aos='zoom-in' className=' p-3 mb-5  rounded h-100' >
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="card-title">Je postule à cette offre:</h6>
                                        <h4 className="card-subtitle mb-2 " style={{ color: '#ef8e1f' }} >{offre.type} en {offre.domaine}</h4>


                                        <p className="card-text font-weight-bold">
                                            <label className="form-label">Fiche de réponse &nbsp;<span style={{ color: 'red' }}>*</span></label>
                                            <input name="ficherep" onChange={handleImage1} className="form-control" type="file" id="formFile" required />

                                        </p>
                                        <p className="card-text font-weight-bold">
                                            <label className="form-label">CV &nbsp;<span style={{ color: 'red' }}>*</span></label>
                                            <input name="cv" onChange={handleImage2} className="form-control" type="file" id="formFile" required />

                                        </p>
                                        <hr className="my-4" />

                                        <button type="submit" className="btn btn-info ">Postuler!</button>&nbsp;&nbsp;
                                        <Link to='/' ><button type="submit" className="btn btn-light ">Annuler</button></Link>

                                    </div>
                                </div>
                            </div>

                        </div>






                    </div>
                </div>
            </form>
        </div >
    )
}