import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Landing } from "./components/landing/Landing"



function GolApp(){
    return(
        <Suspense>
            <Routes>
                <Route path="/" element={<Landing/>} />
            </Routes>
        </Suspense>
    )

}

export default GolApp