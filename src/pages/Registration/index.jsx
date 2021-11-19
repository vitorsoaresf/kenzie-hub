import {
  Container,
  ContainerUl,
  ContainerRadio,
  ContainerModal,
  ContainerForm,
  ContainerTitle,
} from "./styles";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
function Registration() {
  const [registration, setRegistration] = useState(false);

  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    bio: yup.string().required("Biografia obrigatória"),
    contact: yup.string().required("Telefone obrigatório"),
    course_module: yup.string().required("Módulo Obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/^.{6,}$/, "Quantidade Mínima de 6 caractteres"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas diferentes!"),
    // accept: yup.boolean().oneOf([true], "you accept the terms of use?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        setRegistration(true);
      })
      .catch((err) => console.log("Erro no Servidor", err));
  };

  const onClickModal = () => {
    history.push("/");
  };

  return (
    <Container>
      <ContainerTitle>
        <div>
          <h1>Kenzie</h1>
          <h2>Hub</h2>
        </div>
      </ContainerTitle>
      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          icon={FiUser}
          type="text"
          placeholder="Nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          icon={FiMail}
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          icon={FiBook}
          type="text"
          placeholder="Biografia"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          icon={FiPhone}
          type="text"
          placeholder="Telefone"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />
        <Input
          icon={FiPhone}
          type="text"
          placeholder="Modulo"
          register={register}
          name="course_module"
          error={errors.course_module?.message}
        />

        {/* <ContainerRadio>
          <div>
            <input
              {...register("course_module")}
              type="radio"
              id="primeiro"
              name="select"
              value="primeiro"
              error={errors.course_module?.message}
            />
            <label htmlFor="primeiro">Primeiro</label>
          </div>

          <div>
            <input type="radio" id="segundo" name="select" value="segundo" />
            <label htmlFor="segundo">Segundo</label>
          </div>

          <div>
            <input type="radio" id="terceiro" name="select" value="terceiro" />
            <label htmlFor="terceiro">Terceiro</label>
          </div>

          <div>
            <input type="radio" id="quarto" name="select" value="quarto" />
            <label htmlFor="quarto">Quarto</label>
          </div>
        </ContainerRadio> */}
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Confirmar Senha"
          register={register}
          name="confirm_password"
          error={errors.confirm_password?.message}
        />
        <Button color="purple" type="submit">
          Cadastrar
        </Button>
      </ContainerForm>

      {registration && (
        <ContainerModal>
          <div>
            <p>Olaa</p>
            <Button onClick={() => history.push("/")}>Yes</Button>
          </div>
        </ContainerModal>
      )}
    </Container>
  );
}

export default Registration;
