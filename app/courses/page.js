"use client"

import { useEffect } from "react";

function Courses() {
  useEffect(() => {
    console.log("Courses Page Rendered");
  }, []);

  return <div>Courses Page</div>;
}

export default Courses;
