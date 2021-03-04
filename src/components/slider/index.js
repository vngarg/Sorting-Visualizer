import React, { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { UpdateArray } from "../../actions/array-operations";

export default function Slider() {
  const [value, onChange] = useState(16);
  const dispatch = useDispatch();

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div className="slider-parent m-2">
      <input
        className="slider"
        type="range"
        min="4"
        max="40"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
          dispatch(UpdateArray(Number(radius)));
        }}
      />
      <div className="buble">{value}</div>
    </div>
  );
}
