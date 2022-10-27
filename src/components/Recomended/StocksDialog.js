import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import bitcoin from "../../static/logos/bitcoin.png";
import ethereum from "../../static/logos/ethereum.png";
import mercado from "../../static/logos/mercado.png";
import shopify from "../../static/logos/shopify.png";
import intuitive from "../../static/logos/intuitive.svg";
import realty from "../../static/logos/realty.svg";

const StocksDialog = ({ open, onClose, setOpen }) => {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth
      sx={{ padding: "2em" }}
      onClose={onClose}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "GilroyMedium",
            fontSize: "25px",
            color: "#1F1F1F",
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
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ marginTop: "1em" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={shopify} width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Shopify {"(NYSE:SHOP) $36 billion"}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={realty} width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {"Realty Income (NYSE:O) $38 billion"}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={mercado} width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {"MercadoLibre (NASDAQ:MELI) $40 billion"}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={intuitive} width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {"Intuitive Surgical (NASDAQ:ISRG) $67 billion"}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={bitcoin} width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Bitcoin
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={ethereum} width="100%" height="100%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Ethereum
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          size="small"
          variant="text"
          sx={{
            fontFamily: "GilroyMedium",
            color: "#FC6B21",
            margin: "1em 0",
          }}
          onClick={() => window.open("https://www.unifimoney.com/")}
        >
          Manage your wealth
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StocksDialog;
