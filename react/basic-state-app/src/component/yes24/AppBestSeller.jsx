import React, { useEffect, useState } from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';

export default function AppBestSeller() {
    const [ menuList, setMenuList ] = useState([])
    const [ bookList, setBookList] = useState([])
    const [ category, setCategory] = useState(`total`);

        useEffect(() => {
            fetch("/data/yes24.json")
                .then(data => data.json())//갖고오는데이터가 string이기때문에then을두번사용
                .then(jsonData => {
                    setMenuList(jsonData.menuList);// 여러개는{}사용

                    if(category === 'total') {
                        setBookList(jsonData.bookList);
                    }else {
                        //category 값에 따라 필터링 처리후 setBookList에 추가
                        const filterBooks =
                            jsonData.bookList.filter((book) => book.category === category ); 
                        setBookList(filterBooks);
                        //book.category북에 있는카테고리값이같으면 book에 넣음//filterArray
                        //[{book}, {book}]
                    }
                })
                .catch(error => console.log(error));

        }, [category]); // }, [category])메뉴클릭할때마다 재호출됨 dependercy

    // AppBestSeller <-- MenuList <-- Menu
    const handMenuClickReq2 = (category) => {
        console.log(`AppBestSeller ---> ${category}`); //탭메뉴클릭시 결과값이console에 출력되는부분
        setCategory(category);
    }


    
    return (
        <div className='container'>
            <MenuList list={menuList} click={handMenuClickReq2} />
            <BestBook list={bookList} />
        </div>
        
    );
}






// (단축키) Preferences > configure snippets > rfc 
