import React, { useEffect } from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from "../../components/postagem/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/postagem/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
               className="caixa"
            >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="textPrimary"
                            component="h4"
                            align="center"
                            className="titulo"
                        >
                            Seja bem vindo(a)!
                        </Typography>
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="textPrimary"
                            component="h4"
                            align="center"
                            className="titulo"
                        >
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button
                            variant="contained"
                           className="botao"
                        >
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={5} style={{ margin: "10px" }}>
                    <img
                        src="https://img.freepik.com/vetores-premium/espartano-de-desenho-animado-para-academia-de-logotipo_514366-13.jpg"
                        alt=""
                        width="600px"
                        height="610px"
                    />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid >
        </>
    );
}
export default Home;