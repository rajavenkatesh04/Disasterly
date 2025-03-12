import React from 'react';

const Legend = () => {
    return (
        <div style={{
            position: "absolute",
            bottom: "30px",
            right: "10px",
            zIndex: 1000,
            background: "rgba(255, 255, 255, 0.9)",
            padding: "10px",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            backdropFilter: "blur(5px)"
        }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "0.9rem" }}>Legend</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#d7191c",
              marginRight: "5px"
          }}></span>
                    <span style={{ fontSize: "0.8rem" }}>Major Earthquake (6.0+)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#fdae61",
              marginRight: "5px"
          }}></span>
                    <span style={{ fontSize: "0.8rem" }}>Moderate Earthquake (5.0-5.9)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#0000ff",
              marginRight: "5px"
          }}></span>
                    <span style={{ fontSize: "0.8rem" }}>Tsunami Warning</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#ff4500",
              marginRight: "5px"
          }}></span>
                    <span style={{ fontSize: "0.8rem" }}>Active Fire</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#800080",
              marginRight: "5px"
          }}></span>
                    <span style={{ fontSize: "0.8rem" }}>Severe Weather</span>
                </div>
            </div>
        </div>
    );
};

export default Legend;