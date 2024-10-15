import { useEffect, useState } from "react"

export default function Calculator ({calculateHypotenuse}) {

    const [sideA, setSideA] = useState(0);
    const [sideB, setSideB] = useState(0);
    const [hypotenuse, setHypotenuse] = useState(0);

    useEffect(() => {
        if (sideA > 0 && sideB > 0) {
            setHypotenuse(calculateHypotenuse(sideA, sideB))
        }
    }, [sideA, sideB, calculateHypotenuse])

    return (
        <div>
            <div>
                <label htmlFor="">B Side: </label>
                <input 
                    placeholder="Type B value"
                    value={sideA}
                    onChange={e => setSideA(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">C Side: </label>
                <input 
                    placeholder="Type B value"
                    value={sideB}
                    onChange={e => setSideB(e.target.value)}
                />
            </div>
            <div>
                <p>The hypotenuse value is: <strong>{hypotenuse}</strong></p>

            </div>
        </div>
    )
}