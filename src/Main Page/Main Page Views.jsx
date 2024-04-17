import Cars from "./Cars/Cars";
import GreeningTheFuture from "./Greening the future/Greening the future";
import Moto from "./Moto/Moto";
import Serviced from "./Serviced/Serviced";
import ShowRoomAndCommunity from "./Show Room And Community/Show Room And Community";
import SignUpEmail from "./Sign Up Email/Sign Up Email";
import Slider from "./Slider/Slder";
import ToolsAndStationCharging from "./Tools And  Station Charging/Tools And  Station Charging";






function MainPage() {
    return <>
    <Slider/>
    <Cars/>
    <Moto/>
    <ToolsAndStationCharging/>
    <Serviced/>
    <GreeningTheFuture/>
    <ShowRoomAndCommunity/>
    <SignUpEmail/>
    </>
}

export default MainPage;