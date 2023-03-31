import {useLoto} from "../../hooks/useLoto";
import {List} from "./List";
import Navbar from "../header/Navbar";


const Loto6 = () => {
    // カスタムフックから必要な変数を取得
    const {loto6List} = useLoto();

    return (
        <>
            <Navbar/>
            <div>
                <h2>Loto 6</h2>
                <h3>最新が一番上</h3>
                <List loto6List={loto6List}></List>
            </div>
        </>
    );
}

export default Loto6;
