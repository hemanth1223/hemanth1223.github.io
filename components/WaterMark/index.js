import React, { useEffect, useState } from 'react'

const consoleMyName = () => {
  console.log(`
Made with 💗 by B L Hemanth
HHHH      HHHH
HHHH      HHHH
HHHH      HHHH
HHHH      HHHH
HHHHHHHHHHHHHH
HHHHHHHHHHHHHH
HHHH      HHHH
HHHH      HHHH
HHHH      HHHH
HHHH      HHHH
HHHH      HHHH
`)
}

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
