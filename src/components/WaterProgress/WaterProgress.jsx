import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  StyledProgressTitle,
  StyledWaterProgressWrapper,
} from "./WaterProgress.styled";

const WaterProgress = ({ value }) => {
  const marks = [
    {
      value: 0,
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography key="label1" variant="caption">
            |
          </Typography>
          <Typography
            key="label2"
            variant="caption"
            sx={{ color: "var(--dark-blue)" }}
          >
            0%
          </Typography>
        </div>
      ),
    },
    {
      value: 50,
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography key="label1" variant="caption">
            |
          </Typography>
          <Typography
            key="label2"
            variant="caption"
            sx={{ color: "var(--dark-blue)" }}
          >
            50%
          </Typography>
        </div>
      ),
    },
    {
      value: 100,
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography key="label1" variant="caption">
            |
          </Typography>
          <Typography
            key="label2"
            variant="caption"
            sx={{ color: "var(--dark-blue)" }}
          >
            100%
          </Typography>
        </div>
      ),
    },
  ];

  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <StyledWaterProgressWrapper>
      <StyledProgressTitle>Today</StyledProgressTitle>
      <Box sx={{ marginLeft: "11px" }}>
        <Slider
          sx={{
            margin: 0,
            "@media screen and (min-width: 320px)": {
              width: "256px",
              "& .custom-line-break": {
                height: "0px",
              },
            },
            "@media screen and (min-width: 768px)": {
              width: "360px",
              "& .custom-line-break": {
                height: "0px",
              },
            },
            color: "var(--light-blue-3)",
            "& .MuiSlider-markLabel": {
              color: "var(--dark-blue)",
            },
            "&.Mui-disabled": {
              color: "var(--light-blue-3)",
              "& .MuiSlider-markLabel": {
                color: "var(--light-blue-2)",
                top: "19px",
                height: "8px",
              },
              "& .MuiSlider-track": {
                height: 8,
              },
              "& .MuiSlider-rail": {
                height: 8,
              },
              "& .MuiSlider-thumb": {
                color: "var(--white)",
                border: "1px solid var(--dark-blue)",
                width: 14,
                height: 14,
              },
              "& .MuiSlider-mark": {
                display: "none",
              },
            },
          }}
          aria-label="Custom marks"
          value={value ? value : 0}
          getAriaValueText={valuetext}
          marks={marks}
          size="small"
          readOnly
          disabled
        />
      </Box>
    </StyledWaterProgressWrapper>
  );
};

export default WaterProgress;
