import React, { createContext, useContext, useState } from 'react';

const OverlayColorContext = createContext();

export const OverlayColorProvider = ({ children }) => {
  const [trigger_1, settrigger_1] = useState(false)
  const [trigger_2, settrigger_2] = useState(false)
  const [trigger_3, settrigger_3] = useState(false)
  const [trigger_4, settrigger_4] = useState(false)
  const [trigger_5, settrigger_5] = useState(false)
  const [trigger_6, settrigger_6] = useState(false)
  const [trigger_7, settrigger_7] = useState(false)
  const [trigger_8, settrigger_8] = useState(false)
  const [trigger_9, settrigger_9] = useState(false)
  const [FabricToeGuard, setFabricToeGuard] = useState({ r: 1, g: 0, b: 0 });
  const [Vamp, setVamp] = useState({ r: 1, g: 0, b: 0 });
  const [Laces, setLaces] = useState({ r: 1, g: 0, b: 0 });
  const [Tongue, setTongue] = useState({ r: 1, g: 0, b: 0 });
  const [AirBubble, setAirBubble] = useState({ r: 1, g: 0, b: 0 });
  const [Liner, setLiner] = useState({ r: 1, g: 0, b: 0 });
  const [Midsole, setMidsole] = useState({ r: 1, g: 0, b: 0 });
  const [Swoosh, setSwoosh] = useState({ r: 1, g: 0, b: 0 });
  const [Heal, setHeal] = useState({ r: 1, g: 0, b: 0 });

  return (
    <OverlayColorContext.Provider value={
      { FabricToeGuard, setFabricToeGuard, Vamp, setVamp, Laces, setLaces, Tongue, setTongue, AirBubble, setAirBubble, Liner, setLiner, Midsole, setMidsole, Swoosh, setSwoosh, Heal, setHeal, trigger_1, settrigger_1, trigger_2, settrigger_2, trigger_3, settrigger_3, trigger_4, settrigger_4, trigger_5, settrigger_5, trigger_6, settrigger_6, trigger_7, settrigger_7, trigger_8, settrigger_8, trigger_9, settrigger_9 }
      }>
      {children}
    </OverlayColorContext.Provider>
  );
};

export const useOverlayColor = () => useContext(OverlayColorContext);
