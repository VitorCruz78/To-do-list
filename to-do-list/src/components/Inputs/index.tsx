import { useState } from "react";
import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";
import { Plus } from 'phosphor-react'

export function Input() {

    let arrayTasks: any[] = []
    const [nameTask, setNameTask] = useState<string>('')

    function handleCreateTask(e: any) {
        e.preventDefault()

        console.log(nameTask)
    }

    return (
        <>
            <FormForInputs onSubmit={handleCreateTask}>
                <label htmlFor="default"></label>
                <InputStyle
                    id="default"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNameTask(e.target.value)}
                    value={nameTask}
                />

                <ButtonCreateTask
                    type="submit"
                    onClick={(e) => handleCreateTask(e)}
                >
                    Criar
                    <span><Plus fontSize={12} color="#FFF" /></span>
                </ButtonCreateTask>
            </FormForInputs>
        </>
    )
}