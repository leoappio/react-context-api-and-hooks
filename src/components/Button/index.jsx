import './styles.css';

export const Button = ({ children, onButtonClick }) => {
    return (
        <button onClick={onButtonClick}>
            {children}
        </button>

    );
}
