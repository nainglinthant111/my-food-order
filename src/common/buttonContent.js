function RoundedButton(props) {
    if (props.color === "gray") {
        return (
            <>
                <button
                    type="button"
                    className="roundedBtn"
                >
                    {props.text}
                </button>
            </>
        );
    } else if (props.color === "red") {
        return (
            <>
                <button
                    type="button"
                    className="roundedBtnRed"
                >
                    {props.text}
                </button>
            </>
        );
    }
}

export default RoundedButton;
