import { Box, Button, FormControl, Image, Input, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/logo.png';
import { Titulo } from './components/Titulo';

export default function Login() {
    return (
        <VStack flex={1} alignItems={'center'} justifyContent={'center'} padding={5} bgColor={'white'}>
            <Image source={Logo} alt='Logo Voll'></Image>

            <Titulo>
                Faça login em sua conta
            </Titulo>
            <Box>
                <FormControl marginTop={3}>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        placeholder='Insira seu endereço de e-mail'
                        size={'lg'}
                        width={'100%'}
                        borderRadius={'lg'}
                        bgColor={'gray.100'}
                        shadow={3}
                    />
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        placeholder='Insira sua senha'
                        size={'lg'}
                        width={'100%'}
                        borderRadius={'lg'}
                        bgColor={'gray.100'}
                        shadow={3}
                    />
                </FormControl>
            </Box>
            <Button
                width={'100%'}
                bg={'blue.800'}
                marginTop={10}
                borderRadius={'lg'}

            >
                Entrar
            </Button>

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
        </VStack>
    );
}
