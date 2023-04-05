import { Item } from "./Item";
import { Loto6 } from "../../types/Loto6";

export const List = ({ loto6List }: { loto6List: Loto6[] }) => {
    return (
        <>
            {loto6List.length !== 0 && (
                <>
                    <ul className={"loto-list"}>
                        {loto6List.map((loto6: Loto6) => (
                            <li key={loto6.id}>
                                <div>
                                    <Item loto6={loto6} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};
