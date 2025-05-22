
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContexts';
import { useNavigate } from 'react-router-dom';
const Login = () => {;
    const [mostrarSenha, setMostrarSenha] = useState(false);
    //como criar um sistema de cadastro de objetos
    const {register, handleSubmit} = useForm();
    const {setLogado} = useContext(Context);
    const navigate = useNavigate();
    function logar(dados){
        if (dados.email == 'pablo_xx_123@hotmail.com' && dados.senha == '12345'){
            setLogado(true);
            navigate('home')
        };
    }
    return ( 
    <>  
    <div className='bg-primary-500 h-screen flex align-items-center justify-content-center'>
        <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 p-3 border-round-md mx-3'>
            <h3 className='text-center text-4xl'>seja bem-vindo!</h3>
            <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>email</label>
            <InputText
                id = 'email'
                type='email'
                placeholder='email@eemial.com'
                className='mb-3 w-full'
                //sempre colocar o content no imput
                {...register('email', {required: true})}
            />
            <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>senha</label>
            <div className='mb-3'>
                <IconField>
                <InputIcon 
                className={`pi ${mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                onClick={() => setMostrarSenha(!mostrarSenha)}
                />
                <InputText
                    type= {mostrarSenha ?'text': 'password'}
                    id='senha'
                    placeholder='**************'
                    className='w-full'
                    {...register('senha', {required: true})}
                />
            </IconField>
            </div>
            <Button
                type ='submit' 
                label ="entrar"/>

        </form>
    </div>
    </> );
}
 
export default Login;