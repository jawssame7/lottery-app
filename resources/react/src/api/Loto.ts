import axios from "axios";

const loto6ListUrl = "/api/loto6";
const loto7ListUrl = "/api/loto7";
const minilotoListUrl = "/api/miniloto";

/**
 *
 */
export const fetchLoto6Result = async () => {
    const res = await axios.get(loto6ListUrl);
    return res.data;
};

export const fetchLoto7Result = async () => {
    const res = await axios.get(loto7ListUrl);
    return res.data;
};

export const fetchMinilotoResult = async () => {
    const res = await axios.get(minilotoListUrl);
    return res.data;
};
