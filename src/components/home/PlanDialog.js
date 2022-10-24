import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PlanDialog = ({ open, onClose, setOpen }) => {
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
            Number of kids:
          </Typography>
          <OutlinedInput
            fullWidth
            sx={{
              borderRadius: "100px",
            }}
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
          <OutlinedInput
            fullWidth
            sx={{
              borderRadius: "100px",
            }}
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
            <OutlinedInput
              sx={{
                borderRadius: "100px",
              }}
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
        >
          Get recommended plan
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlanDialog;
