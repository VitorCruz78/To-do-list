import { Scroll } from "phosphor-react"
import { Container, NoTasks } from "../../pages/Home/styles"
import { InputTask } from "../InputsTask"
import { ContainerWithTasks } from "./styles"

export function ContainerTasks({ data }: any) {

    return (
        <div>
            {
                <Container>
                    {
                        data?.length === 0
                            ?
                            <NoTasks>
                                <Scroll size={60} weight="light" />
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </NoTasks>
                            :
                            data?.map((tasks: any) => {
                                return <ContainerWithTasks>
                                    <InputTask value={tasks} />
                                </ContainerWithTasks>
                            })
                    }
                </Container>
            }
        </div>
    )
}