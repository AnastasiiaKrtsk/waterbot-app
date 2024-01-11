// import AddWater from "../Buttons/AddWater/AddWater"
import Month from "../Month/Month"
import Today from "../Today/Today"
import { StyledWaterInfoWrapper } from "./Dashboard.styled"

const Dashboard = () => {
  return (
    <StyledWaterInfoWrapper>
    {/* <AddWater /> */}
      <Today/>
      <Month/>
    </StyledWaterInfoWrapper>
  )
}

export default Dashboard
