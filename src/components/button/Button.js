

const Button = (props) => {


    return (
        <button 
            className={props.classN} 
        >
            {props.title}
            {props.children}
        </button>
    )
}

export default Button;