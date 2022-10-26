import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { openAccountModal } from '../features/Modal/modalSlice';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 18%;
    top: 3rem;
    width: calc(100% - 18%);
    color: #fff;
`;

const CompanyLogo = styled.div`

`;

const CompanyName = styled.h1`
    font-weight: 700;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1em;
    
    & :first-child{
        margin-right: 10px;
    }

    & :first-child:hover {
        background-color: #fff;
        color: #3c415c;
    }

    & :last-child:hover {
        background-color: #519872;
        color: #fff;
    }
`;

const Button = styled.button`
    background-color: #3c415c;
    border-radius: 5px;
    padding: 10px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.6s ease;

    
`;

const Navbar = () => {
    const dispatch = useDispatch();
    const createdAccounts = useSelector(state => state.addAccount.allAccounts)

  return (
    <Wrapper>
        <CompanyLogo>
            <CompanyName>Presupuesto</CompanyName>
        </CompanyLogo>
        <ButtonContainer>
            <Button
                onClick={() => (createdAccounts.length <= 2)
                    ? dispatch(openAccountModal())
                    : alert("Upgrade to premium to Add more accounts")}
            >
                Add Account
            </Button>
            <Button>Add Record</Button>
        </ButtonContainer>
    </Wrapper>
  )
}

export default Navbar