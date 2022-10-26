import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { closeAccountModal } from '../features/Modal/modalSlice';
import { accountTypes } from '../constants';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { addNewAccount } from '../features/AddAccount/addAccountSlice';

const Wrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    /* height: 300px; */
    /* width: px; */
    background-color: #fff;
    padding: 20px 15px;
    border-radius: 10px;
`;

const FormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    font-size: 16px;
`;

const Icon = styled.span`
    cursor: pointer;
`;

const Form = styled.form`
    padding: 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;

    & :first-child {
        margin-right: 10px;
    }
`;

const Label = styled.label`
    font-size: 15px;
`;

const Input = styled.input`
    padding: 0.5em;
    border-radius: 5px;
    outline: none;
    border: 2px solid #333;
`;

const Select = styled.select`
    padding: 0.5em;
    border-radius: 5px;
    outline: none;
    border: 2px solid #333;
`;

const Option = styled.option``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 700;
    background-color: #3c415c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.6s ease;

    &:hover {
        background-color: #647E68;
        color: #3c415c;
    }
`;

const AccountModal = () => {

    const [ myAccount, setMyAccount ] = useState({
        id: "",
        accountName: "",
        accountType: "",
        initialAmount: 0,
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        // checking for the the name of the target
        const name = e.target.name;
        const value = e.target.value;
        setMyAccount({...myAccount, [name]:value});
    };

    const addAccount = (e) => {

        if (myAccount.accountName && myAccount.accountType && myAccount.initialAmount) {
            const newAccount = { ...myAccount, id: uuidv4() };
            console.log(newAccount);
            dispatch(addNewAccount(newAccount));
            dispatch(closeAccountModal());
        } else {
            alert("All Fields are required");
        }

        setMyAccount({
            id: "",
            accountName: "",
            accountType: "",
            initialAmount: 0,
        })

        e.preventDefault();
    }

  return (
    <Wrapper>
    <FormWrapper>
        <FormHeader>
            <Title>Add Account Details</Title>
            <Icon>
                <FaTimes onClick={() => dispatch(closeAccountModal())}/>
            </Icon>
        </FormHeader>
        <Form onSubmit={addAccount}>
            <FormGroup>
                <Label>Account Name</Label>
                <Input
                    placeholder='Kandy Hamisi Said'
                    value={myAccount.accountName}
                    type="text"
                    name="accountName"
                    id="accountName"
                    onChange={handleChange}
                />
            </FormGroup>
            
            <FormGroup>
                <Label>Select Account Type</Label>
                <Select
                    value={myAccount.accountType}
                    type="text"
                    name="accountType"
                    id="accountType"
                    onChange={handleChange}
                >
                    {
                        accountTypes.map((option) => (
                            <Option key={option.id} value={option.value}>{option.type}</Option>
                        ))
                    }
                </Select>
            </FormGroup>
            <FormGroup>
                <Label>Initial Value</Label>
                <Input
                    placeholder='30000'
                    value={myAccount.initialAmount}
                    type="number"
                    name="initialAmount"
                    id="initialAmount"
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Button>Add Account</Button>
            </FormGroup>
        </Form>
    </FormWrapper>
    </Wrapper>
  )
}

export default AccountModal