export const Count = ({ doSomething, buttonName }) => {
   return (
        <button onClick={doSomething}>
            {buttonName}
        </button>
    )
};