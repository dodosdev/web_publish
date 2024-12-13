import React, { useState } from 'react';

export default function UserInfo() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleChangeName = (event) => { setName(event.target.value);}
    const handleChangeAddress = (event) => { setAddress(event.target.value);}
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`UserInfo -->${name}, ${address}`);
        
    }

    return (
        <div>
            <h1>User Info</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text" 
                                name='name'
                                value={name}
                                onChange={handleChangeName}
                                />
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" 
                                name='address'
                                value={address}
                                onChange={handleChangeAddress}
                                />
                    </li>
                </ul>
            </form>
        </div>
    );
}

