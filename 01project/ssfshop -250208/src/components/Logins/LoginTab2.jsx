export default function LoginTab2(){
    return (
        <div id="tab2" class="on">
        	            <h3 class="wa-hidden">비회원(주문조회) 입력</h3>
                        <form action="" method="post" id="nonMemberForm">
                            <input type="hidden" name="_csrf" value="aac16e3e-027a-4a43-be9d-b7d7af254ea4"/>
                            <div className="signIn-form" style={{backgroundColor:"yellowgreen"}}>
                                <div>
                                    <div class="input-box">
                                        <span class="skills">
                                            <i class="reset_txt"></i>
                                        </span>
                                        <label for="cstmrNm" class="wa-hidden">이름</label>
                                        <input name="cstmrNm" id="cstmrNm" value="" validate="required" type="text" 
                                        label="이름" placeholder="이름" class="reset" title="이름"/>
                                    </div>
                                    <div class="input-box">
                                        <span class="skills">
                                            <i class="reset_txt"></i>
                                        </span>
                                        <label for="cstmrMobilNo" class="wa-hidden">휴대폰 번호</label>
                                        <input type="text" name="cstmrMobilNo" id="cstmrMobilNo" value=""
                                        label="휴대폰 번호" validate="required;digit;minlength:10;" maxlength="11" 
                                        placeholder="휴대폰 번호(‘-’ 없이 입력)" title="휴대폰 번호(‘-’ 없이 입력)"/>
                                    </div>
                                    <div class="input-box">
                                        <span class="skills">
                                            <i class="reset_txt"></i>
                                        </span>
                                        <label for="ordNo" class="wa-hidden">주문번호</label>
                                        <input type="text" class="inp_txt" name="ordNo" id="ordNo" value="" 
                                        validate="required" label="주문번호" placeholder="주문번호" title="주문번호"/>
                                    </div>
                                </div>
                                <button type="button" >주문/배송조회</button>
                            </div>
                            <p id="nonMemberPwarn" class="invalid-txt"></p>
                                <div class="center_info">
                                    <span>1599-0007</span>
                                    평일(월~금)<strong> 09:00~18:00</strong> (주말 및 공휴일 휴무)
                            </div>
                        </form>
                    </div>  
    );
}