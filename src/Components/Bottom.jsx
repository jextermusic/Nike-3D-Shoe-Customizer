import React, { useState } from 'react'
import { RiArrowDownLine, RiArrowLeftLine, RiArrowRightLine, RiMenuLine } from "@remixicon/react";
import { useOverlayColor } from '../Context/overlayColorContext';


const Bottom = ({setcolorData}) => {

  let sections = ["Tip", "Vamp", "Tongue", "Laces", "Vamp Mid", "Liner", "Midsole", "Swoosh", "Heal"]
  // console.log(sections)
  // console.log(sections.indexOf[5])

  const [i, incrementIndex] = useState(0)
  const [sectionName, setsectionName] = useState(`Tip`);
  console.log(i)

  // const [sectionName, setsectionName] = useState("Tip")
  const { setFabricToeGuard } = useOverlayColor();
  const { setVamp } = useOverlayColor();
  const { setTongue } = useOverlayColor();
  const { setLaces } = useOverlayColor();
  const { setAirBubble } = useOverlayColor();
  const { setLiner } = useOverlayColor();
  const { setMidsole } = useOverlayColor();
  const { setSwoosh } = useOverlayColor();
  const { setHeal } = useOverlayColor();
  const { settrigger_1 } = useOverlayColor();
  const { settrigger_2 } = useOverlayColor();
  const { settrigger_3 } = useOverlayColor();
  const { settrigger_4 } = useOverlayColor();
  const { settrigger_5 } = useOverlayColor();
  const { settrigger_6 } = useOverlayColor();
  const { settrigger_7 } = useOverlayColor();
  const { settrigger_8 } = useOverlayColor();
  const { settrigger_9 } = useOverlayColor();

  // const [colorSelection, setcolorSelection] = useState("0 ,0, 0")

  const setColor = (e) => {
    // e.preventDefault();
    // console.log(e)
    if(i == 0){
      settrigger_1(true)
      setFabricToeGuard(e)
    }
    else if (i == 1) {
      settrigger_2(true)
      setVamp(e)
    }
    else if (i == 2) {
      settrigger_3(true)
      setTongue(e)
    }
    else if (i == 3) {
      settrigger_4(true)
      setLaces(e)
    }
    else if (i == 4) {
      settrigger_5(true)
      setAirBubble(e)
    }
    else if (i == 5) {
      settrigger_6(true)
      setLiner(e)
    }
    else if (i == 6) {
      settrigger_7(true)
      setMidsole(e)
    }
    else if (i == 7) {
      settrigger_8(true)
      setSwoosh(e)
    }
    else if(i == 8) {
      settrigger_9(true)
      setHeal(e)
    }
  }

  const sectionHandlerRight = () => {
    // sections.filter(function(cv,index) {
    //   console.log(cv)
    //   console.log(index)
    // })
    // setsectionName(`${sections[i + 1]}`);
    console.log(i)
    if(i >= 8) {
      incrementIndex(0)
      setsectionName(`${sections[0]}`);
      console.log("if condition")
    }
    else {
      setsectionName(`${sections[i + 1]}`);
      incrementIndex(i + 1)
    }
    // console.log(sectionName)
  }

  const sectionHandlerLeft = () => {
    // sections.filter(function(cv,index) {
    //   console.log(cv)
    //   console.log(index)
    // })
    // setsectionName(`${sections[i - 1]}`);
    // incrementIndex(i - 1)
    if(i <= 0) {
      incrementIndex(8)
      setsectionName(`${sections[8]}`);
      console.log("else condition")
    }
    else {
      setsectionName(`${sections[i - 1]}`);
      incrementIndex(i - 1)
    }
    // console.log(sectionName)
  }
  let colors = <h1>Loading</h1>

  
    if(sectionName == "Tip") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Vamp") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Tongue") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Laces") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Vamp Mid") {
       colors = <div className='tip flex gap-4 justify-center w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
    </div>
    }
    else if (sectionName == "Liner") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Midsole") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
      <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
      <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
    </div>
    }
    else if (sectionName == "Swoosh") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
    </div>
    }
    else if (sectionName == "Heal") {
       colors = <div className='tip flex justify-between w-2/6 p-2 mt-5'>
      <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
      <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
      <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
      <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
      <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
      <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
      <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
      <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
      <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
    </div>
    }
  
  // console.log(colors)

  // const handleChange = (e) => {
  //   setcolorSelection(e)
  // }


  return (
    <div className='main w-full flex-row justify-center'>
      <div className='p-5 flex flex-col w-full items-center justify-center'>  
      <div className='flex justify-between w-full'>
        <RiArrowDownLine />
        <div className='flex'>
          <div className='flex w-96 justify-between'>
            <RiArrowLeftLine onClick={sectionHandlerLeft} />
            {sectionName}
            <RiArrowRightLine onClick={sectionHandlerRight} />
          </div>
        </div>
        <div className='flex rounded-2xl border p-2'>
          {/* <RiMenuLine/>
          <h1>Menu</h1> */}
        </div>
      </div>
      <div className='flex flex-col items-center w-full'>
      {/* <div className='flex justify-between text-lg p-5 text-center'>
        <h1 className='border rounded-full p-2 w-36'>Leather</h1>
        <h1 className='border rounded-full p-2 w-36'>Canvas</h1>
      </div> */}
      {
        colors
      }
      {/* <div className='tip flex justify-between w-2/6 p-2 mt-5'>
        <button onClick={() => setColor({ r: 10, g: 0, b: 0 })} className='colorSel bg-black'></button>
        <button onClick={() => setColor({r:255, g:255, b:255})} className='colorSel bg-white border border-black'></button>
        <button onClick={() => setColor({r:75, g:85, b:99})} className='colorSel bg-gray-600'></button>
        <button onClick={() => setColor({r:253, g:224, b:71})} className='colorSel bg-yellow-300'></button>
        <button onClick={() => setColor({r:34, g:197, b:94})} className='colorSel bg-green-500'></button>
        <button onClick={() => setColor({r:59, g:130, b:246})} className='colorSel bg-blue-500'></button>
        <button onClick={() => setColor({r:2, g:132, b:199})} className='colorSel bg-sky-600'></button>
        <button onClick={() => setColor({r:220, g:38, b:38})} className='colorSel bg-red-600'></button>
        <button onClick={() => setColor({r:249, g:115, b:22})} className='colorSel bg-orange-500'></button>
        <button onClick={() => setColor({r:67, g:20, b:7})} className='colorSel bg-orange-950'></button>
        <button onClick={() => setColor({r:13, g:148, b:136})} className='colorSel bg-teal-600'></button>
        <button onClick={() => setColor({r:67, g:56, b:202})} className='colorSel bg-indigo-700'></button>
      </div> */}
      </div>
      </div>
    </div>
  )
}

export default Bottom