import React from 'react';

export default function Skills({children}) { //children자식들을 그룹으로해서 한꺼번에보여줌
    return (
        <div class="skills">
            {children}
        </div>
    );
}

