import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const Login = () => {
    const [login, setLogin] = useState('');
    const [senha,setSenha] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            <Button size="small" variant="contained" onClick={handleOpen}>Logar</Button>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    align="center"
                    
                >
                    <Card sx={style}>
                        <h2>Login realizado com sucesso</h2>
                    </Card>
                </Modal>  
            </div>
        </Grid>

    );
}

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  bgcolor: 'green',
  p: 4,
};

export default Login;