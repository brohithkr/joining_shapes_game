import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
const rootStyle = {
  display: "flex",
  justifyContent: "center",
};
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = {
  padding: "10px",
  border: "1px solid black",
};
const SecondExample = () => {
    let [conn, setConn] = useState(null);
    const handleConn = () => {
        if(conn!="2"){
        setConn("2")}
        else{
            setConn("0")
        }
        console.log("Hello")
        console.log(conn)
    }
    return (
      <ArcherContainer >
        <div style={rowStyle}>
          <ArcherElement
            id="1"
            relations={[
              {
                targetAnchor: 'middle',
                sourceAnchor: 'middle',
                targetId: conn,
                style: { strokeColor: "blue", strokeWidth: 5, endMarker: false  },
              },
            ]}
          > 
            <div onClick={handleConn} style={boxStyle}>Element 1</div>
          </ArcherElement>
          <div className="w-10"></div>
          <ArcherElement id="2">
            <div style={boxStyle}>Element 2</div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    );
  };

export default SecondExample;
