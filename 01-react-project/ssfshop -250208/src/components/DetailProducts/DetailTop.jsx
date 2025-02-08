export default function DetailTop(){
    return (
        <section className="detail-top-wrap">
                <div aria-label="Breadcrumb" class="breadcrumb">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="#none;" onclick="javascript:goAction(this); return false;" ctgryno="SFMA42">남성</a>
                        </li>
                        <li>
                            <a href="#none;" onclick="javascript:goAction(this); return false;" ctgryno="SFMA42A03">니트</a>
                        </li>
                        <li>풀오버</li>
                    </ol>
                </div>
                
                <div class="set-right">
                    <span class="heart">
                        <input id="wish" type="checkbox" name="wishHeart"/><label for="wish" id="wishLabel"><i></i></label>
                        </span>
                    <span class="share">
                            <a href="#none;" onclick="return false;">공유하기</a>
                            <i class="sns on">{/** on 동적으로 사용 */}
                                <a class="facebook" href="#none;" onclick="javascript:jsShareSns('facebook');">페이스북</a>
                                <a class="twitter" href="#none;" onclick="javascript:jsShareSns('twitter');">트위터</a>
                                <a class="pinterest" href="#none;" onclick="javascript:jsShareSns('pinterest');">핀터레스트</a>
                                <a class="url" href="#none;" onclick="clipboard (); return false;">URL</a>
                                <input id="url" style={{"position":"absolute", "top":"-9999em"}} readonly="readonly"/>
                            </i>
                            {/* <div class="layer_clip">
                                <span>URL이 복사되었습니다.</span>
                            </div> */}
                        </span>
                    </div>
            </section>
    );
}