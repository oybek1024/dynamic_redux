import React from "react";
import { useSelector } from "react-redux";

function About({ props }) {
  const count = useSelector(state => state.counter.value)
  return (
    <div>
      About - { count }
      <button onClick={() => { window.action('ABOUT') }}>global</button>
    </div>
  )
}
export default About
