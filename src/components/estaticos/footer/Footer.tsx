import { Grid, Typography, } from "@mui/material";
import { Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css"
import React from "react";

function Footer() {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box
                            paddingTop={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h4"
                                align="center"
                                gutterBottom
                               className="text"
                            >
                                Siga-nos nas redes sociais{" "}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/RenanG7" target="_blank">
                                <GitHubIcon className="redes"/>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/renan-gon%C3%A7alvez-a2416926b/"
                                target="_blank"
                            >
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography
                                variant="subtitle2"
                                align="center"
                                gutterBottom
                               className="box3"
                            >
                                © 2023 Copyright:
                            </Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography
                                    variant="subtitle2"
                                    gutterBottom
                                    style={{ color: "white" }}
                                    align="center"
                                >
                                    brasil.generation.org
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default Footer;