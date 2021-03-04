import React from 'react'
import { useSelector } from 'react-redux';
import '../../App.css';
import { useDispatch } from "react-redux";
import { UpdateArray, UpdateSortingState } from '../../actions/array-operations';
import UpdatePillars from '../../components/UpdatePillarHeight/Update';
import sleep from '../../components/Sleep/sleep';
import {ChangeColor, MakeAllWhite, FinalCheck} from '../../components/ChangePillarColors/ChangePillarColors';

const MergeSort = () => {
    const dispatch = useDispatch();
    var array = useSelector(state => state.arr.array);
    var size = useSelector(state => state.arr.size);
    var sorting = useSelector(state => state.arr.sorting);

    async function Merger(start, mid, end) {
        var i = start, j = mid, k = 0;
        var temp = new Array(end-start+1);

        while(i < mid && j <= end) {
            if(array[i] > array[j]) {
                temp[k++] = array[j++];
            } else {
                temp[k++] = array[i++];
            }
        }

        while(i < mid) {
            temp[k++] = array[i++];
        }

        while(j <= end) {
            temp[k++] = array[j++];
        }

        for(i=start, k=0;i<=end;)
            array[i++] = temp[k++];
    }

    async function Merge(start, end) {
        if(start < end) {
            await sleep(400);
            UpdatePillars(array);
            dispatch(UpdateArray);
            var mid = parseInt((start+end)/2);
            Merge(start, mid);
            Merge(mid+1, end);
            Merger(start, mid+1, end);
            dispatch(UpdateArray)
        }
    }

    async function MergeSort() {
        Merge(0, size-1);
        await sleep(400);
            UpdatePillars(array);
    }
    
    return (
        <div>
            <input disabled={sorting} type='button' value='Merge Sort' className='btn' onClick={MergeSort} />
        </div>
    )
}

export default MergeSort
