import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import { useDispatch } from "react-redux";
import { UpdateArray, UpdateSortingState } from '../../actinos/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update';
import sleep from '../../components/Sleep/sleep';

const Bubble = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);
    var sorting = useSelector(state => state.arr.sorting);

    async function bubbleSort() {
        dispatch(UpdateSortingState(false));
        var swaps = -1;
        while(swaps !== 0) {
            swaps = 0;
            for(var i = 0;i<size-1;++i) {
                if(array[i+1] < array[i]) {
                    var temp = array[i+1];
                    array[i+1] = array[i];
                    array[i] = temp;
                    ++swaps;
                }
            }
            dispatch(UpdateArray);
            await sleep();
            UpdatePillars(array);
        }
        dispatch(UpdateSortingState(true));
    }
    
    return (
        <div>
            <input disabled={sorting} type='button' value='Bubble Sort' className='btn' onClick={bubbleSort} />
        </div>
    )
}

export default Bubble
