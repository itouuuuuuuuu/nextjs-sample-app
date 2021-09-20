import styled from 'styled-components';

const Container = styled.div`
  color: blue;
  margin: 50px;
`;

const Text = styled.div`
  color: ${(props) => (props.color ? props.color : 'dark')};
`;

export default function Home() {
  return (
    <Container>
      test
      <Text color='red'>Hello!!</Text>
    </Container>
  );
}
