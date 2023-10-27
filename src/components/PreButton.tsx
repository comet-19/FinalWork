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

        async function GetPopulation () {
            for (let i = 1; i <= 47; i ++) {
                const tmpdata = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${i}`, { headers: { "X-API-KEY": "FsEmsGAEGJ4kkz69wBsMpSMNe6VgZhMYeWSqd3fT" } });
                if (tmpdata) {
                    PrePopdatas.push(tmpdata);
                }
                console.log(tmpdata);
            }

        }

        GetPopulation();

    }, [])



    return (
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

            <div className="ViewChartsBox">
                {
                    <CreateCharts />
                }

            </div>
            <div className="ChooseTheme">
                <button>総人口</button>
                <button>年少人口</button>
                <button>生産年齢人口</button>
                <button>老年人口</button>
            </div>

        </div>
    );
}

export default PreButton;
