import { Item } from "./Item";
import { MiniLoto } from "../../types/MiniLoto";

export const List = ({ minilotoList }: { minilotoList: MiniLoto[] }) => {
    return (
        <>
            {minilotoList.length !== 0 && (
                <>
                    <ul className={"loto-list"}>
                        {minilotoList.map((miniloto: MiniLoto) => (
                            <li key={miniloto.id}>
                                <div>
                                    <Item miniloto={miniloto} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};
