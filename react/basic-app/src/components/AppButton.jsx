import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';
import { useState, useEffect } from 'react';


export default function AppButton() {
    const [propsList, setPropsList] = useState([]);
    
    useEffect(() => {
        fetch("data/button_name.json")
        .then(data => data.json())
        .then(json => setPropsList(json))
        .catch();
    }, []);




    // const propsList = [
    //     {"name":"All", "type":"button"},
    //     {"name":"Front-end", "type":"button"},
    //     {"name":"Back-end", "type":"button"},
    //     {"name":"Mobile", "type":"button"},
    //     {"name":"Submit", "type":"reset"},
    //     {"name":"Reset", "type":"reset"},
    // ];

    return (
        <>
            <div style={{display: 'flex'}}>
                <Button name="All" type="button" />
                <Button name="Front-end" type="button" />
                <Button name="Back-end" type="button" />
                <Button name="Mobile" type="button" />
                <Button name="Submit" type="button" />
                <Button name="Reset" type="button" />
            </div>
            <div style={{display:'flex'}}>
                <ButtonList list={propsList} />
            </div>
        </>
    );
}
