import React, {useEffect, useState} from "react";
// import { ulid } from 'ulid';
import * as lotoData from "../api/Loto";
import {Loto6} from "../types/Loto6";
import {Loto7} from "../types/Loto7";
import {MiniLoto} from "../types/MiniLoto";

export const useLoto = () => {

    const [loto6List, setLoto6List] = useState<Loto6[]>([]);

    const [loto7List, setLoto7List] = useState<Loto7[]>([]);

    const [minilotoList, setMiniLotoList] = useState<MiniLoto[]>([]);

    useEffect(() => {
        lotoData.fetchLoto6Result().then((loto6) => {
            console.log(...loto6);
            setLoto6List([...loto6]);
        });
    }, []);

    useEffect(() => {
        lotoData.fetchLoto7Result().then((loto7) => {
            console.log(...loto7);
            setLoto7List([...loto7]);
        });
    }, []);

    useEffect(() => {
        lotoData.fetchMinilotoResult().then((miniloto) => {
            console.log(...miniloto);
            setMiniLotoList([...miniloto]);
        });
    }, []);

    // 作成した関数を返す
    return {loto6List, loto7List, minilotoList};
}
