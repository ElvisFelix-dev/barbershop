import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Numans', sans-serif;
    font-family: 'Play', sans-serif;
  }

  body {
    background-color: #181818;
  }

  button {
    background-color:  #c38b58;
  }

  a {
    text-decoration: none;
  }


  ul {
    list-style: none;
  }

  
`
