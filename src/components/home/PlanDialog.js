import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { recomendedPlan } from "../validation/recomendedPlanValidator";
import { useState } from "react";

const PlanDialog = ({ open, onClose, setOpen, dataMap }) => {
  const navigate = useNavigate();

  const [numberOfKids, setNumberOfKids] = useState("2");
  const [age, setAge] = useState("30");
  const [monthlyEmis, setMonthlyEmis] = useState("300");
  const [retireAge, setRetireAge] = useState("50");
  const [errors, setErrors] = useState(null);

  const onSubmit = () => {
    const { isValid, validationErrors } = recomendedPlan({
      numberOfKids,
      age,
      monthlyEmis,
      retireAge,
    });
    if (isValid) {
      setErrors(null);
      navigate("/recomended", {
        state: { numberOfKids, age, monthlyEmis, retireAge, dataMap },
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      sx={{ padding: "2em" }}
      onClose={onClose}
    >
      <DialogTitle sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }} />
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "20px",
            color: "#1F1F1F",
          }}
        >
          Fill the form to get
        </Typography>
        <Typography
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "25px",
            color: "#FC5339",
          }}
        >
          Recommended plan
        </Typography>
        <Box sx={{ margin: "1em 0" }}>
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              color: "#1F1F1F",
            }}
          >
            Your age:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: "100px",
              },
            }}
            error={errors && (errors.age ? true : false)}
            helperText={errors && errors.age}
            placeholder="Example: 20"
            size="small"
          />
        </Box>
        <Box sx={{ margin: "1em 0" }}>
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              color: "#1F1F1F",
            }}
          >
            Number of kids:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={numberOfKids}
            onChange={(e) => setNumberOfKids(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: "100px",
              },
            }}
            error={errors && (errors.numberOfKids ? true : false)}
            helperText={errors && errors.numberOfKids}
            placeholder="Example: 4"
            size="small"
          />
        </Box>
        <Box sx={{ margin: "1em 0" }}>
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              color: "#1F1F1F",
            }}
          >
            {"Monthly emis ($):"}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={monthlyEmis}
            onChange={(e) => setMonthlyEmis(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: "100px",
              },
            }}
            error={errors && (errors.monthlyEmis ? true : false)}
            helperText={errors && errors.monthlyEmis}
            placeholder="Example: 3000"
            size="small"
          />
        </Box>
        <Box sx={{ margin: "1em 0" }}>
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              color: "#1F1F1F",
            }}
          >
            {"Plan to retire at:"}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "100px",
                },
              }}
              error={errors && (errors.retireAge ? true : false)}
              helperText={errors && errors.retireAge}
              variant="outlined"
              value={retireAge}
              onChange={(e) => setRetireAge(e.target.value)}
              placeholder="Example: 60 y.o."
              size="small"
            />
            <Typography component="h3" sx={{ margin: "0 0 0 1em" }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontFamily: "GilroyRegular",
                  fontSize: "15px",
                }}
                component="span"
              >
                *
              </Typography>
              <Typography
                sx={{
                  color: "#B9B9B9",
                  fontFamily: "GilroyRegular",
                  fontSize: "15px",
                }}
                component="span"
              >
                By clicking the button below, you automatically agree to the{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontFamily: "GilroyRegular",
                  fontSize: "15px",
                }}
                component="span"
              >
                privacy policy.
              </Typography>
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          endIcon={<ArrowForwardIcon />}
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "20px",
            color: "#FC6B21",
            margin: "1em 0",
          }}
          onClick={onSubmit}
        >
          Get recommended plan
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlanDialog;
