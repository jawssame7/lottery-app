export const Numbers = ({perNums, bonusNum}: { perNums: number[], bonusNum: number }) => {
    const targetNums = [];
    for (let i = 0; i < 43; i++) {
        targetNums.push(i + 1);
    }

    const numberCls = (target: number, perNums: number[], bonusNum: number) => {
        let cls: string = perNums.includes(target) ? 'number per_number' : 'number';
        cls = target === bonusNum ? cls + ' bonus_number' : cls;
        return cls;
    };

    return (
        <div className={'numbers'}>
            {targetNums.map((num: number) => (
                <div key={num} className={numberCls(num, perNums, bonusNum)}>{num}</div>
            ))}
        </div>
    );
}
