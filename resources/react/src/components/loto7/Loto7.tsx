import {useLoto} from "../../hooks/useLoto";
import {List} from "./List";
import Navbar from "../header/Navbar";


const Loto7 = () => {
    // カスタムフックから必要な変数を取得
    const {loto7List} = useLoto();

    return (
        <>
            <Navbar/>
            <div>
                <h2>Loto 7</h2>
                <h3>最新が一番上</h3>
                <List loto7List={loto7List}></List>
            </div>
        </>
    );
}

export default Loto7;
