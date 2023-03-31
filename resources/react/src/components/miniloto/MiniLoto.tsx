import {useLoto} from "../../hooks/useLoto";
import {List} from "./List";
import Navbar from "../header/Navbar";


const MiniLoto = () => {
    // カスタムフックから必要な変数を取得
    const {minilotoList} = useLoto();

    return (
        <>
            <Navbar/>
            <div>
                <h2>Mini Loto</h2>
                <h3>最新が一番上</h3>
                <List minilotoList={minilotoList}></List>
            </div>
        </>
    );
}

export default MiniLoto;
