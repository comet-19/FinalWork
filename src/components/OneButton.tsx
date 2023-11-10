
function OneButton (props:any) {
    return (
        <div className="PreButton">
            <input type="checkbox" onChange={props.onChange} key={props.index}/><span>{props.prename}</span>
        </div>
    )
}

export default OneButton;