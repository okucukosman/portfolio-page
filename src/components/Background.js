// WebSite Background

import React from "react";

function Background( {children} ) {
  return (
    <body className="bg-white dark:bg-black transition-all" >
      {children}
    </body>
  )
}
export default Background;