import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [usuario, setUsuario] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [usuarioResult, setUsuarioResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (usuarioResult.id != 0) {
            navigate("/login")
        }
    }, [usuarioResult])


    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }


    function updateModel(event: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if (confirmarSenha == usuario.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.');
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={5} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto2">Cadastrar</Typography>
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="Nome" label="Nome" variant="outlined" name="Nome" margin="normal" fullWidth />
                        <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="Usuario" label="Usuario" variant="outlined" name="Usuario" margin="normal" fullWidth />
                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="Confirmar Senha" label="Confirmar Senha" variant="outlined" name="Confirmar Senha" margin="normal" type="password" fullWidth />

                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" >
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );

}
export default CadastroUsuario;