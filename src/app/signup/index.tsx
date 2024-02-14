import Button from "@/src/components/Button/Button";
import Input from "@/src/components/Input/Input";
import { Center, HStack, Heading, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";

interface SingUpData {
  name: string;
  email: string;
  password: string;
  againPassword: string;
}

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpData>();

  const singUp = (data: SingUpData) => {
    console.log("Cadastrado com sucesso!");
    console.log(data);
  };

  return (
    <VStack flex={1} bgColor={"gray.100"} pt={8} px={2} space={4}>
      <Center>
        <Heading my={8}>Crie sua conta</Heading>
      </Center>
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Informe o nome",
        }}
        render={({ field: { onChange } }) => (
          <Input placeholder="Nome de usuário" onChangeText={onChange} errorMessage={errors.name?.message} />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Informe o email",
        }}
        render={({ field: { onChange } }) => (
          <Input placeholder="Email" onChangeText={onChange} errorMessage={errors.email?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Informe a senha",
        }}
        render={({ field: { onChange } }) => (
          <Input placeholder="Senha" secureTextEntry onChangeText={onChange} errorMessage={errors.password?.message} />
        )}
      />
      <Controller
        control={control}
        name="againPassword"
        rules={{
          required: "Confirme a senha",
        }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Confirme a senha"
            secureTextEntry
            onChangeText={onChange}
            errorMessage={errors.againPassword?.message}
          />
        )}
      />

      <Button title="Cadastrar" bg={"green.600"} color={"white"} onPress={handleSubmit(singUp)} />
    </VStack>
  );
}
