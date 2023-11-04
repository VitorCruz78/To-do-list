import { CheckBoxStyle, ContainerSelectedInputs, InputTaskStyle } from "./styles";

export function InputTask({ value }: any) {
    return (
        <ContainerSelectedInputs>
            <CheckBoxStyle type="checkbox"></CheckBoxStyle>
            <InputTaskStyle disabled placeholder={value}>
            </InputTaskStyle>
        </ContainerSelectedInputs>
    )
}