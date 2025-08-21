import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col">{children}</div>;
};

export default Body;