//Knuth-Morris-Pratt string search algorithm.
/*searches for occurrences of a "word" W within a main "text string" S
by employing the observation that when a mismatch occurs,
the word itself embodies sufficient information to determine where the next match could begin,
thus bypassing re-examination of previously matched characters*/
function KMP(S, W) {
    let j = 0; //position of current character in S.
    let k = 0; //position of current char in W.
    let T = KMP_Table(W); //table of ints.
    let nP = 0; //number of positions of W in S.
    let P = [];
    while (j < S.length) {
        if (W[k] === S[j]) {
            j++;
            k++;
            if (k === W.length) {
                P.push(j - k);
                nP++;
                k = T[k];
            }
        } else {
            k = T[k];
            if (k < 0) {
                j++;
                k++;
            }
        }
    }
    return P;
}

function KMP_Table(W) {
    let pos = 1;
    let cnd = 0;
    let T = [];
    T.push(-1);

    while (pos < W.length) {
        if (W[pos] === W[cnd]) {
            T.push(T[cnd]);
        } else {
            T.push(cnd);
            cnd = T[cnd];
            while (cnd >= 0 && W[pos] != W[cnd]) {
                cnd = T[cnd];
            }
        }
        pos++;
        cnd++;
    }
    T[pos] = cnd;
    return T;
}

console.log(KMP("ABC ABCDAB ABCDABCDABDE", "ABCDABD"));