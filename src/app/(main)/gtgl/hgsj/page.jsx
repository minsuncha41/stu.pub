'use client';

import "./Hgsj.css";
import s from "./Hgsj.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Baby, CakeSlice, Check, ChevronLeft, ChevronRight, Clock4, Copy, Ellipsis, FileText, Flower2, Heart, HeartHandshake, Layers, Paperclip, Plus, Save, SendHorizontal, Upload, X } from "lucide-react";




export default function Hgsj(){

    const [employee, setemployee] = useState([]);

    useEffect(() => {
        //api를 요청해서 받는다. 통신은async await붙인다  
        const getEmployee = async () => {
            const response = await baseApi.get("/api/v1/employees");
            console.log(response.data.data);

            //useState를 넣는다
            setemployee(response.data.data);

            //useState에 있는 데이터를 렌더링 시킨다
        }
        getEmployee();
    }, []);

    return(
<div className="wrap">
        <Nav num2={true} />




    <div className="inwrap">
        <Aside dummy={ [ 
            { titin: { icon: "/Clock.png" , titname:"근태관리", main:"gtgl"  }, 
            sublit: [ "일일근태등록" , "월근태현황"],
            mainsub: [ "gtdl", "gthh", ] }, 

            { titin: { icon: "/Plane.png" , titname:"출장관리", main:"gtgl" }, 
            sublit: [ "출장신청" , "출장정산", "출장사용현황" ],
            mainsub: [ "",  "",  "" ] }, 
            
            {titin: { icon: "/Calendar.png" , titname:"휴가관리", main:"gtgl" }, 
            sublit: [ "휴가일수설정", "휴가일수계산", "휴가일수신청", "휴가사용현황", ],
            mainsub: [ "hgsj",  "hggs",  "",  "" ] }, 
        ] } 
             
        idxs="3"
        subidxs="1"
        />







        <div className="main">
            <Toptits toptits={{ 
                ttmap: "근태관리" ,
                map: "휴가관리" , 
                tit: "휴가일수설정" , 
                text: "연도별 휴가 정책 및 직급별 기준 일수를 설정합니다." , 
                tllbtn: "PDF 다운로드" , trrbtn: "설정저장",
                
                }} 
                lftwtbtnno="o"
                plusimgno="o"
            />

            <div className="findebox">
                <div className="findeboxlft">
                    <div className="ipdybox">
                        <div class="jgfmin ">
                            <p><ChevronLeft size={14}/></p>
                            <input type="date" />
                            <p><ChevronRight size={14} /></p>
                        </div>
                    </div>
                    <div className="ifbox">
                        ⓘ 회계연도 기준 (1월~12월)
                    </div>
                </div>

                <div className="findeboxbtns">
                    <Copy  size={13}/>
                    전년도 설정 복사
                </div>



            </div>


            <div className="hgsjbox">
                <div className="lftbox">
                    <div className="fromtit">
                        <h1>
                            <Layers size={15} strokeWidth={1.5} />
                            직급별 기준 휴가일수
                        </h1>
                        <h2>
                            <Plus size={11}/>
                            행추가
                        </h2>
                    </div>
                    <div className="lftboxtb">
                        <ul>
                            <li>직급</li>
                            <li>기준 일수</li>
                            <li>최대 이월</li>
                            <li>반차 허용</li>
                            <li>비고</li>
                        </ul>

                        <ul>
                            <li>임원</li>
                            <li><p>25</p></li>
                            <li><p>10</p></li>
                            <li>
                                <div className="tgbtnbox">
                                    <div className="tgbtn">
                                        <div className="tgs"></div>
                                    </div>
                                </div>
                            </li>
                            <li>최고 직급 기준</li>
                        </ul>

                    </div>

                </div>









            </div>




        </div>

    </div>

</div>
    )


}