export default function LoginTab1(){
    return (
        <div id="tab1" className="on">
                        {/* <h1>회원정보 입력</h1> */}
                        <form action="">
                            <div className="signIn-form" style={{backgroundColor:"yellowgreen"}}>
                                <div>

                                    <div className="input-box">
                                        <label for="userId" className="wa-hidden">아이디</label>
                                        <input type="text" id="userId" name="userId" validate="required;xss2;" 
                                        locale="ko" placeholder="아이디" className="reset" title="아이디"/>
                                    </div>

                                    <div className="input-box">
                                        <label for="password" className="wa-hidden">비밀번호</label>
                                        <input type="password" maxlength="20" name="password" id="password"
                                         validate="required" locale="ko" placeholder="비밀번호" title="비밀번호"/>
                                    </div>

                                </div>
                                <button type="button">로그인</button>
                            </div>

                            <div className="save_id">
                                <span className="checkbox">
                                    <input className="checkBox" type="checkbox" id="cb01" name="saveId"/>
                                    <label for="cb01"><i></i>아이디 저장</label>
                                </span>
                            </div>
                        </form>
                        <div className="link">
                            <a href="#">아이디 찾기</a>
                            <a href="#">비밀번호 찾기</a>
                            <a href="#" className="colorDark">회원가입</a>
                        </div>

                        <dl className="login_sns">
                                <dt><span>SNS 계정으로 로그인</span></dt>
                                <dd>
                                    <a href="#" id="oLoginKaKaoLink" className="kakao box" title="새창열림">카카오 로그인</a>
                                    <a href="#" className="naver box" title="새창열림">네이버 로그인</a>
                                </dd>
                        </dl>
                    </div>
    );
}