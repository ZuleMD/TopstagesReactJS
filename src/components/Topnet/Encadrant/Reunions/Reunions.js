import React, { useState, useEffect } from 'react'

import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import tableIcons from "../../Coordinateur/MaterialTableIcons";
import swal from 'sweetalert';
import Footer from '../../../../layouts/Topnet/Footer';


export default function Reunions() {


    const [events, setEvents] = useState([]);



    useEffect(() => {

        axios.get('/api/reunions').then(res => {
            if (res.data.status === 200) {
                setEvents(res.data.reunions);


            }



        });
    }, []);

    const annulerReunion = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;

        axios.put(`/api/annuler-reunion/${id}`).then(res => {

            if (res.data.status = 200) {
                swal("", res.data.message, "success");
                thisClicked.closest('tr').remove();
            } else if (res.data.status === 401) {
                swal("", res.data.message, "warning");

            }
        });

    }


    return (
        <div>
            <div className="row">
                <div className="col-12">

                    <MaterialTable
                        columns={[


                            {
                                title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Titre</h1>
                                , render: (events) => {
                                    return (
                                        <div>
                                            <p className="text-xs font-weight-bold mb-0">{events.title}</p>
                                        </div>
                                    )
                                },
                                customFilterAndSearch: (term, events) => ((events.title).toLowerCase()).indexOf(term.toLowerCase()) != -1


                            },
                            {
                                title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">Début</h1>
                                , render: (events) => {
                                    return (
                                        <p className="text-xs font-weight-bold mb-0 ">{events.start}</p>)
                                }


                            },

                            {
                                title: <h1 className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Fin</h1>,
                                render: events => {
                                    return (
                                        <span className="text-xs text-secondary mb-0">{events.end}</span>

                                    )
                                }



                            },



                            {
                                title: <h1 className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 " style={{ marginLeft: '30px' }}>Lien</h1>,
                                render: events => {
                                    return (
                                        <div >

                                            <span className="text-xs text-secondary mb-0">{events.url}</span>

                                        </div>
                                    );
                                }
                            },
                            {
                                title: <h1 className="text-secondary opacity-7"></h1>, render: events => {
                                    return (
                                        <div>
                                            <Link to={`edit-event/${events._id}`} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                                                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                                </svg>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link to="#" style={{ color: 'red' }} onClick={(e) => annulerReunion(e, events._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </Link>
                                        </div>

                                    )
                                },

                            },


                        ]

                        }
                        data={events}
                        title={<h6>Liste réunions</h6>}
                        icons={tableIcons}
                        options={{
                            padding: "dense",
                            pageSize: 4,
                            pageSizeOptions: [2, 3, 4],

                        }}

                    />
                </div>
            </div>
            <Footer />
        </div>

    )


}
