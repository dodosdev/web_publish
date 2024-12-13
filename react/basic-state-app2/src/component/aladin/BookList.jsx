import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';
import './aladin.css';

export default function BookList() {
    const [ books, setBooks ] = useState([]);
    const [category, setCategory] = useState([]);
    const [ type, setType ] = useState('total'); //여기서 type 변경
    const [ selectCategory, setSelectCategory  ] = useState(''); //여기서 type 변경


    useEffect(()=>{     
        
        console.log(`selectCategory --> ${selectCategory}`);
        fetch("/data/aladin.json")
            .then(data => data.json())
            .then(jsonData => {
            // setBooks(jsonData);
            //국내도서  //조건이 1개일경우
                setCategory(jsonData.category); //카테고리데이터 가져오기


            if(type === 'total') {  //'total'초기값설정
                setBooks(jsonData.books); //데이터가 바뀌면 (jsonData.books); //.books데이터이름을붙임
            } else {
                const filterBooks = jsonData.books.filter((book) => book.type === type);
                setBooks(filterBooks); //type이실행되면 이부분을실행
            }
            // 조건이 여러개일경우는 -->jsonData.filter((book) => {book.type === 'domestic'});
        })
        .catch(error => console.log(error));
        
    }, [type, selectCategory]); //type이 바뀔때마다 실행  [type(1순위), selectCategory(2순위)]);
    

    const handleClick = (event) => {
        setType(event.target.value);
    }

    const handleChangeCategory = (event) => {
        selectCategory(event.target.value);
        
    }


    return (
        <>
            <div>
                <input type="radio" name="type"  value="total" onClick={handleClick} />전체도서
                <input type="radio" name="type"  value="domestic" onClick={handleClick} />국내도서
                <input type="radio" name="type" value="overseas" onClick={handleClick} />국외도서
                
                <select onChange={handleChangeCategory}>
                    <option value='선택'>선택</option>
                        {category && category.map((item) =>  //&& 외부에서가져옴
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            <ul style={{'display': 'grid', 'grid-template-columns': 'repeat(4, 1fr)'}}>
                {books.map(book =>
                    <li style={{'list-style-type':'none'}}>
                        <Book img={book.img} title={book.title} />                   
                    </li>
                )}
            </ul>
        </>
    );
}
