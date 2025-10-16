function Header() {
    const headerStyle = {
                backgroundColor: "#252525ff",
                padding: "20px",
                border: "1px solid #000",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#fff",
            }

    return (
        <header style={ headerStyle }>
            <h1>Mi primer componente con React!!</h1>
            <p>Este es mi primer componente con react</p>
        </header>
    )
}

export default Header
