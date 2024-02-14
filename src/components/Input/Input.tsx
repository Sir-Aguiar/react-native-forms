import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type Props = IInputProps & { errorMessage?: string };

export default function Input({ errorMessage, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        {...rest}
        fontSize={"md"}
        h={16}
        _focus={{
          bg: "transparent",
          borderColor: "green.500",
        }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
