import React, { useState } from 'react';

import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/users";

const PostProduit = () => {

    const [data, setData] = useState({
        name: ""
    })

    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
    }

    const submit = (e) => {
        e.preventDefault()

        axios.post(API_URL, data)
            .then(res => {

                if (data.name === "") {
                    alert('Entré donnee');
                } else if (res.status >= 200 && res.status < 300) {

                    setData({
                        name: ""
                    });

                    alert('Envoi effectué avec succes')

                } else {
                    alert("Erreur d'envoi")
                }

            })
            .catch(function (error) {
                console.log('Error');
            });
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <br />
                <br />
                <input type="text" name="name" value={data.name} onChange={handle} />
                <button type="submit">Add</button>
            </form>

        </div>
    );
}

export default PostProduit;