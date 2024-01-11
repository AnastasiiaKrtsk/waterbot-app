import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { StyledProgressTitle, StyledWaterProgressWrapper } from "./WaterProgress.styled";

const WaterProgress = () => {
  const marks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 50,
      label: "50%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <StyledWaterProgressWrapper>
      <StyledProgressTitle>Today</StyledProgressTitle>
      <Box sx={{ width: 300 }}>
        <Slider
          sx={{
            color: "var(--light-blue-3)",
            "& .MuiSlider-markLabel": {
              color: "var(--dark-blue)",
            },
            "&.Mui-disabled": {
              // Добавляем стили для отключенного состояния
              color: "var(--light-blue-3)",
              "& .MuiSlider-markLabel": {
                color: "var(--dark-blue)",
              },
              "& .MuiSlider-track": {
                height: 8, // Устанавливаем высоту трека
              },
              "& .MuiSlider-rail": {
                height: 8, // Устанавливаем высоту трека (или .MuiSlider-rail если нужно изменить rail)
              },
            },
          }}
          aria-label="Custom marks"
          defaultValue={50}
          getAriaValueText={valuetext}
          marks={marks}
          size="medium"
          readOnly
          disabled
        />
      </Box>
    </StyledWaterProgressWrapper>
  );
};

export default WaterProgress;
