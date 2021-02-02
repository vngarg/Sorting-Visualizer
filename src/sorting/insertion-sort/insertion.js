import React from 'react'
import { useSelector } from 'react-redux';

const InsertionSort = () => {
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);

    function insertionSort() {
        for(var i = 1;i<size;++i) {
            var index, temp;
            if(array[i] < array[i-1]) {
                for(var j = i-1;j>=0;--j) {
                    if(array[i] < array[j]) {
                        index = j;
                    } else {
                        break;
                    }
                }

                temp = array[i];
                for(var j = i;j > index;--j)
                    array[j] = array[j-1];

                array[index] = temp;
            }
        }
        console.log(array);
    }

    return (
        <div>
            <input type='button' value='Insertion Sort' onClick={insertionSort} />
        </div>
    )
}

export default InsertionSort
