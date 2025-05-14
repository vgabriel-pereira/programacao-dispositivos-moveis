import { ScrollView, View } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CriarConta() {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é Obrigatorio"),
    email: Yup.string()
      .required("E-mail é obrigatorio")
      .email("E-mail Invalido"),
    senha: Yup.string()
      .required("Senha é Obrigatoria")
      .min(8, "deve ter 8 caracteres"),
    confirmaSenha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "Senhas Distintas")
      .required("Confrime a Senha"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="nome"
        rules={{ required: "Nome é obrigatório" }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            label="Nome"
            autoCapitalize="words"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.nome}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome?.message}
      </HelperText>
      <Controller
        control={control}
        name="email"
        rules={{ required: "E-mail é obrigatorio" }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        rules={{ required: "Senha é obrigatorio" }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            secureTextEntry
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>
      <Controller
        control={control}
        name="confirmaSenha"
        rules={{ required: "Confirma senha é obrigatorio" }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Confirma senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChange={onChange}
            error={errors.confirmaSenha}
          />
        )}
      />
      <HelperText type="error" visible={errors.confirmaSenha}>
        {errors.confirmaSenha?.message}
      </HelperText>
      <Button mode="contained" onPress={handleSubmit(() => alert("ok"))}>
        Criar
      </Button>
    </View>
    </ScrollView>



  );
}

export default CriarConta;
