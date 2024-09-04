import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({ children, autoSize, color }: BotaoProps) {
    return (
        <Button
            width={autoSize ? 'auto' : '100%'}
            bg={color || 'blue.800'}
            marginTop={10}
            borderRadius={'lg'}
            _text={{ color: 'white' }}
        >
            {children}
        </Button>
    );
}