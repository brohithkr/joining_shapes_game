import React from "react";

/**
 * 
 * @param {Object} props 
 * @param {String[]} props.codeArr 
 * @param {String[]} props.colorArr 
 * @returns {*}
 */
export default function Code({codeArr, colorArr}) {
    return (
        <div className="absolute top-5 left-5">
        {codeArr.map((code, index) => {
            return (
            <p key={index} style={{ color: colorArr[index] }}>
                {code}
            </p>
            );
        })}
        </div>
    );
}