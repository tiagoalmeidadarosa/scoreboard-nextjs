import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import * as S from './styles';

interface HeaderProps {
  firstTeamName: string;
  secondTeamName: string;
  setFirstTeamName: (value: string) => void;
  setSecondTeamName: (value: string) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <tr>
      <td colSpan={2}>
        <ChangeName
          teamName={props.firstTeamName}
          setTeamName={props.setFirstTeamName}
        />
      </td>
      <td colSpan={2}>
        x
      </td>
      <td colSpan={2}>
        <ChangeName
          teamName={props.secondTeamName}
          setTeamName={props.setSecondTeamName}
        />
      </td>
    </tr>
  )
}

type ChangeNameProps = {
  teamName: string;
  setTeamName: (value: string) => void;
};

export const ChangeName = (props: ChangeNameProps) => {
  const { teamName, setTeamName } = props;
  const [editingTeamName, setEditingTeamName] = useState<boolean>(false);

  return (
    <S.TeamNameContainer>
      {editingTeamName && (
        <>
          <S.Input 
            type="text" 
            value={teamName} 
            onChange={(e) => {
              const { value } = e.target;
              setTeamName(value);
            }}
          />
          <CheckOutlined 
            onClick={() => {
              if (!teamName) {
                return;
              }
              setEditingTeamName(false);
            }}
          />
        </>
      )}
      {!editingTeamName && (
        <>
          <S.Span>{teamName}</S.Span>
          <EditOutlined onClick={() => setEditingTeamName(true)} />
        </>
      )}
    </S.TeamNameContainer>
  )
}

export default Header;