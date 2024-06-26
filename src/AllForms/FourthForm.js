import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';
import './App.css';
import handleFormValues from './allFormValues';

import FourthPage from './Website/FourthPage';

class Summary extends Component {

  state = {
    hasMockups: '',
    chosenCMS: '',
    error: ''
  };
  continue = e => {
    e.preventDefault();
    const { hasMockups, chosenCMS } = this.state;
    const formData = {
      field3: {hasMockups,chosenCMS},
      // Add more fields as needed
    };
    handleFormValues(formData);
    if (!hasMockups || !chosenCMS) {
      this.setState({ error: 'Please answer all questions.' });
      return;
    }
    // Store the selected data in parent component or wherever required
    // this.props.storeData(hasMockups, chosenCMS);
    this.props.nextStep();
  }

  handleMockupsChange = (e) => {
    this.setState({ hasMockups: e.target.value, error: '' });
  };

  handleCMSChange = (e) => {
    this.setState({ chosenCMS: e.target.value });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { error } = this.state;

    return (
      <Main className='form'>
        <div>
          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={3}
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
          <Mai>
            <Form1>
                <Heading>
                *Do you have UI design mockups?
                </Heading>
                <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="mockups" value="Yes" onChange={this.handleMockupsChange} />
Yes
</Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="mockups" value="Iwill" onChange={this.handleMockupsChange} />
    I will engage third party for UI design
    </Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="mockups" value="need" onChange={this.handleMockupsChange} />
    I will need you to provide UI design
    </Label>
</InputContainer>
                </Form2>

                
            </Form1>
            <Form1>
            <Heading>
            *Have you chosen a CMS?
                </Heading>
            <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="cms" value="No" onChange={this.handleCMSChange} />
No
</Label>
</InputContainer>
<InputContainer>
<Label>
<Input type='radio' name="cms" value="Yes" onChange={this.handleCMSChange} />
                    <Input1 type="text" placeholder="Yes (Please Specify)" onChange={this.handleCMSChange} />
    </Label>
</InputContainer>
{error && <ErrorMessage>{error}</ErrorMessage>}

                </Form2>
            </Form1>
        </Mai>
         

          
        </div>
        <Button className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default Summary;
const ErrorMessage = Styled.div`
  color: red;
  margin-top: 10px;
`;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`

const Mai = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Form1 = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;
height:350px;
width:400px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font-family:Roboto;
margin-bottom:30px;
`
const Form2 = Styled.form`

`
const Input = Styled.input`
margin-right:10px;
`
const InputContainer=Styled.div`
margin-top:10px;
`
const Label = Styled.label`


font-size:16px;
font-family: Roboto;



font-size:17px;
font-family: Inter;

font-size:14px;

font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`
// const Input2 = Styled.input`
// background: #C1CAE7;
// border: 1px solid gray;
// `