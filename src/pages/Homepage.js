import {Menubar} from "../components/nav/Menubar";
import {Outlet} from "react-router";

export function Homepage() {
    return(
        <>
            <Menubar/>
            <Outlet/>

        </>
    )
}