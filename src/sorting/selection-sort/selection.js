import React from 'react'
import { useSelector } from 'react-redux';
import '../../App.css';
import { useDispatch } from "react-redux";
import { UpdateArray } from '../../actinos/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update'

const SelectionSort = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);
    
    function findMin(start) {
        var min = start;
        for(var i=start;i<size;++i) {
            if(array[i] < array[min])
                min = i;
        }
        return min;
    }

    function sort() {
        for(var i=0;i<size;++i) {
            var minIndex = findMin(i);
            var temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
            dispatch(UpdateArray);
        }
        
        UpdatePillars(array);
    }

    return (
        <div>
            <input type='button' onClick={sort} className='btn' value='Selection Sort' />
        </div>
    )
}

export default SelectionSort
