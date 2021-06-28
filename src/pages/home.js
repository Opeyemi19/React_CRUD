import React, { useState } from 'react';

import CardProdui from '../components/card-produit';
import PostProduit from './postProduit';

import axios from "axios";



const API_URL = "http://192.168.1.116:8000/api/";



const Home = () => {

    const [produit, setproduit] = useState([]);

    // useEffect(async () => {
    //     axios
    //         .get(API_URL + 'product', {})
    //         .then((response) => {
    //             setproduit(response.data)
    //             // console.log(response.data);
    //             // return response.data;

    //         });

    // })

    axios
        .get(API_URL + 'product', {})
        .then((response) => {
            setproduit(response.data)
        });

    return (
        <div>
            {
                produit.map(
                    person =>
                        // <li>{person.name}</li>
                        <CardProdui item={person} />
                )
            }

            <br />

            <PostProduit />

        </div>
    );
}

export default Home;