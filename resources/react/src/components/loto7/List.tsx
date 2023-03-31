import {Item} from "./Item";
import {Loto7} from "../../types/Loto7";

export const List = ({loto7List}: { loto7List: Loto7[] }) => {
    return (
        <>
            {loto7List.length !== 0 && (
                <>
                    <ul className={'loto-list'}>
                        {loto7List.map((loto7: Loto7) => (
                            <li key={loto7.id}>
                                <div>
                                    <Item loto7={loto7}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

