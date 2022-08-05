import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import * as S from './styles';

const Header = () => {
  const DEFAULT_TEAM_A_NAME = 'TIME A';
  const DEFAULT_TEAM_B_NAME = 'TIME B';
  const [firstTeamName, setFirstTeamName] = useState<string>(DEFAULT_TEAM_A_NAME);
  const [secondTeamName, setSecondTeamName] = useState<string>(DEFAULT_TEAM_B_NAME);

  return (
    <tr>
      <td colSpan={2}>
        <ChangeName
          teamName={firstTeamName}
          setTeamName={setFirstTeamName}
        />
      </td>
      <td colSpan={2}>
        x
      </td>
      <td colSpan={2}>
        <ChangeName
          teamName={secondTeamName}
          setTeamName={setSecondTeamName}
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