import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Typography } from "@mui/material";

const StocksDialog = ({ open, onClose, setOpen }) => {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
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
            fontSize: "25px",
            color: "#1F1F1F",
            margin: "0 0 2em 0",
          }}
        >
          Top stocks, cryptocurrency in{" "}
          <Typography
            component="span"
            sx={{
              color: "#FC5339",
              fontFamily: "GilroyMedium",
              fontSize: "25px",
            }}
          >
            NYSE
          </Typography>
        </Typography>
        <Box sx={{ marginTop: "1em" }}>
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of stock #1
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of stock #2
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of stock #3
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of stock #4
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of cryptocurrency #1
          </Typography>
          <Divider />
          <Typography
            sx={{
              fontFamily: "GilroyMedium",
              fontSize: "15px",
              margin: "1em 0",
            }}
          >
            Name of cryptocurrency #2
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StocksDialog;
