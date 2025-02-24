import React from "react";
import { useMediaQuery } from "react-responsive";
import './ResponsiveComponent.css'

const ResponsiveComponent = () => {

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet   = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile  = useMediaQuery({ maxWidth: 767 });

  return(
    <div>
      {isDesktop && <p>Você está em um dispositivo Desktop</p>}


      {isTablet && <p>Você está em um Table</p>}


      {isMobile && <p>Você está em um Smartphone</p>}
    </div>
  );

};

export default ResponsiveComponent;
