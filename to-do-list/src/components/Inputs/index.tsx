import { useState } from "react";
import { Plus } from 'phosphor-react'
import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";

interface ChildComponentProps {
    sendDataToParent: (data: any) => void;
}

export function Input({ sendDataToParent }: ChildComponentProps) {

    const [nameTask, setNameTask] = useState<string>('')

    function handleCreateTask(e: any) {
        e.preventDefault()
        setNameTask('')

        sendDataToParent((state: string) => [...state, nameTask])
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
                    disabled={!nameTask}
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