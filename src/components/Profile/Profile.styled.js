import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px hsl(0deg 0% 47% / 75%);
  margin: 0 auto;
  width: 400px;
`;

export const Avatar = styled.img`
  background-color: aliceblue;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.grey};
`;

export const Name = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
`;

export const Location = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
`;

export const StatsInfo = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 8px;
  background-color: #f6ace8;
  border: 1px solid #a11286;
  border-radius: 0 0 5px 5px;
`;

export const StatsInfoItem = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  padding-top: 20px;
  width: 33.33333%;
  :not(:last-child) {
    border-right: 1px solid #a11286;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
