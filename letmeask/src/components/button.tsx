type ButtonProps = {
    text?: Array<String>;
}

export function Button(props:ButtonProps){
    return(
        <button>{props.text || "default"}</button>
    )
}