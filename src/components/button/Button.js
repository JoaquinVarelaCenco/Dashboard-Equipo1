
const Button = (props) => {

    return (
        <button 
            className={props.classN} 
            type={props.type}
            onClick={props.click}
            
        >
            {props.title}
            {props.children}
        </button>
    )
}

export default Button;