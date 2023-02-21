

const BoxColor = ({r, g, b}) => {
    
    let rColor = String(Math.round(Math.random()*r))
    let gColor = String(Math.round(Math.random()*g))
    let bColor = String(Math.round(Math.random()*b))

    return (
        <div id="box" style={{backgroundColor: `rgb(${rColor},${gColor},${bColor})`}}>
            <p>rgb: {rColor}, {gColor}, {bColor}</p>
        </div>
    )
    
}

export default BoxColor