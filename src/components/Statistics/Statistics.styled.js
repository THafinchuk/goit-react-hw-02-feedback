import styled from 'styled-components';

export const StatsContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #a612e1, #e0b5f1);
`;

export const StatItem = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
`;

export const PositiveStat = styled(StatItem)`
  color: #3b0452;
`;

export const Text = styled.span`
  font-weight: bold;
`;
