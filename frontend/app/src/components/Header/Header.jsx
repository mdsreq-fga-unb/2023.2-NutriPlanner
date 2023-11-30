import './Header.css'
import React from 'react'

import logo from '../../assets/imgs/logo.svg'

export default props =>
    <header className="header">
        <img src={props.caminhoImagem} alt=""/>
        <h1>
            {props.title}
        </h1>
    </header>
    


//     import './Header.css'
// import React from 'react'

// import logo from '../../assets/imgs/logo.svg'

// export default props =>
//     <header className="header d-sm-flex flex-column">
//         <h1 className="mt-3">
//             <img src={props.imagePath} alt="" />
//             {props.title}
//         </h1>
//     </header>
