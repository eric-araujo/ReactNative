import { FormControl, IInputProps, Input } from "native-base";

interface CampoProps extends IInputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

export function Campo({ label, placeholder, secureTextEntry }: CampoProps) {
    return (
        <FormControl marginTop={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size={'lg'}
                width={'100%'}
                borderRadius={'lg'}
                bgColor={'gray.100'}
                shadow={3}
                secureTextEntry={secureTextEntry}
            />
        </FormControl>
    );
}