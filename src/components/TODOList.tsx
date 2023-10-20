import { create } from "domain";
import "./App.css";
import { useState } from "react";
import React from "react";
import Row from "./Row"
import { idText } from "typescript";


function TODOList() {
    const [TODOContent, setNewList] = useState("");

    const [todos, setTodo] = useState<Array<any>>([]);

    const [BigCheckbox, setBigCheckbox] = useState(false);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date  = today.getDate();


    function ChangeSetTodo() {
        if (TODOContent !== '') {
            setTodo([...todos, {content:TODOContent, id:CreateID(), checked:false}]);
            setNewList("");
        }
    }

    function RowDelete(getid:any) {
        setTodo(
            todos.filter((todo, index) => (index !== getid))
        )
    }

    function CreateID() {
        const GenerateID = crypto.randomUUID();
        return GenerateID;
    }


    function ChangeBool(getid:any) {
        setTodo (
            todos.map((todo, index) => (index == getid ? {content : todo.content, id : todo.id, checked : !todo.checked} : todo))
        )
    }

    function ALLDelete() {
        setTodo(
            todos.filter((todo) => (!(todo.checked)))
        )
        if (BigCheckbox) {
            setBigCheckbox(!BigCheckbox);    
        }
    }

    function ALLCheck() {
        setBigCheckbox(!(BigCheckbox));
        console.log(BigCheckbox);
        setTodo(
            todos.map((todo) => (true ? {content : todo.content, id : todo.id, checked : !BigCheckbox} : todo))
        )
    }


    return (
        <div className="App">
            <div>
                <input type="text" value={TODOContent} onChange={(event) => setNewList(event.target.value)} /><span><button className="addbutton" onClick={() => ChangeSetTodo()}>追加</button></span>
            </div>

            <div className="contents">
                <div><button className="AllDelete" onClick={() => ALLDelete()}><small>一括削除</small></button></div>
                <table id="table" border={1}>
                    <thead>
                        <tr>
                            <th className="line1"><input type="checkbox" checked={BigCheckbox} onChange={() => ALLCheck()}/></th>
                            <th className="line2">登録日</th>
                            <th className="line3">TODO</th>
                            <th className="line4">削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return <Row key={todo.id} content={todo.content} date={`${year}/${month}/${date}`} onClick={()=> RowDelete(index)} checked={() => ChangeBool(index)} checkbool = {todo.checked}/>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TODOList;