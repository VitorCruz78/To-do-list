import { useState } from 'react'
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { CheckBoxStyle, ContainerIcons, ContainerSelectedInputs, InputTaskStyle, InputTaskStyleThrough, TrashStyle } from "./styles";

export function InputTask({ value, sendConclusedTasks, sendCancelTasks, sendDeleteTasks }: any) {

    const [showConclusedTask, setShowConclusedTask] = useState<boolean>(false)

    function handleConfirmTask() {
        setShowConclusedTask(true)

        sendConclusedTasks((state: string) => [...state, value])
    }

    function handleCancelTask() {
        setShowConclusedTask(false)

        sendCancelTasks((state: string) => [...state, value])
    }

    function handleDeleteTask() {
        sendDeleteTasks(value)
    }

    return (
        <>
            <ContainerSelectedInputs>
                {
                    !showConclusedTask
                        ?
                        <ContainerIcons>
                            <CheckBoxStyle onClick={() => handleConfirmTask()}><Circle size={16} color="#4EA8DE" /></CheckBoxStyle>
                            <TrashStyle onClick={() => handleDeleteTask()}><Trash size={16} color='#FFF' /></TrashStyle>
                        </ContainerIcons>
                        :
                        <ContainerIcons>
                            <CheckBoxStyle onClick={() => handleCancelTask()}><CheckCircle size={16} color="#8284FA" /></CheckBoxStyle>
                            <TrashStyle onClick={() => handleDeleteTask()}><Trash size={16} color='#FFF' /></TrashStyle>
                        </ContainerIcons>
                }
                {
                    !showConclusedTask
                        ?
                        <InputTaskStyle disabled placeholder={value}>
                        </InputTaskStyle>
                        :
                        <InputTaskStyleThrough disabled placeholder={value}>
                        </InputTaskStyleThrough>
                }
            </ContainerSelectedInputs>
        </>
    )
}