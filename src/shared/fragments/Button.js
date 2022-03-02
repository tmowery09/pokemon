export default function Button(props) {
    return (
        <>
            <div className="button">
                <button aria-label='button' aria-details={props.label} onClick={props.onClick}>{props.label}</button>
            </div>
        </>
    )
}