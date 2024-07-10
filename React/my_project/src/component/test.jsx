import React from "react";

function Test() {
    return (
    <div className="flex flex-col"> 
    {/* 자기 자식들만 영향을 미침 */}

        {/* header */}
        <div className="flex bg-sky-200 h-[100px] p-[10px] items-center">

            <div className="flex flex-col items-center gap-[3px]">
                <img 
                src="sample.jpg"
                alt=""
                className="w-[50px] h-[50px]"
                />
                <p>SSU:VELOP</p>
            </div>

            <div className="flex gap-[20px]">
                <p>공지/이벤트</p>
                <p>이용안내</p>
                <p>스터디</p>
            </div>

            <div className="grow flex justify-end gap-[20px]">
                <p>로그인</p>
                <p>회원가입</p>
            </div>
            
        </div>

        {/* body */}
        <div>body</div>

        {/* footer */}
        <div>footer</div>
    </div>
    );
}

export default Test;