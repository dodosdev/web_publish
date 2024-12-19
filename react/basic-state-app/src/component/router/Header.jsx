import React from 'react';

export default function Header({children}) {  //children자동맵핑
    return (
        <header>
            {children}
        </header>
    );

}

