import { useMiniloto } from "../../hooks/useMiniloto";
import { List } from "./List";
import Navbar from "../header/Navbar";
import EventInfoDisplayButton from "../common/EventInfoDisplayButton";

const MiniLoto = () => {
    // カスタムフックから必要な変数を取得
    const { minilotoList } = useMiniloto();

    return (
        <>
            <Navbar />
            <EventInfoDisplayButton />
            <div>
                <h2>Mini Loto</h2>
                <h3>最新が一番上</h3>
                <List minilotoList={minilotoList}></List>
            </div>
        </>
    );
};

export default MiniLoto;
