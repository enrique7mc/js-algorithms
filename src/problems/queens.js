function isConsistent(q, n) {
    for (let i = 0; i < n; i++) {
        if (q[i] === q[n])             return false;   // same column
        if ((q[i] - q[n]) === (n - i)) return false;   // same major diagonal
        if ((q[n] - q[i]) === (n - i)) return false;   // same minor diagonal
    }
    return true;
}

function printQueens(q) {
    const N = q.length;
    for (let i = 0; i < N; i++) {
        let row = '';
        for (let j = 0; j < N; j++) {
            if (q[i] == j) row += 'Q ';
            else row += '* ';
        }
        console.log(row)
    }
    console.log();
}

function enumerate(q, n) {
    const N = q.length;
    if (n === N) printQueens(q);
    else {
        for (let i = 0; i < N; i++) {
            q[n] = i;
            if (isConsistent(q, n)) {
                enumerate(q, n + 1);
            }
        }
    }
}

function enumerateStart(N) {
    const a = new Array(N).fill(0);
    enumerate(a, 0);
}

enumerateStart(8);