import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function TimePickerViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "MobileTimePicker",
          "MobileTimePicker",
          "MobileTimePicker",
        ]}
      >
        <DemoItem>
          <TimePicker
            sx={{
              "& .MuiSvgIcon-root": { fill: "var(--dark-blue)" },
              "& .MuiInputBase-root": { border: "1px solid var(--light-blue-2)", borderRadius: "6px", color:"var(--dark-blue)" },
            }}
            views={["hours", "minutes"]}
            format="hh:mm"
            timeSteps={{ minutes: 1 }}
            ampm={false}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
