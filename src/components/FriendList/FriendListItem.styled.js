import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid rgba(202, 205, 232, 0.2);
  border-radius: 10px;
  box-shadow: 0px 0px 18px -8px rgba(224, 19, 185, 1);
  width: 300px;
  background-color: white;
`;

export const Status = styled.span`
  color: ${p => {
    return p.active ? p.theme.colors.green : p.theme.colors.red;
  }};
`;
