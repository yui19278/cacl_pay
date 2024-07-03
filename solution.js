const solution = (logs) => {
    
    //定義
    const hourlyPay = 1000; //時給
    let workTime = 0; //勤務時間
    let breakTime = 0; //休憩時間
    let inTime = null; //入室時間
    let breakStart = null//休憩開始時刻

    logs.forEach(log => {
        //logの中身を分割
        const [action, timestamp] = log.split(','); // アクションとタイムスタンプに分割
        const time = new Date(timestamp).getTime(); // タイムスタンプをミリ秒に変換

        //処理
        if (action === 'IN') {
            inTime = time; // 入室時間を記録
        } else if (action === 'OUT') {
            if (inTime !== null) {
                workTime += (time - inTime); // 勤務時間を計算
                inTime = null; // 入室時間をリセット
            }
        } else if (action === 'TEMP_OUT') {
            if (inTime !== null) {
                breakStart = time; // 休憩開始時間を記録
            }
        } else if (action === 'RETURNED') {
            if (breakStart !== null) {
                breakTime += (time - breakStart); // 休憩時間を計算
                breakStart = null; // 休憩開始時間をリセット
            }
        }
    });

    //総勤務時間と給与の計算
    const totalWorkTime = (workTime - breaktTme) / (1000 * 60 * 60); //総勤務時間
    const totalPay = totalWorkTime * hourlyPay; //給与の計算

    return totalPay;
    
}

exports.solution = solution;

