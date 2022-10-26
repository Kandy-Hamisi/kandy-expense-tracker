import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.aside`
    position: fixed;
    top: 2rem;
    left: 3rem;
    height: 80vh;
    width: 150px;
    background-color: #4b5d67;
    padding: 20px 15px;
    border-radius: 10px;
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    height: 80px;
    width: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const Username = styled.h3`
    color: #fff;
    font-size: 16px;
    font-weight: 800;
`;

const Divider = styled.hr`
    margin: 1.5rem 0;
    color: #fff;
    width: 100%;
`;

const InfoContainer = styled.div`
    margin-bottom: 1em;
`;

const IntroHeader = styled.h1`
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const Link = styled.a`
    color: #000;
    margin-bottom: 1em;
    transition: all 0.3s ease;
    :hover {
        color: #fff;
    }
`;

const SignOutBtn = styled.button`
    outline: none;
    padding: 10px;
    width: 100%;
    background-color: #fff;;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.6s ease;
    cursor: pointer;

    :hover {
        background-color: #261c2c;
        color: #fff;;
    }
`;

const Sidebar = () => {
  return (
    <Wrapper>
        <Profile>
            <Image src="https://avatars.githubusercontent.com/u/61687064?v=4"/>
            <Username>Kandy Hamisi</Username>
        </Profile>
        <Divider/>
        <InfoContainer>
            <IntroHeader>Administration</IntroHeader>
            <LinksContainer>
                <Link href='/'>Dashboard</Link>
            </LinksContainer>
        </InfoContainer>
        <InfoContainer>
            <IntroHeader>Management</IntroHeader>
            <LinksContainer>
                <Link href='/'>Accounts</Link>
                <Link href='/'>Invoices</Link>
                <Link href='/'>Transactions</Link>
            </LinksContainer>
        </InfoContainer>
        <InfoContainer>
            <IntroHeader>Accounting</IntroHeader>
            <LinksContainer>
                <Link href='/'>Reports</Link>
            </LinksContainer>
        </InfoContainer>
        <SignOutBtn>Sign Out</SignOutBtn>
    </Wrapper>
  )
}

export default Sidebar