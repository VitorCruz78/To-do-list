import { useState } from "react";
import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";
import { Plus } from 'phosphor-react'

export function Input() {

    let arrayTasks: string[] = []
    const [nameTask, setNameTask] = useState<string>('')

    function handleCreateNewTask(e: any) {
        e.preventDefault()

        arrayTasks.push(nameTask)
    }


    return (
        <>
            <FormForInputs>
                <label htmlFor="default"></label>
                <InputStyle
                    id="default"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNameTask(e.target.value)}
                    value={nameTask}
                />

                <ButtonCreateTask
                    type="submit"
                    onClick={(e) => handleCreateNewTask(e)}
                >
                    Criar
                    <span><Plus fontSize={12} color="#FFF" /></span>
                </ButtonCreateTask>
            </FormForInputs>
        </>
    )
}