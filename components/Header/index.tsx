import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import * as S from './styles';

const Header = () => {
  const [firstTeamName, setFirstTeamName] = useState<string>('TIME A');
  const [secondTeamName, setSecondTeamName] = useState<string>('TIME B');
  const [editingFirstTeamName, setEditingFirstTeamName] = useState<boolean>(false);
  const [editingSecondTeamName, setEditingSecondTeamName] = useState<boolean>(false);

  return (
    <tr>
      <td colSpan={2}>
        <S.TeamNameContainer>
          {editingFirstTeamName && (
            <>
              <S.Input 
                type="text" 
                value={firstTeamName} 
                onChange={(e) => {
                  var value = e.target.value;
                  if (!value) {
                    value = 'TIME A';
                  }
                  setFirstTeamName(value);
                }}
              />
              <CheckOutlined onClick={() => setEditingFirstTeamName(false)} />
            </>
          )}
          {!editingFirstTeamName && (
            <>
              <S.Span>{firstTeamName}</S.Span>
              <EditOutlined onClick={() => setEditingFirstTeamName(true)} />
            </>
          )}
        </S.TeamNameContainer>
      </td>
      <td colSpan={2}>
        x
      </td>
      <td colSpan={2}>
        <S.TeamNameContainer>
          <S.Span>{secondTeamName}</S.Span>
          <EditOutlined />
        </S.TeamNameContainer>
      </td>
    </tr>
  )
}

export default Header;