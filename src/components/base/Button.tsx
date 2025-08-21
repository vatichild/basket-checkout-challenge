import { useNavigate } from "react-router-dom"

const Button = ({label, disabled, to, onClick, severity = 'primary'}: {
    label: string
    disabled?: boolean
    to?: string
    onClick?: () => void
    severity?: string
}) => {
    const navigate = useNavigate();
    const buttonClickHandler = () => {
        if(to) navigate(to);
        if(onClick){
            onClick();
        }
    }

    const buttonSeverity = () => {
        if(severity === 'danger') {
            return 'border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white';
        }

        if(severity === 'secondary') {
            return 'border-gray-300 bg-gray-200 hover:bg-gray-300 hover:bg-gray-400'
        }

        return 'border-blue-600 bg-blue-500  hover:bg-blue-700 text-white';
    }

    return (
        <button
            disabled={disabled}
            onClick={buttonClickHandler}
            className={`text-xs p-2 rounded cursor-pointer border disabled:bg-gray-300 disabled:border-gray-500 disabled:cursor-not-allowed ${buttonSeverity()}`}>
            {label}
        </button>
    )
}

export default Button