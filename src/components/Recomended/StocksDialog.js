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
import axios from "axios";
import { useEffect, useState } from "react";

const StocksDialog = ({ open, onClose, setOpen }) => {
  const [shopifyPrice, setShopifyPrice] = useState(0);
  const [mercadoPrice, setMercadoPrice] = useState(0);
  const [intuitivePrice, setIntuitivePrice] = useState(0);
  const [realtyPrice, setRealtyPrice] = useState(0);
  const [ethereumPrice, setEthereumPrice] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  useEffect(() => {
    getPrices();
  }, []);
  const getPrices = async () => {
    let price = await getStockValue("SHOP");
    setShopifyPrice(price.data.data.currentPrice);
    price = await getStockValue("MELI");
    setMercadoPrice(price.data.data.currentPrice);
    price = await getStockValue("ISRG");
    setIntuitivePrice(price.data.data.currentPrice);
    price = await getStockValue("O");
    setRealtyPrice(price.data.data.currentPrice);
    price = await getStockValue("BTC-USD");
    setBitcoinPrice(price.data.data.dayHigh);
    price = await getStockValue("ETH-USD");
    setEthereumPrice(price.data.data.dayHigh);
  };
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
              <img src={shopify} alt="Shopify logo" width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Shopify {`(NYSE:SHOP) $${shopifyPrice}`}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img
                src={realty}
                alt="Realty Income logo"
                width="100%"
                height="90%"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {`Realty Income (NYSE:O) $${realtyPrice}`}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img
                src={mercado}
                alt="Mercado Libre logo"
                width="100%"
                height="90%"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {`Mercado Libre (NASDAQ:MELI) $${mercadoPrice}`}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img
                src={intuitive}
                alt="Intuitive Surgical logo"
                width="100%"
                height="90%"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              {`Intuitive Surgical (NASDAQ:ISRG) $${intuitivePrice}`}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img src={bitcoin} alt="Bitcoin logo" width="100%" height="90%" />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Bitcoin {`$${bitcoinPrice}`}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex" }}>
            <Box sx={{ height: "100%", width: "3em", margin: "0 1em 0 0" }}>
              <img
                src={ethereum}
                alt="Ethereum logo"
                width="100%"
                height="100%"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "GilroyMedium",
                fontSize: "15px",
                margin: "1em 0",
              }}
            >
              Ethereum {`$${ethereumPrice}`}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            fontFamily: "GilroyMedium",
            backgroundColor: "#FC6B21",
            color: "#ffffff",
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

const getStockValue = async (symbol) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("symbol", symbol);

  const options = {
    method: "POST",
    url: "https://yahoo-finance97.p.rapidapi.com/stock-info",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "bc5bc5dc21mshba7ee209fe5f11ap1c05adjsn5acbb571a190",
      "X-RapidAPI-Host": "yahoo-finance97.p.rapidapi.com",
    },
    data: encodedParams,
  };
  const response = await axios.request(options);
  return response;
};

export default StocksDialog;
