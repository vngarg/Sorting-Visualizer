import React from 'react'
import { useSelector } from 'react-redux';
import '../../App.css';
import { useDispatch } from "react-redux";
import { UpdateArray } from '../../actinos/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update';

const InsertionSort = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);

    function insertionSort() {
        for(var i = 1;i<size;++i) {
            var index, temp, j;
            if(array[i] < array[i-1]) {
                for(j = i-1;j>=0;--j) {
                    if(array[i] < array[j]) {
                        index = j;
                    } else {
                        break;
                    }
                }

                temp = array[i];
                for(j = i;j > index;--j)
                    array[j] = array[j-1];

                array[index] = temp;
                dispatch(UpdateArray);
            }
        }
        UpdatePillars(array);
    }

    return (
        <div>
            <input type='button' value='Insertion Sort' className='btn' onClick={insertionSort} />
        </div>
    )
}

export default InsertionSort
