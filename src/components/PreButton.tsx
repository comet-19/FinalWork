import React, { useEffect, useState } from "react";
import axios from "axios";
import OneButton from "./OneButton";
import CreateCharts from "./CreateCharts";

function PreButton() {

    let Predatas;
    const [PreNamedatas, setPreNamedatas] = useState<string[]>([]);
    const PrePopdatas: any[] = [];

    const [ALLPop, setALLPop] = useState<Array<any>>([]);
    const tmpALLPop: any[] = [];


    const [YoungPop, setYoungPop] = useState<Array<any>>([]);
    const tmpYoungPop: any[] = [];

    const [WorkPop, setWorkPop] = useState<Array<any>>([]);
    const tmpWorkPop: any[] = [];

    const [OldPop, setOldPop] = useState<Array<any>>([]);
    const tmpOldPop: any[] = [];

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
                    tmpALLPop.push(tmpdata.data.result.data[0]);
                    tmpYoungPop.push(tmpdata.data.result.data[1]);
                    tmpWorkPop.push(tmpdata.data.result.data[2]);
                    tmpOldPop.push(tmpdata.data.result.data[3]);
                }
            }

            setALLPop(tmpALLPop);
            setYoungPop(tmpYoungPop);
            setWorkPop(tmpWorkPop);
            setOldPop(tmpOldPop);

            setstate("complete")


        }

        GetPopulation();


    }, [])

    function screenview() {
        if (nowstate === "loading") {
            return (
                <h1>Loading</h1>
            );
        }
        else {

            if (nowTheme === "総人口") {
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
                            <div>
                                {
                                    ALLPop.map((ALLpop) => {
                                        console.log(ALLpop);
                                        console.log(ALLpop.data);
                                        console.log(ALLpop.data);
                                        return (
                                            <CreateCharts data={ALLpop.data} />
                                        )
                                    })
                                }
                            </div>
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
            else if (nowTheme === "年少人口") {
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
                            <div>
                                {
                                    YoungPop.map((Youngpop) => {
                                        console.log(Youngpop);
                                        console.log(Youngpop.data);
                                        console.log(Youngpop.data);
                                        return (
                                            <CreateCharts data={Youngpop.data} />
                                        )
                                    })
                                }
                            </div>
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
            else if (nowTheme === "生産年齢人口") {
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
                            <div>
                                {
                                    WorkPop.map((Workpop) => {
                                        console.log(Workpop);
                                        console.log(Workpop.data);
                                        console.log(Workpop.data);
                                        return (
                                            <CreateCharts data={Workpop.data} />
                                        )
                                    })
                                }
                            </div>
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
            else if (nowTheme === "老年人口") {
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
                            <div>
                                {
                                    OldPop.map((Oldpop) => {
                                        console.log(Oldpop);
                                        console.log(Oldpop.data);
                                        console.log(Oldpop.data);
                                        return (
                                            <CreateCharts data={Oldpop.data} />
                                        )
                                    })
                                }
                            </div>
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
            else {
                console.log("THEME ERROR");
            }
        }
    }

    return (
        <div>
            {screenview()}
        </div>
    );
}

export default PreButton;
