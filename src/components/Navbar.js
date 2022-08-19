import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Container className='nav'>
  
    <a className="site-title" href="/">Site Name</a>
    <ul>
        <li>
            <a href="/a">About    </a>
            <a href="/b">Contact   </a>
        </li>
    </ul>
   {/* // <span><input type="text" placeholder="Search.."/></span> */}
  


    
  
  </Container>
  )
}

const Container = styled.div`
position: sticky;
top:0;
background-color: black;
color:  white;
display: flex;
justify-content: space-between;
align-items: stretch;
gap: 2rem;

padding:10px 5px 10px 5px;
a {
  color: inherit;
  text-decoration: none;
}
ul {
  padding: 0;
margin: 0px;
list-style: none;
display: flex;
gap: 1rem;
}
li {
  margin-right: 10px;
}
`


export default Navbar