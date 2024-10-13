const typed = () => {
    const handleTyping = (event) => {
        console.log(event.target.value);
    };

    return (
        <>
        <input type="text" onChange={handleTyping} />
        </>
    )
}

export default typed