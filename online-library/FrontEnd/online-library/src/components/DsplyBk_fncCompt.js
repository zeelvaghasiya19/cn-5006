import React, { useEffect, useState } from 'react';

import axios from 'axios';
import DisplayData from './DisplayData';
// we use functional  components. usestate hook 
//the received data is stored in the state variable 
//of the componenet  using setState the Data is 
//rendered using a separate functional component
// Display Data In Display data, we  pass the state 
//variable Books  as data recieved  axious lib
export default function FncDisplayBooks() {
    const [Books, setBooks] = useState([]);
    const url = "/allbooks";

    useEffect(() => {
      axios.get(url)
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.error("API error fetching books:", err?.response?.status, err?.response?.data || err.message);
      });
    }, []);
    return(
        <div>
         <DisplayData Books={Books}/>
    </div>
    )
    }
