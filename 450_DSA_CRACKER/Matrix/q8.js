// Rotate matrix by 90 degrees

const rotate90Clockwise = (arr, N) => {
 
    // Traverse each cycle
    for (let i = 0; i < parseInt(N / 2); i++) {
        for (let j = i; j < N - i - 1; j++) {

            // Swap elements of each cycle
            // in clockwise direction
            var temp = arr[i][j];
            arr[i][j] = arr[N - 1 - j][i];
            arr[N - 1 - j][i] = arr[N - 1 - i][N - 1 - j];
            arr[N - 1 - i][N - 1 - j] = arr[j][N - 1 - i];
            arr[j][N - 1 - i] = temp;
        }
    }

    return arr;
}

var arr = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
let res = rotate90Clockwise(arr, 4)
console.log(res);
