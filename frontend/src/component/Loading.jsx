import {Context} from "../hoc/ContextProvider"
import { useContext } from "react";




export default function Loading(){
    const {loading}=useContext(Context)



    return (
        <div className={`w-full h-full absolute top-0 left-0 items-center justify-center bg-white/50 backdrop-blur-sm ${loading==true?"flex":"hidden"}`}>
            <img src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-11.jpg" className="w-40" alt="" />
        </div>
    )
}