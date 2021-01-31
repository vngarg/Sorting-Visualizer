import React, { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { UpdateArray } from "../../actinos/array-operations";

export default function Slider() {
  const [value, onChange] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="4"
        max="20"
        value={value}
        onChange={({ target: { value: radius } }) => {
            onChange(radius);
            dispatch(UpdateArray(Number(value)));
          }}
      />
      <div className="buble">{value}</div>
    </div>
  );
}
