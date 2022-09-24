// Row with max 1s
// link: https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1


const rowWithMax1s = (arr, n, m) => {
    let Row = -Infinity;
    let i = 0;
    let j = m-1
    while((i < n) && ( j >= 0)) {
        if(arr[i][j] === 1) {
            Row = i;
            j--;
        }
        if(arr[i][j] === 0) {
            i++;
        }
    }
    return Row;
}

let res = rowWithMax1s([[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]], 4, 4)
console.log(res);