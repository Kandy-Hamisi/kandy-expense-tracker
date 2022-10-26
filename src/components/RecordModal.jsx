import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { closeRecordModal } from '../features/Modal/recordModalSlice';
import { categories } from '../constants';
import { addNewRecord } from '../features/Records/addRecordSlice';

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
    /* width: 100%; */
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

const RecordModal = () => {

    const myDate = new Date();
    const currTime = myDate.getHours() + ' : ' + myDate.getMinutes();

    const [ myRecord, setMyRecord ] = useState({
        recordID: "",
        accountID: "",
        transactionType: "",
        categoryType: "",
        amount: 0,
        date: myDate.toDateString(),
        time: currTime
    });

    const dispatch = useDispatch();
    const myAccounts = useSelector(state => state.addAccount.allAccounts);

    const handleChange = (e) => {
        // checking for the the name of the target
        const name = e.target.name;
        const value = e.target.value;
        setMyRecord({...myRecord, [name]:value});
    };

    const addRecord = (e) => {

        if (myRecord.accountID && myRecord.transactionType && myRecord.categoryType && myRecord.amount) {
            const newRecord = { ...myRecord, recordID: uuidv4() };
            dispatch(addNewRecord(newRecord));
            dispatch(closeRecordModal());
        } else {
            alert("All Fields are required");
        }

        setMyRecord({
            recordID: "",
            accountID: "",
            transactionType: "",
            categoryType: "",
            amount: 0,
        })

        e.preventDefault();
    }

  return (
    <Wrapper>
    <FormWrapper>
        <FormHeader>
            <Title>Add Account Details</Title>
            <Icon>
                <FaTimes onClick={() => dispatch(closeRecordModal())}/>
            </Icon>
        </FormHeader>
        <Form onSubmit={addRecord}>
            <FormGroup>
                <Label>Select Account</Label>
                <Select
                    value={myRecord.accountID}
                    type="text"
                    name="accountID"
                    id="accountID"
                    onChange={handleChange}
                >
                    <Option value="">Select Account</Option>
                    {
                        myAccounts?.map((account) => (
                            <Option key={account.id} value={account.id}>{account.accountName}</Option>
                        ))
                    }
                </Select>
            </FormGroup>
            
            <FormGroup>
                <Label>Select Transaction Type</Label>
                <Select
                    value={myRecord.transactionType}
                    type="text"
                    name="transactionType"
                    id="transactionType"
                    onChange={handleChange}
                >
                    <Option value="">Select Transaction Type</Option>
                    <Option value="expense">Expense</Option>
                    <Option value="income">Income</Option>
                </Select>
            </FormGroup>
            <FormGroup>
                <Label>Select Category</Label>
                <Select
                    value={myRecord.categoryType}
                    type="text"
                    name="categoryType"
                    id="categoryType"
                    onChange={handleChange}
                >
                    <Option value="">Select Category</Option>
                    {
                        categories.map((category) => (
                            <Option key={category.id} value={category.type}>{category.type}</Option>
                        ))
                    }
                </Select>
            </FormGroup>
            <FormGroup>
                <Label>Transaction Amount</Label>
                <Input
                    placeholder='30000'
                    value={myRecord.amount}
                    type="number"
                    name="amount"
                    id="amount"
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Button>Add Record</Button>
            </FormGroup>
        </Form>
    </FormWrapper>
    </Wrapper>
  )
}

export default RecordModal