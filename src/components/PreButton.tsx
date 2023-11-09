import React, { useEffect, useState } from "react";
import axios from "axios";
import { get } from "http";
import { isConstructorDeclaration } from "typescript";
import OneButton from "./OneButton";
import CreateCharts from "./CreateCharts";

function PreButton() {

    let Predatas;
    const [PreNamedatas, setPreNamedatas] = useState<string[]>([]);
    const PrePopdatas: any[] = [];

    const ALLPop: any[] = [];
    const YoungPop: any[] = [];
    const WorkPop: any[] = [];;
    const OldPop: any[] = [];

    const [nowTheme, setnowTheme] = useState("総人口");
    const [nowstate, setstate] = useState("loading");



    useEffect(() => {
        axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", { headers: { "X-API-KEY": "FsEmsGAEGJ4kkz69wBsMpSMNe6VgZhMYeWSqd3fT" } })
            .then(function (response) {
                console.log(response);
                Predatas = response.data.result;
                const getPreNameDatas = Predatas.map((item: any) => item["prefName"]);
                setPreNamedatas(getPreNameDatas);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [])




    useEffect(() => {

        async function GetPopulation() {
            for (let i = 1; i <= 47; i++) {
                const tmpdata = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${i}`, { headers: { "X-API-KEY": "FsEmsGAEGJ4kkz69wBsMpSMNe6VgZhMYeWSqd3fT" } });
                if (tmpdata) {
                    PrePopdatas.push(tmpdata.data.result.data);
                    ALLPop.push(tmpdata.data.result.data[0]);
                    YoungPop.push(tmpdata.data.result.data[1]);
                    WorkPop.push(tmpdata.data.result.data[2]);
                    OldPop.push(tmpdata.data.result.data[3]);
                }
            }
            console.log(ALLPop);
            console.log(YoungPop);
            console.log(WorkPop);
            console.log(OldPop);

            setstate("complete")


        }

        GetPopulation();


    }, [])

    function screenview() {
        if (nowstate == "loading") {
            return (
                <h1>Loading</h1>
            );
        }
        else {

            return (
                <div>
                    <div className="frame">
                        <div className="caption">都道府県</div>
                        <div className="PreCheckBox">
                            {
                                PreNamedatas.map((PreName, index) => {
                                    return (
                                        <OneButton prename={PreName} key={index} />
                                    )
                                })
                            }
                        </div>

                        <CreateCharts data={ALLPop[0]} />

                        <div>現在表示しているのは{nowTheme}です。</div>

                        <div className="ChooseTheme">
                            <button className="Theme1" onClick={() => setnowTheme("総人口")}>総人口</button>
                            <button className="Theme2" onClick={() => setnowTheme("年少人口")}>年少人口</button>
                            <button className="Theme3" onClick={() => setnowTheme("生産年齢人口")}>生産年齢人口</button>
                            <button className="Theme4" onClick={() => setnowTheme("老年人口")}>老年人口</button>
                        </div>

                    </div>
                </div>

            );

        }
    }

    return (

        <div>
            {screenview()}
        </div>

    );
}

export default PreButton;
