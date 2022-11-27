import React from 'react'
import DetailShow from './DetailShow'
function NameList() {
    const names = ['jashanth', 'suhail', 'adarsh', 'shikhar']
    const knownList = [{name: 'jash', class: '10th'}, {name: 'viaks', class: '10th'}, {name: 'reamesh', class: '10th'}]
    const ab = names.map((item, index) => <h1 key={index}>{item}</h1>)
    const knownListShow = knownList.map((item, index, abc) =>   
        <DetailShow key={index} person={item}></DetailShow>) 
  return ( 
    <div>{
        knownListShow
        }
        {
            ab
        }
    </div> 
  )
}

export default NameList
