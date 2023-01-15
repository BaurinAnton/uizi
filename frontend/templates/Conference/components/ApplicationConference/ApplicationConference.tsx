import { H2, H3 } from "@components";
import { Wrapper } from "@layout";
import { ChangeEvent, FormEvent } from "react";
import style from "./ApplicationConference.module.scss";
import { useSubmitForm } from "./hooks/useSubmitForm";
import { TDataForms } from "@types";
import { INPUTS } from "./constants";

export const ApplicationConference = () => {
  const { inputs, handlerSetInputs, handlerSubmit } = useSubmitForm();

  const changeInputHandler =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      handlerSetInputs({
        ...inputs,
        [`${name}`]: e.target.value,
      } as TDataForms);
    };

  const isAllFieldsAreFilled = () => {
    if (
      inputs?.academicDegree &&
      inputs?.contactPhone &&
      inputs?.directionConference &&
      inputs?.email &&
      inputs?.fio &&
      inputs?.formParticipation &&
      inputs?.fullNameOrganization &&
      inputs?.legalAddress &&
      inputs?.titleArticle &&
      inputs?.topicScientificReport
    )
      return true;
    return false;
  };

  return (
    <section className={style.applicationConference}>
      <Wrapper>
        <H2 className={style.h2}>Запись на участие в конференции</H2>
        <H3 className={style.h3}>
          Введите свои данные и получите на почту письмо с подтверждением
          регистрации
        </H3>
        <form className={style.form} onSubmit={handlerSubmit}>
          {INPUTS.map((input) => (
            <div key={`${input.name}_${input.label}`} className={style.input}>
              <label>{input.label}</label>
              <input
                name={input.name}
                type="text"
                placeholder={input.placeholder}
                onChange={changeInputHandler(input.name)}
                required
              />
            </div>
          ))}
          <div
            className={`${style.input} ${style.submit} ${
              !isAllFieldsAreFilled() ? style.inputDisabled : ""
            }`}
          >
            <input
              type="submit"
              value="Зарегистрироваться"
              disabled={!isAllFieldsAreFilled()}
            />
          </div>
        </form>
      </Wrapper>
    </section>
  );
};
