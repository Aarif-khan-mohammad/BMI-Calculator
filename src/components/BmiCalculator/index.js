import React from 'react'
import { MainContainer , Heading , BmiSheet ,BmiContainer , BmiContainerSub,
HeightContainer , TotalBmis,MiniHeading,
 MeasureHeadingSub , Buttons , MetersHeading , ButtonsContainer
} from './styledComponents'
import { useState , useEffect } from 'react'
const getBmi = (height , weight)=>{
    const heightInMeters = height/100
    const bmi = weight/(heightInMeters*heightInMeters)

    return bmi.toFixed(2)
}

const BmiCalculator = () => {
    const storedHeight = JSON.parse(localStorage.getItem("height"))
    const storedWeight = JSON.parse(localStorage.getItem("weight"))
    const [height , setHeight] = useState(storedHeight !== null ? storedHeight:170 )
    const [weight , setWeight] = useState(storedWeight !== null ? storedWeight:60 )

    useEffect(()=>{
        document.title = `Your BMI: ${getBmi(height,weight)}`
        localStorage.setItem("height" , JSON.stringify(height))
        localStorage.setItem("weight" , JSON.stringify(weight))
    },[height,weight]) // useEffect(effect , [ var1 , var,2]) => dependency array, which helps for rendering only wanted hooks to load and , increase performance
//Note : calling empty useEffect()=> The Effect executes only once after first render
    const onIncrementWeight = () => {
        setWeight(prevWeight => prevWeight+1)
    }

    const onDecrementWeight = () => {
        setWeight(prevWeight => prevWeight-1)
    }

    const onIncrementHeight = () => {
        setHeight(prevHeight => prevHeight+1)
    }

    const onDecrementHeight = () => {
        setHeight(prevHeight => prevHeight-1)
    }

  return (
    <MainContainer>
      <Heading>BMI Calculator</Heading>
      <BmiSheet src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png" alt="bmi-levels" />
      <BmiContainer>
        <BmiContainerSub>
            <HeightContainer>
                <MiniHeading>Height</MiniHeading>
                <MetersHeading >{height} <MeasureHeadingSub>cms</MeasureHeadingSub> </MetersHeading>
                <ButtonsContainer>
                    <Buttons onClick={onIncrementHeight} >+</Buttons>
                    <Buttons onClick={onDecrementHeight} >-</Buttons>
                </ButtonsContainer>
            </HeightContainer>
            <HeightContainer>
            <MiniHeading>Weight</MiniHeading>
                <MetersHeading>{weight} <MeasureHeadingSub>kgs</MeasureHeadingSub> </MetersHeading>
                <ButtonsContainer>
                    <Buttons onClick={onIncrementWeight} >+</Buttons>
                    <Buttons onClick={onDecrementWeight} >-</Buttons>
                </ButtonsContainer>
            </HeightContainer>
        </BmiContainerSub>
        
        <TotalBmis>{`BMI : ${getBmi(height,weight)}`}</TotalBmis>
      </BmiContainer>
    </MainContainer>
  )
}

export default BmiCalculator
