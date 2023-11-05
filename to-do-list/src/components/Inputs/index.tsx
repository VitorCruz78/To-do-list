import { useState, useContext } from "react";
import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";
import { Plus } from 'phosphor-react'
import { ContainerTasks } from "../ContainerTasks";
import { Container, HeaderTasks } from "../../pages/Home/styles";
import { ConclusedTasksContext } from "../InputsTask";

export function Input() {

    const value = useContext(ConclusedTasksContext)
    const [arrayTasks, setArrayTasks] = useState<any[]>([])
    const [nameTask, setNameTask] = useState<string>('')
    console.log(value)

    function handleCreateTask(e: any) {
        e.preventDefault()

        setArrayTasks(prev => [...prev, nameTask])
        setNameTask('')
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
            <Container>
                <HeaderTasks>
                    <p id="tasksCreate">Tarefas criadas <span>{arrayTasks?.length}</span></p>
                    <p id="conclused">Concluídas <span>0</span></p>
                </HeaderTasks>
            </Container>
            <div className="hidden">
                <ContainerTasks data={arrayTasks} />
            </div>
        </>
    )
}