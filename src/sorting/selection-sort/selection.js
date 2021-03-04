import React from 'react'
import '../../App.css';
import { useDispatch, useSelector } from "react-redux";
import { UpdateArray, UpdateSortingState } from '../../actions/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update';
import sleep from '../../components/Sleep/sleep';
import {ChangeColor, MakeAllWhite, FinalCheck} from '../../components/ChangePillarColors/ChangePillarColors';

const SelectionSort = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);
    var sorting = useSelector(state => state.arr.sorting);

    function findMin(start) {
        var min = start;
        for(var i=start;i<size;++i) {
            if(array[i] < array[min])
                min = i;
        }
        return min;
    }

    async function sort() {
        dispatch(UpdateSortingState(false));
        for(var i=0;i<size;++i) {
            ChangeColor(i)
            var minIndex = findMin(i);
            var temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
            dispatch(UpdateArray);
            await sleep(400);
            UpdatePillars(array);
        }
        MakeAllWhite();
        await FinalCheck();
        MakeAllWhite();
        dispatch(UpdateSortingState(true));
    }

    return (
        <div>
            <input disabled={sorting} type='button' onClick={sort} className='btn' value='Selection Sort' />
        </div>
    )
}

export default SelectionSort
