import styled from 'styled-components'
import AccountModal from './AccountModal';
import { useSelector, useDispatch } from 'react-redux';
import { openAccountModal } from '../features/Modal/modalSlice';
import { closeAccountModal } from '../features/Modal/modalSlice';
import RecordModal from './RecordModal';

const Wrapper = styled.section`
    background-color: #4b5d67;
    padding: 30px;
    margin-right: 1em;
    border-radius: 10px;
    display: flex;
    align-items: center;

    & :first-child {
        margin-right: 30px;
    }
`;

const AllAccounts = styled.div`
    display: flex;
    align-items: center;
`;

const Account = styled.div`
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 30px;
`;

const AccountName = styled.h1`
    font-size: 15px;
`;

const TypeAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AccountType = styled.span`
    font-size: 14px;
`;

const InitialAmount = styled.span`
    font-size: 14px;
`;

const DottedButton = styled.button`
    border: 3px dashed #fff;
    background: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.6s ease;

    &:hover {
        border: 3px dashed #222831;
        color: #fff;
    }
`;

const AccountContainer = () => {
    const dispatch = useDispatch();
    const myModalState = useSelector(state => state.accountModal.modalState);
    const createdAccounts = useSelector(state => state.addAccount.allAccounts);
    const recordModalState = useSelector(state => state.recordModal.recordModalState)
  return (
    <Wrapper>
        <DottedButton
            onClick={() => (createdAccounts.length <= 2)
                ? dispatch(openAccountModal())
                : alert("Upgrade to premium to Add more accounts")}
        >
                + Add Account
        </DottedButton>
        <AllAccounts>
            {
                createdAccounts?.map((account) => (
                    <Account key={account.id}>
                        <AccountName>{account.accountName}</AccountName>
                        <TypeAmountContainer>
                            <AccountType>{account.accountType}</AccountType>
                            <InitialAmount>{account.initialAmount}</InitialAmount>
                        </TypeAmountContainer>
                    </Account>
                ))
            }
        </AllAccounts>
    { myModalState && <AccountModal/>}
    { recordModalState && <RecordModal/>}
    {}
    </Wrapper>
  )
}

export default AccountContainer