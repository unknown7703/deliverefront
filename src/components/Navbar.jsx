//import { Link } from "react-router-dom";
import titlelogo from "../assets/deliveretitle.svg";
import Button from "./Button";
function Navbar() {
    return(<div className="w-full h-16 flex flex-row justify-between items-center px-8 border-b-2 border-gray-400 ">
        <div><img src={titlelogo} alt="mainlogo" className="w-16"/></div>
        <div className="flex flex-row gap-4">
            <Button>bb</Button>
            <Button>cc</Button>
            <Button>dd</Button>
        </div>
    </div>)
}

export default Navbar;