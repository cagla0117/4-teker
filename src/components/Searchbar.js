import React from 'react'
import styled from 'styled-components'
import axios from "axios";


function Searchbar() {
    return (
        <Container className="src">
            <input type="text" placeholder="Search.." />
            {users?.map((user,key) => (
               // <li key={user.id}>{user.brand}- {user.model}</li>
               <Cars user={user} key={key} index={key} />
            ))}
                 {/* className="search"
                 placeholder="Search..."
                 onChange={(e) => setQuery(e.target.value.toLowerCase())} */}
            
            <div>{data}</div>
        </Container>
    );
}

export default Searchbar;