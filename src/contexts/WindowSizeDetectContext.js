// DeviceTypeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const DeviceTypeContext = createContext();

const DeviceTypeProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState("");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setDeviceType("web");
    } else if (width > 767 && width < 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("mobile");
    }
  };

  useEffect(() => {
    handleResize(); // 초기 로드 시에도 호출하여 초기 상태 설정

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DeviceTypeContext.Provider value={{ deviceType, setDeviceType }}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

const useDeviceType = () => {
  const context = useContext(DeviceTypeContext);
  if (!context) {
    throw new Error("useDeviceType must be used within a DeviceTypeProvider");
  }
  return context.deviceType;
};

const useSetDeviceType = () => {
  const context = useContext(DeviceTypeContext);
  if (!context) {
    throw new Error("useDeviceType must be used within a DeviceTypeProvider");
  }
  return context.setDeviceType;
};

export { DeviceTypeProvider, useDeviceType, useSetDeviceType };
