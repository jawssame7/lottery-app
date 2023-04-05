import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"nav-bar"}>
            <Link className={"nav-bar-item"} to="/">
                Home
            </Link>
            <Link className={"nav-bar-item"} to="/loto6">
                Loto6
            </Link>
            <Link className={"nav-bar-item"} to="/loto7">
                Loto7
            </Link>
            <Link className={"nav-bar-item"} to="/miniloto">
                MiniLoto
            </Link>
        </div>
    );
};

export default Navbar;
