import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs from "dayjs";
import { useState } from "react";

export default function BasicTimeField() {
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeField
        sx={{
          width: "544px",
          "& .MuiOutlinedInput-root": {
            padding: "12px 10px",
          },

          "& .MuiOutlinedInput-input":{
            padding:0
          }
        }}
        // label="Format without meridiem"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        format="HH:mm"
      />
    </LocalizationProvider>
  );
}
