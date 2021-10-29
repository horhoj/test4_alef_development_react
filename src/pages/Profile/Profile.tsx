import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { getUserData } from '../../store/app/selectors';
import { Title, Element } from '../../GlobalStyles';

export const Profile: React.FC = () => {
  const userData = useAppSelector(getUserData);

  return userData ? (
    <Wrap>
      <Element mt={0}>
        <Title>Персональные данные</Title>
      </Element>
      <Element mt={20}>
        <UserData>
          {userData.name}, {userData.age} лет
        </UserData>
      </Element>
      <Element mt={60}>
        <Title>Дети</Title>
      </Element>
      <Element mt={20}>
        {userData.children.map((child) => (
          <Element key={child.id} mt={20}>
            <Child>
              {child.name}, {child.age} лет
            </Child>
          </Element>
        ))}
      </Element>
    </Wrap>
  ) : null;
};

const Wrap = styled.div``;

const UserData = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #111111;
`;

const Child = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  width: fit-content;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
