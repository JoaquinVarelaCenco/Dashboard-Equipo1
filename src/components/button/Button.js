
const Button = (props) => {

    return (
        <button 
            className={props.classN} 
            type={props.type}
            onClick={props.f}
            
        >
            {props.title}
            {props.children}
        </button>
    )
}

export default Button;