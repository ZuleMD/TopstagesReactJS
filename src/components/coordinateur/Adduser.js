import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

export default function Adduser() {


    const [roleslist, setRoleslist] = useState([

    ]);

    useEffect(() => {
        axios.get('/api/roles').then(res => {
            if (res.data.status === 200) {
                setRoleslist(res.data.roles);
            }
        });
    }, []);

    const [UserInput, setUser] = useState({
        matricule: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
        adresse: '',
        cinpasseport: '',
        tel: '',
        role_id: '',

    });

    const [picture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setUser({ ...UserInput, [e.target.name]: e.target.value });
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }

    const submitUser = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', picture.image);
        formData.append('role_id', UserInput.role_id);
        formData.append('nom', UserInput.nom);
        formData.append('prenom', UserInput.prenom);
        formData.append('tel', UserInput.tel);
        formData.append('matricule', UserInput.matricule);
        formData.append('cinpasseport', UserInput.cinpasseport);
        formData.append('adresse', UserInput.adresse);
        formData.append('email', UserInput.email);
        formData.append('password', UserInput.password);



        axios.post('/api/users', formData).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                // console.log(UserInput.role_id);
                setError([]);
            } else if (res.data.status === 422) {
                swal("All fields are mandetory", "", "error");
                setError(res.data.errors);
            }
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Créer utilisateur</h6>
                        </div>
                        <div className="card-body ">

                            <form className="row" onSubmit={submitUser} >


                                <div className="col-md-6">
                                    <label className="form-label">Matricule</label>
                                    <input onChange={handleInput} value={UserInput.matricule} type="text" name="matricule" className="form-control" placeholder='Matricule' />
                                    <small className="text-danger">{errorlist.matricule}</small>

                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Nom</label>
                                    <input onChange={handleInput} value={UserInput.nom} type="text" name="nom" className="form-control" placeholder='Nom' />
                                    <small className="text-danger">{errorlist.nom}</small>
                                </div>


                                <div className="col-md-6">
                                    <label className="form-label">Prénom</label>
                                    <input onChange={handleInput} value={UserInput.prenom} type="text" name="prenom" className="form-control" placeholder='Prénom' />
                                    <small className="text-danger">{errorlist.prenom}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input onChange={handleInput} value={UserInput.email} type="email" name="email" className="form-control" placeholder='Email' />
                                    <small className="text-danger">{errorlist.email}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Mot de passe</label>
                                    <input onChange={handleInput} value={UserInput.password} type="password" name="password" autoComplete="on" className="form-control" placeholder='Mot de passe' />
                                    <small className="text-danger">{errorlist.password}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Adresse</label>
                                    <input onChange={handleInput} value={UserInput.adresse} type="text" name="adresse" className="form-control" placeholder="Adresse" />
                                    <small className="text-danger">{errorlist.adresse}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Cin/Passeport</label>
                                    <input onChange={handleInput} value={UserInput.cinpasseport} type="text" name="cinpasseport" className="form-control" placeholder="Cin/Passeport" />
                                    <small className="text-danger">{errorlist.cinpasseport}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Tél</label>
                                    <input onChange={handleInput} value={UserInput.tel} type="text" name="tel" className="form-control" placeholder="Tél" />
                                    <small className="text-danger">{errorlist.tel}</small>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Image</label>
                                    <input onChange={handleImage} name="image" className="form-control" type="file" id="formFile" />
                                    <small className="text-danger">{errorlist.image}</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Role</label>
                                    <select name="role_id" onChange={handleInput} value={UserInput.role_id} className="form-select">
                                        <option>Role</option>
                                        {
                                            roleslist.map((role, index) => {
                                                return (
                                                    <option value={role.id} key={index}>{role.nom}</option>


                                                )
                                            })
                                        }

                                    </select>
                                    <small className="text-danger">{errorlist.role_id}</small>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Créer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
