import { useState } from 'react'
import { CheckCircle, Circle } from "phosphor-react";
import { CheckBoxStyle, ContainerSelectedInputs, InputTaskStyle, InputTaskStyleThrough } from "./styles";

export function InputTask({ value, sendConclusedTasks, sendCancelTasks }: any) {

    const [showConclusedTask, setShowConclusedTask] = useState<boolean>(false)

    function handleConfirmTask() {
        setShowConclusedTask(true)

        sendConclusedTasks((state: string) => [...state, value])
    }

    function handleCancelTask() {
        setShowConclusedTask(false)

        sendCancelTasks((state: string) => [...state, value])
    }

    return (
        <>
            <ContainerSelectedInputs>
                {
                    !showConclusedTask
                        ?
                        <CheckBoxStyle onClick={() => handleConfirmTask()}><Circle size={16} color="#4EA8DE" /></CheckBoxStyle>
                        :
                        <CheckBoxStyle onClick={() => handleCancelTask()}><CheckCircle size={16} color="#8284FA" /></CheckBoxStyle>
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