import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";
import { Plus } from 'phosphor-react'

export function Input() {
    return (
        <FormForInputs>
            <label htmlFor="default"></label>
            <InputStyle
                id="default"
                placeholder="Adicione uma nova tarefa"
            />

            <ButtonCreateTask
                type="submit">Criar
                <span><Plus fontSize={12} color="#FFF" /></span>
            </ButtonCreateTask>
        </FormForInputs>
    )
}