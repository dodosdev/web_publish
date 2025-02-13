import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext';

export default function Header({cartCount}) {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); //로그인 부분
    const navigate = useNavigate();

    // console.log('isLoggedIn-->', isLoggedIn);
    const handleLoginToggle = () => {
        if(isLoggedIn) { //로그인 성공 ::  Logout 
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
                if(select) {
                localStorage.removeItem("token");  //토큰삭제
                localStorage.removeItem("user_id");  
                setIsLoggedIn(false);
                // alert("로그아웃 되었습니다");
                navigate('/');
            }

            } else { //Login 버튼 클릭
                navigate('/login');
            }
    }

    
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>  
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart({cartCount})</Link>
                    {/* <Link to='/login'>
                    </Link> */}
                    <button type="button" onClick={handleLoginToggle}>
                        { isLoggedIn ? "Logout" :"Login"}
                    </button>
                    <Link to='/signup'>
                        <button type="button">Signup</button>
                    </Link>

                    
                    { isLoggedIn &&
                        <Link to='/products/new'>
                            <button type="button">New Product</button>
                        </Link>    
                    }


                </nav>
            </div>
        </div>
    );
}

//{ isLoggedIn ? "Logout" :"Login"} 
// 토큰이 있으면 로그아웃으로 버튼으로 바뀜//토큰이 없으면 로그인버튼

/**
 * 로그인에 성공했을때만 보임
 * 
 *  { isLoggedIn &&
        <Link to='/product/new'>
            <button type="button">New Product</button>
        </Link>    
    }
 */