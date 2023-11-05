import { useState, createContext } from 'react'
import { CheckCircle, Circle } from "phosphor-react";
import { CheckBoxStyle, ContainerSelectedInputs, InputTaskStyle, InputTaskStyleThrough } from "./styles";

export const ConclusedTasksContext = createContext({})

export function InputTask({ value }: any) {

    const [showConclusedTask, setShowConclusedTask] = useState<boolean>(false)

    return (
        <ConclusedTasksContext.Provider value={showConclusedTask}>
            <ContainerSelectedInputs>
                {
                    !showConclusedTask
                        ?
                        <CheckBoxStyle onClick={() => setShowConclusedTask(true)}><Circle size={16} color="#4EA8DE" /></CheckBoxStyle>
                        :
                        <CheckBoxStyle onClick={() => setShowConclusedTask(false)}><CheckCircle size={16} color="#8284FA" /></CheckBoxStyle>
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
        </ConclusedTasksContext.Provider>
    )
}