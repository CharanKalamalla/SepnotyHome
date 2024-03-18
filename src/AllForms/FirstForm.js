import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';

import FirstStep from "./Website/FirstPage"







class PersonalDetails extends Component {

  state = {
    softwareTypes: [],
    numberOfPages: '',
    formErrors: {
      softwareTypes: '',
      numberOfPages: ''
    }
  };

  handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    this.setState(prevState => ({
      softwareTypes: checked
        ? [...prevState.softwareTypes, id]
        : prevState.softwareTypes.filter(type => type !== id),
      formErrors: {
        ...prevState.formErrors,
        softwareTypes: ''
      }
    }));
  };

  handleRadioChange = (event) => {
    this.setState({
      numberOfPages: event.target.value,
      formErrors: {
        ...this.state.formErrors,
        numberOfPages: ''
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { softwareTypes, numberOfPages } = this.state;
    if (softwareTypes.length === 0) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          softwareTypes: 'Please select at least one type of software.'
        }
      });
      return;
    }
    if (!numberOfPages) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          numberOfPages: 'Please select the number of pages for your website/App.'
        }
      });
      return;
    }
    // Store the form data or proceed with further actions
    console.log("Form data:", this.state);
    // Proceed to the next step or page
    this.props.nextStep();
  };



  continue = e => {
    e.preventDefault();
    
    // Check for errors
    const { softwareTypes, numberOfPages } = this.state;
    const formErrors = {};

    // Check software types
    if (softwareTypes.length === 0) {
        formErrors.softwareTypes = 'Please select at least one type of software.';
    }

    // Check number of pages
    if (!numberOfPages) {
        formErrors.numberOfPages = 'Please select the number of pages for your website/App.';
    }

    // If there are errors, update the state with the errors
    if (Object.keys(formErrors).length > 0) {
        this.setState({ formErrors });
        return; // Prevent navigation to the next step/page
    }
    
    // If there are no errors, proceed to the next step
    this.props.nextStep();
}

  render() {
    const { softwareTypes, numberOfPages, formErrors } = this.state;
    // const { 
    //   firstname, 
    //   lastname, 
    //   email, 
    //   phone, 
    //   handleChange, 
    //   validateFirstName,
    //   validateLastName,
    //   isErrorFirstName,
    //   isErrorLastName,
    //   errorMessageFirstName,
    //   errorMessageLastName
    // } = this.props;

    return (
      <Main className='form'>
        <form onSubmit={this.handleSubmit}>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

<Main1>
            <FormContainer>
                <Form>
                    <Heading>
                    *Choose the type of Software you need:
                    </Heading>
                    <CheckBoxCon>
                    <Label htmlfor="1st">
                        <Input type="checkbox" id="1st" checked={softwareTypes.includes('1st')} onChange={this.handleCheckboxChange} />

                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="2st">
                        <Input type="checkbox" id="2st" checked={softwareTypes.includes('2st')} onChange={this.handleCheckboxChange} />
                         Portfolio Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="3st">
                        <Input type="checkbox" id="3st" checked={softwareTypes.includes('3st')} onChange={this.handleCheckboxChange} />
                        Digital Media Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="4st">
                        <Input type="checkbox" id="4st" checked={softwareTypes.includes('4st')} onChange={this.handleCheckboxChange} />
                        Educational Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        
                        <Label htmlfor="5st">
                        <Input type="checkbox" id="5st" checked={softwareTypes.includes('5st')} onChange={this.handleCheckboxChange} />
                        Content aggregator(eg: Forum)
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                    <Input type="checkbox" id="6st" checked={softwareTypes.includes('6st')} onChange={this.handleCheckboxChange} />
                        <Input1 type="text" placeholder="others (please specify"/>
                    </CheckBoxCon>

                </Form>
                {formErrors.softwareTypes && <span style={{ color: 'red' }}>{formErrors.softwareTypes}</span>}
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *How many pages will your website/App
 have?
                    </Heading>
                    <InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    I am not sure
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    up to 50
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    50-100
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    100-500
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    500-1,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    1,000-5,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    5,000-10,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare" onChange={this.handleRadioChange}/>
    more than 10,000
    </Label>
</InputContainer>
{formErrors.numberOfPages && <span style={{ color: 'red' }}>{formErrors.numberOfPages}</span>}
                </Form>
            </FormContainer>
        </Main1>
        </form>
        <Button style={{textAlign: 'center'}}>
            <button type='submit' className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default PersonalDetails;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`
const Main1 = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Heading = Styled.h1`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;
`

const FormContainer = Styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:350px;
width:600px;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
border-radius:10px;
`
const CheckBoxCon = Styled.div`
margin-top:15px;
align-items:start;
justify-content:space-between;
`
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Form = Styled.form`
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
height:20px;
margin-left:10px;
`
// const Buttonel = Styled.button`
//   font-size: 20px;
//   background-color: #d9d9d9;
//   border-bottom-right-radius: 10px;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
//   border-bottom-left-radius: 10px;
//   padding: 0px;
//   width:60px;
//   height:30px;
//   margin-left: -10px;
//   border-right: 1px solid #9e9898;
// `;



// const Para1 = Styled.p`

// `
const InputContainer=Styled.div`
margin-top:5px;
`
// const Input1 = Styled.textarea`
// background:transparent;
// border: 1px solid #C1CAE7;
// font-size:15px;
// color: #263238;
// font-weight:500;
// height:15px;
// `
const Input = Styled.input`
margin-right:10px;
margin-top:10px;
`