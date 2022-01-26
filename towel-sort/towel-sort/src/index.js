// You should implement your task here.

module.exports = function towelSort(matrix) {
    //function towelSort(matrix) {
    let array1 = [];
    let array3 = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 > 0) {
                matrix[i].reverse();
            }
            array3 = array3.concat(matrix[i]);
            //console.log(array3);
        }
        return array3;
    } else {
        return [];
    }
};

//const matrix ;

//console.log(towelSort());
