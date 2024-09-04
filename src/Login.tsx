import { Box, Image, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/logo.png';
import { Titulo } from './components/Titulo';
import { Campo } from './components/Campo';
import { Botao } from './components/Botao';

export default function Login() {
    return (
        <VStack flex={1} alignItems={'center'} justifyContent={'center'} padding={5} bgColor={'white'}>
            <Image source={Logo} alt='Logo Voll'></Image>

            <Titulo>Faça login em sua conta</Titulo>

            <Box>
                <Campo
                    label="E-mail"
                    placeholder="Insira seu endereço de e-mail"
                />
                <Campo
                    label="Senha"
                    placeholder="Insira sua senha"
                    secureTextEntry={true}
                />
            </Box>

            <Botao>Entrar</Botao>

            <Link href='#' marginTop={5}>Esqueceu sua senha?</Link>

            <Box
                width={'100%'}
                flexDirection={'row'}
                justifyContent={'center'}
                marginTop={8}
            >
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color={'blue.500'}>Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack >
    );
}
