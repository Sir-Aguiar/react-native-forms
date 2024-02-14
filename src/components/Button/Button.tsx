import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & { title: string };

export default function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton {...rest} fontSize={"xl"} fontWeight={"bold"}>
      <Text>{title}</Text>
    </NativeBaseButton>
  );
}
