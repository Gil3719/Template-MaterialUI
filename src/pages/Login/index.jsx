import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
    const [login, setLogin, senha, setSenha] = useState('');
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <FormControl>
                    <Input id="login_nome" aria-describedby="login_nome_helper_text"  value={login} onChange={e => { setLogin(e.target.value) }} 
                        sx={{fontSize: 25}}
                    />
                    <FormHelperText id="login_nome_helper_text" sx={{fontSize: 25}} >Login</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <Input id="senha" aria-describedby="senha_helper_text"  value={senha} onChange={e => { setSenha(e.target.value) }} 
                        sx={{fontSize: 25}}
                    />
                    <FormHelperText id="senha_helper_text" sx={{fontSize: 25}} >Senha</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
       
    );
}

export default Login;