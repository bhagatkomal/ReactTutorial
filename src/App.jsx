import { EventProps } from './components/EventProps.jsx'
import NetflixSeries from './components/NetflixSeries.jsx'
import { Practices } from './components/Practices.jsx'
import Profile from './components/Profile'
// import "./components/EV.css";
import { EventHandling } from './components/EventHAndling.jsx';
import { EventPropagation } from './components/EventPropagation.jsx';
import { State } from './components/hooks/State.jsx';
import { DerivedState } from './components/hooks/DerivedState.jsx';
import { UseStatePractice } from './components/hooks/UseStatePractice.jsx';
import { LiftingState } from './components/hooks/LiftStateUp.jsx';
import { ToggleSwitch } from './components/projects/ToggleSwitch/ToggleSwtich.jsx';
import { Todo } from './components/projects/Todo/Todo.jsx';
import { ShortCircuit } from './components/hooks/ShortCircuit.jsx';
import { Counter } from './components/hooks/useState/index.jsx';
import { Challenge } from './components/hooks/useState/Challenge.jsx';
import { One } from './components/one.jsx';
import { RegistrationForm } from './components/hooks/useState/Registration.jsx';
import { RegistrationFormReact } from './components/hooks/useState/RegistrationReact.jsx';
import { LoginForm } from './components/hooks/useState/LoginForm.jsx';
import { ContactForm } from './components/hooks/useState/ContactForm.jsx';
import { ReactUseEffect } from './components/hooks/useEffect/index.jsx';
import { EffectChallenge } from './components/hooks/useEffect/EffectChallenge.jsx';
import { CleanUp } from './components/hooks/useEffect/CleanUp.jsx';
import { HowNotToFetchApi } from './components/hooks/useEffect/HowNotToFetchApi.jsx';
import { Calculator } from "./components/projects/Calculator/Calculator.jsx";

export const App = () => {
  return <>
    {/* <section className='container'>
      <h1 className='card-heading'>List of best Netflix Series</h1>
      <NetflixSeries />
    </section> */}
    
    {/* <Profile /> */}
    {/* <Practices />
    <EventHandling /> */}
    {/* <EventProps /> */}
    {/* <EventPropagation /> */}
    {/* <State /> */}
    {/* <UseStatePractice /> */}
    {/* <DerivedState /> */}
    {/* <LiftingState/> */}
    {/* <ToggleSwitch /> */}
    {/* <Todo/> */}
    {/* <ShortCircuit /> */}
    {/* <Counter /> */}
    {/* <Challenge /> */}
    {/* <One /> */}
    {/* <RegistrationForm /> */}
    {/* <RegistrationFormReact /> */}
    {/* <LoginForm/> */}
    {/* <ContactForm /> */}
    {/* <ReactUseEffect /> */}
    {/* <EffectChallenge /> */}
    {/* <CleanUp /> */}
    {/* <HowNotToFetchApi /> */}
    <Calculator />

  </>
}