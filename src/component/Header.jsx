const Header = () => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <a href="#">Logo</a>
            </div>
            <div>
            <ul style={{ display: "flex" }}>
                <li>Home</li>
                <li>Contact</li>
                <li>Others</li>
            </ul>
            </div>
        </div>
    );
};

export default Header;