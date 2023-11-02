import { useState } from "react";
import { ButtonCreateTask, FormForInputs, InputStyle } from "./styles";
import { Plus, Scroll } from 'phosphor-react'
import { Container, HeaderTasks, NoTasks } from "../../pages/Home/styles";
import { InputTask } from "../InputsTask";

export function Input() {


    const [arrayTasks, setArrayTasks] = useState<any[]>([])
    const [nameTask, setNameTask] = useState<string>('')

    function handleCreateTask(e: any) {
        e.preventDefault()

        setArrayTasks(prev => [...prev, nameTask])
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
            <Container>
                <HeaderTasks>
                    <p id="tasksCreate">Tarefas criadas <span>0</span></p>
                    <p id="conclused">Concluídas <span>0</span></p>
                </HeaderTasks>

                {
                    arrayTasks.length === 0
                        ?
                        <NoTasks>
                            <Scroll size={60} weight="light" />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </NoTasks>
                        :
                        arrayTasks.map((tasks: any) => {
                            return <div>
                                <InputTask value={tasks} />
                            </div>
                        })
                }
            </Container>
        </>
    )
}