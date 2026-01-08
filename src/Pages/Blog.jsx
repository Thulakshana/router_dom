import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import HeaderContent from "../Components/HeaderContent";
import BodyContent from "../Components/BodyContent";

function Blog() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderContent />
      <BodyContent>
        <h1>Blog</h1>
      </BodyContent>
    </>
  );
}

export default Blog;
