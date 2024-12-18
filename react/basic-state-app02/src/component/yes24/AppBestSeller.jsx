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
                        //book.category북에 있는카테고리값이같으면 book에 넣음//값이 filterBooks에 저장됨
                        //[{book}, {book}]
                    }
                })
                .catch(error => console.log(error));

        }, [category]); 
        // }, [category]) 메뉴클릭할때마다 재호출됨. 
        //의존성 배열(dependency array)은 특정 값들의 변화를 감지하여 Hook의 동작을 제어하는 역할을 한다. 
        // 주로 useEffect, useMemo, useCallback 등의 Hook에서 사용된다. 의존성 배열은 React에게 
        // "이 값들이 변경될 때만 이 효과나 계산을 다시 실행해야 해"라고 알려주는 일종의 지시자 역할을 한다. 


    // AppBestSeller <-- MenuList <-- Menu
    const handMenuClickReq2 = (category) => {
        console.log(`AppBestSeller ---> ${category}`); //탭메뉴클릭시 결과값이console에 출력되는부분
        setCategory(category);
    }


    
    return (
        <div className='container'>
            <h1>yes24 - Best books</h1>
            <MenuList list={menuList} click={handMenuClickReq2} />
            <BestBook list={bookList} />
        </div>
        
    );
}






/**
 * (단축키) Preferences > configure snippets > rfc 
 * */
