import axios from 'axios'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import tableIcons from "../../Coordinateur/MaterialTableIcons";
import Loading from '../../../../layouts/Topnet/Loading';


export default function Editdirection(props) {


    const [errorlist, setError] = useState([]);

    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {


        const direction = props.match.params._id

        axios.get(`/api/edit-direction/${direction}`).then(res => {
            if (res.data.status === 200) {
                setDirection(res.data.direction);

            } else if (res.data.status === 404) {
                swal("", res.data.message, "error");
                history.push('/serviceformation/Directions');
            }
            setLoading(false);
        });

    }, [props.match.params._id, history]);


    const [DirectionInput, setDirection] = useState({
        nomdirection: '',
    });


    const handleInput = (e) => {
        e.persist();
        setDirection({ ...DirectionInput, [e.target.name]: e.target.value });
    }

    const updateDirection = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nomdirection', DirectionInput.nomdirection);

        axios.post(`/api/direction/${direction}`, formData).then(res => {

            if (res.data.status === 200) {
                swal("", res.data.message, "success");
                history.push('/serviceformation/Directions');
                setError([]);
            } else if (res.data.status === 422) {
                setError(res.data.errors);
            }
            else if (res.data.status === 404) {
                swal("", res.data.message, "error");
                history.push('/serviceformation/Directions')
            }
        });


    }
    const [departement, setDepList] = useState([

    ]);
    const direction = props.match.params._id
    useEffect(() => {

        axios.get(`/api/departements/${direction}`).then(res => {
            if (res.data.status === 200) {
                setDepList(res.data.departements);
            }
        });


    }, [props.match.params._id, history]);




    {/* Activer ou Désactiver département*/ }



    const desactiverDep = (e, oid) => {
        e.preventDefault();

        axios.put(`/api/desactiver-departement/${oid}`).then(res => {

            if (res.data.status = 200) {
                swal("", res.data.message, "success");
                window.location.reload();
            } else if (res.data.status === 401) {
                swal("", res.data.message, "warning");

            }
        });

    }




    {/* modifier un département*/ }


    const [DepUpdateInput, setUpdateDep] = useState({
        nomdep: '',
        chefdep: '',

    });


    const handleDepUpdateInput = (e) => {
        e.persist();
        setUpdateDep({ ...DepUpdateInput, [e.target.name]: e.target.value });
    }



    const [dep_id, setDepID] = useState([]);

    const showFormUpdateDep = (e, oid) => {
        e.preventDefault();
        setDepID(oid);


        axios.get(`/api/edit-departement/${oid}`).then(res => {
            if (res.data.status === 200) {
                setUpdateDep(res.data.dep);
            } else if (res.data.status === 404) {
                swal("", res.data.message, "error");
                history.push('/serviceformation/Departements');
            }
            setLoading(false);
        });

    }

    const updateDep = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('nomdep', DepUpdateInput.nomdep);
        formData.append('chefdep', DepUpdateInput.chefdep);


        axios.post(`/api/departement/${dep_id}`, formData).then(res => {

            if (res.data.status === 200) {
                swal("", res.data.message, "success");
                window.location.reload();
                setError([]);
            } else if (res.data.status === 422) {
                setError(res.data.errors);
            }
            else if (res.data.status === 404) {
                swal("", res.data.message, "error");
            }
        });
    }

    {/* ajouter un département*/ }


    const [DepInputAdd, setDepAdd] = useState({
        nomdep: '',
        chefdep: '',

    });


    const handleInputDepAdd = (e) => {
        e.persist();
        setDepAdd({ ...DepInputAdd, [e.target.name]: e.target.value });
    }


    const submitDepAdd = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nomdep', DepInputAdd.nomdep);
        formData.append('chefdep', DepInputAdd.chefdep);

        formData.append('direction', direction);

        axios.post('/api/departements', formData).then(res => {
            if (res.data.status === 200) {
                swal("", res.data.message, "success");
                setDepList(departement => [...departement, res.data.Department]);
                window.location.reload();
                setError([]);

            } else if (res.data.status === 422) {
                setError(res.data.errors);

            } else if (res.data.status === 423) {
                swal("", res.data.message, "warning");

            }

        })


    }


    if (loading) {
        <Loading />
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Modifier direction</h6>
                        </div>
                        <div className="card-body ">

                            <form className="row" onSubmit={updateDirection}  >


                                <div className="col-md-6">
                                    <label className="form-label">Nom</label>
                                    <input onChange={handleInput} value={DirectionInput.nomdirection} type="text" name="nomdirection" className="form-control" placeholder='Nom' />
                                    <small className="text-danger">{errorlist.nomdirection}</small>

                                </div>



                                <div className="col-md-6 mt-4">
                                    <button type="submit" className="btn btn-primary">Modifier direction</button>
                                    &nbsp; <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        Ajouter réponses
                                    </button>
                                </div>

                            </form>

                            <form onSubmit={submitDepAdd} >

                                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Créer département</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Nom</label>
                                                        <input id='inputReptext' onChange={handleInputDepAdd} value={DepInputAdd.nomdep} type="text" name="nomdep" className="form-control" placeholder='Nom' />
                                                        <small className="text-danger">{errorlist.nomdep}</small>

                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Chef</label>
                                                        <input id='inputReptext' onChange={handleInputDepAdd} value={DepInputAdd.chefdep} type="text" name="chefdep" className="form-control" placeholder='Chef' />
                                                        <small className="text-danger">{errorlist.chefdep}</small>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                                <button type="submit" className="btn btn-primary">Créer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>



                            <div className="row">
                                <div className='col-12'>
                                    <div className="col-12">


                                        <form onSubmit={updateDep}>

                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Modifier département</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">

                                                            <div className="col-md-6">
                                                                <label className="form-label">Nom</label>
                                                                <input onChange={handleDepUpdateInput} value={DepUpdateInput.nomdep} type="text" name="nomdep" className="form-control" placeholder='Nom' disabled />
                                                                <small className="text-danger">{errorlist.nomdep}</small>

                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Chef</label>
                                                                <input onChange={handleDepUpdateInput} value={DepUpdateInput.chefdep} type="text" name="chefdep" className="form-control" placeholder='Chef' />
                                                                <small className="text-danger">{errorlist.chefdep}</small>

                                                            </div>
                                                        </div>


                                                        <div className="modal-footer">
                                                            <button type="reset" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                                            <button type="submit" className="btn btn-primary">Modifier</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>



                                        <MaterialTable
                                            columns={[



                                                {
                                                    title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom</h1>
                                                    , render: (departement) => {
                                                        return (
                                                            <div>
                                                                <p className="text-xs font-weight-bold mb-0">{departement.nomdep}</p>
                                                            </div>)
                                                    }


                                                },

                                                {
                                                    title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Chef</h1>, render: departement => {
                                                        return (
                                                            <span className="text-xs text-secondary mb-0">{departement.chefdep}</span>

                                                        )
                                                    },
                                                    customFilterAndSearch: (term, departement) => ((departement.chefdep).toLowerCase()).indexOf(term.toLowerCase()) != -1

                                                },

                                                {
                                                    title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" style={{ marginLeft: '30px' }}>Etat</h1>, render: departement => {
                                                        return (
                                                            <div>
                                                                <Link to='#' onClick={(e) => desactiverDep(e, departement._id.$oid)}>
                                                                    {departement.etat == 'inactive' ?
                                                                        <button className="btn btn-danger">Désactivé</button> :
                                                                        <button className="btn btn-success">Activé</button>}
                                                                </Link>                                                              &nbsp;  &nbsp;  &nbsp; &nbsp;
                                                                <Link to="#" onClick={(e) => showFormUpdateDep(e, departement._id.$oid)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                                                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                                                    </svg>
                                                                </Link>
                                                            </div>

                                                        )
                                                    }

                                                },
                                            ]

                                            }
                                            data={departement}
                                            title={<h6>Liste départements</h6>}
                                            icons={tableIcons}

                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}