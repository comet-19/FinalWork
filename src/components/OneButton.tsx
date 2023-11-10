
function OneButton (props:any) {
    return (
        <div className="PreButton">
            <input type="checkbox" onChange={props.onChange}/><span>{props.prename}</span>
        </div>
    )
}

export default OneButton;